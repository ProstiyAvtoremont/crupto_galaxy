// Edit this file to change tools, and affiliate links.
export const SITE = {
  name: 'GalaxySpace',
  tagline: 'Run the numbers before you stake, swap, or bridge.',
  description:
    'Free crypto calculators: TON liquidity pool impermanent loss, L2 gas fee simulator, and restaking points and yield. Runs in your browser, no sign-up.',
};

export const TOOLS = [
  {
    href: '/ton-yield/',
    name: 'TON Pool Calc',
    short: 'TON Pools',
    desc: 'Find out whether a STON.fi or DeDust pool beats simply holding, after impermanent loss and fees.',
    color: '#4fe3ff',
    tilt: -25,
  },
  {
    href: '/gas-simulator/',
    name: 'Gas Fee Simulator',
    short: 'Gas Simulator',
    desc: 'Live gas prices on Base, Optimism, Linea, Blast and Taiko. See what 100, 1,000 or 10,000 transactions cost right now.',
    color: '#ffb86b',
    tilt: 20,
  },
  {
    href: '/restaking-calc/',
    name: 'Restaking Tracker',
    short: 'Restaking',
    desc: 'Project points, pool share and net profit for EigenLayer, Symbiotic and Karak over 30, 60 or 90 days.',
    color: '#8b6cff',
    tilt: -50,
  },
];

// TODO: replace with your own referral links.
export const AFFILIATES = {
  ton: { label: 'Buy TON with low fees', url: 'https://www.bybit.com/' },
  eth: { label: 'Get ETH on an exchange', url: 'https://www.okx.com/' },
};

