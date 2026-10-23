# BucketList

A mobile web prototype for **find a court → join a scheduled game → set up your team → coordinate and play**. Modeled on the supplied mobile app layout, with dark/orange styling and light/dark/device themes.

## Open it without installing anything

Choose **Code → Download ZIP** on GitHub, extract the archive, and open **BucketList.html** in your browser. The styles and scripts are included in that file. Google Maps needs Internet access; if it is blocked, the app shows a clearly labeled court-locator illustration and an external map link.

This is a local prototype, not a native iOS/Android release or a multiplayer service. Fictional players and sample games are labeled. Changes stay in browser storage; chats are not delivered to other people.

## What you can try

- **Courts:** search Phoenix, Scottsdale, or Austin; select a court on the Google Maps embed; open court details, directions, scheduled games, or its lasting community chat. Optional geolocation filters the sample database within 30 miles.
- **Scheduled games:** join the roster, select/switch between capacity-limited Team A/B, and name your team within that game. Create a future game with a court, player limit, play style, and meeting/access notes.
- **Chat:** separate court-community and game-group conversations, plus a central chat list.
- **My stats:** log and delete personal session records for points, rebounds, and assists; see self-reported averages and history.
- **Profiles:** open a player from a roster. Fictional examples demonstrate public and private profiles/stats. Your profile details and stats have independent sharing settings, both off by default; preview what others would see. Display names remain visible on rosters.
- **Appearance:** use the header toggle or select Light, Dark, or Use device setting in Profile, then save. Themes persist. Google controls its embedded map's appearance independently.

## Screenshots

Captured on a mobile viewport. The map illustration shows the cloud network fallback, not Google street imagery.

| Dark | Light | Scheduled teams |
| --- | --- | --- |
| ![Dark mobile home](docs/mobile-dark.png) | ![Light mobile home](docs/mobile-light.png) | ![Game teams](docs/mobile-teams.png) |

## Development

Requires Node.js 22+ and npm.

```sh
npm ci
npm start
```

Open the server on port 3000 (`PORT` overrides it). Runtime uses Node built-ins; Playwright is a development-only dependency.

```sh
npm test                 # HTTP, team-capacity, privacy projection, and stats tests
npm run build            # regenerate the downloadable BucketList.html
```

Browser regression checks require a running server and Chromium:

```sh
# Terminal 1
PORT=3090 npm start
# Terminal 2, if Chromium is already installed
APP_URL=http://127.0.0.1:3090 BROWSER_EXECUTABLE=/usr/bin/chromium npm run test:browser
```

If no Chromium is installed, run `npx playwright install chromium` and omit `BROWSER_EXECUTABLE`. The browser suite checks team switching/naming, separate chats, profile visibility, stats, persistence, destination search, themes, responsive overflow, and the standalone artifact. External Google Maps rendering is not asserted because the cloud environment blocks it.

## Maps and privacy boundaries

This prototype uses a Google Maps web embed and external Google directions links; it has no Maps API key, live Places search, custom map markers, or verified court database. A production integration needs an approved Maps/Places configuration with appropriate billing and key restrictions. Venue coordinates, access, hours, and conditions remain unverified. Map-blocking/offline cases retain access to court details and an external map link.

Precise user coordinates stay in memory for nearby filtering; only a selected public court address is used in the map request. Google may receive ordinary embed request metadata. Stats/profile visibility is demonstrated in UI projections only. Real privacy, team reservations, and message delivery require authenticated server-side authorization and shared storage.

## Next production milestones

Authentication; shared games and atomic capacity reservations; realtime chat; server-enforced profile permissions; host controls/cancellation; waitlists; notifications; reporting/blocking and moderation; verified courts/accessibility; real Maps/Places integration; native packaging and device testing.

The business plan and layout screenshot informed this version. The Figma links and reference GitHub repository were inaccessible. See [PRODUCT.md](PRODUCT.md) for the product direction.
