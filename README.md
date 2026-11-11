# GalaxySpace

Free crypto calculators built with Astro and Tailwind CSS. Everything runs in the browser.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## Customise
Edit `src/config.ts`: referral links and tool names.

## Deploy on Cloudflare Pages
1. Push this repo to GitHub.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION` = `20`.
4. After the first deploy: Custom domains > add `galaxyspace.xyz`.
