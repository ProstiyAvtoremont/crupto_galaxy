export const $ = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id) as T;
export const num = (id: string) => parseFloat($<HTMLInputElement>(id).value) || 0;

export function usd(n: number): string {
  if (!isFinite(n)) return '-';
  const a = Math.abs(n);
  const d = a === 0 ? 2 : a < 0.01 ? 6 : a < 1 ? 4 : 2;
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: d });
}
export const pct = (n: number) => `${n.toFixed(2)}%`;

// CoinGecko prices with a 60 s sessionStorage cache to respect free-tier limits.
export async function getPrices(ids: string[]): Promise<Record<string, number>> {
  const key = 'gs-prices:' + ids.join(',');
  try {
    const c = JSON.parse(sessionStorage.getItem(key) || 'null');
    if (c && Date.now() - c.t < 60_000) return c.v;
  } catch {}
  const r = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(',')}&vs_currencies=usd`
  );
  if (!r.ok) throw new Error('Price request failed');
  const j = await r.json();
  const v: Record<string, number> = {};
  ids.forEach((i) => (v[i] = j[i]?.usd));
  try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), v })); } catch {}
  return v;
}
