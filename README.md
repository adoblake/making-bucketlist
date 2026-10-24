# BucketList

A mobile web prototype for **find a court → join a scheduled game → set up your team → coordinate and play**. It opens automatically to the full-screen court map, following the supplied mobile reference: hamburger navigation, basketball-pin marker, compact court popup, expandable court/game panels, and Stats / Search / Chat navigation. The orange/black/white design system carries through the app, with light/dark/device themes.

## Open it without installing anything

Choose **Code → Download ZIP** on GitHub, extract the archive, and open **BucketList.html** in your browser. The styles and scripts are included in that file. Street map tiles need Internet access. The map uses Leaflet/OpenStreetMap so our basketball pins can be geographically anchored. Google Maps remains available for directions. If tiles are blocked, a status message explains that the pins use sample coordinates; no fake street geography is shown.

This is a local prototype, not a native iOS/Android release or a multiplayer service. Fictional players and sample games are labeled. Changes stay in browser storage; chats are not delivered to other people.

## Opening sequence

The app always opens in map mode, with no marketing page or mandatory profile form. The initial map fits the available sample Phoenix courts, with Pierce Park initially selected. The default **All basketball parks** mode keeps parks selectable even when no games are scheduled. **Games with open spots** is a separate optional filter. Tap its basketball pin, then tap the court name in the popup for court details, games, and teams. The popup and bottom bar both offer **Start a game**. In Games with open spots mode, time and play-style filters remove pins for full, past, cancelled, or nonmatching games. In All basketball parks mode, game availability does not hide a venue. Availability here does not mean verified live court occupancy. Search opens a court-search overlay with time/play-style filters. My Games, Profile, and the theme toggle are in the hamburger menu.

Guests can browse public court/game details. Joining a team, organizing a game, accessing personal screens, and chatting require the clearly labeled **local demo sign-in**. Enter a display name to exercise that sequence, or continue browsing. No account is created, no password is collected, and there is no authentication server. A tab-scoped demo session survives reloads; sign-out is in Profile. Device-local data is retained after sign-out. This UI gate is not a security boundary.

## Explore the populated showcase

Tap **Explore 90-day player demo** on the map or in the menu. It opens the fictional Marcus Rivera profile with 24 self-reported sessions over roughly three months, a progress chart and first/latest-session averages, 1,320 demonstration minutes, three named teams, three court communities, upcoming games, completed session details, and group conversations with fictional participants. Jump from stats to games, chats, or profile.

Showcase state is stored separately from your personal demo state. Its edits survive reloads. **Exit showcase · restore my data** in the menu returns to your preserved personal data. **Restart populated showcase** deliberately restores its starting sample. No fictional performance, attendance, or conversation represents a real person or reservation.

## Finding basketball parks beyond the samples

Search a city or destination, then use **Find mapped basketball parks in this area**. This queries OpenStreetMap via Nominatim and Overpass for parks that contain tagged basketball features, within roughly 10 miles of the searched center. Known parks remain selectable without an app game. A sample no-game venue is Cielito Park; it demonstrates starting the first game at a park.

This is not a guaranteed worldwide list of every physical park. Untagged basketball courts, unmodeled park boundaries, private access, and missing map data can create omissions. Location lookup responded during validation, but external Overpass queries returned HTTP 406 or timed out, so live directory results could not be verified here. Provider integration is exercised with fixture responses and has explicit incomplete-result/error handling; do not describe fixture tests as a successful live lookup. When live lookup fails, the UI keeps saved/demo venues and says the directory is incomplete. Venue hours, access, and conditions remain unverified.

## What you can try

- **Courts:** search Phoenix, Scottsdale, or Austin; select a sample court, tap its marker/popup, and pan/zoom the map with geographically anchored pins; open court details, directions, scheduled games, or its lasting community chat. Optional geolocation filters the sample database within 30 miles.
- **Scheduled games:** join the roster, select/switch between capacity-limited Team A/B, and name your team within that game. Create a future game with a court, player limit, play style, and meeting/access notes.
- **Chat:** separate court-community and game-group conversations, plus a central chat list.
- **My stats:** log and delete personal session records for points, rebounds, and assists; see self-reported averages and history.
- **Profiles:** open a player from a roster. Fictional examples demonstrate public and private profiles/stats. Your profile details and stats have independent sharing settings, both off by default; preview what others would see. Display names remain visible on rosters.
- **Appearance:** use the hamburger-menu toggle or select Light, Dark, or Use device setting in Profile, then save. Themes persist. The street basemap retains its readable provider styling in both themes.

## Screenshots

Captured on a mobile viewport. Street tiles are blocked in the cloud screenshots. Markers are geographically projected against a neutral grid; it is not street imagery.

| Opening map | Court popup | Court details |
| --- | --- | --- |
| ![Map opening](docs/mobile-dark.png) | ![Court popup](docs/mobile-popup.png) | ![Court details](docs/mobile-court.png) |

| Teams | Demo sign-in | Light theme |
| --- | --- | --- |
| ![Court teams](docs/mobile-teams.png) | ![Local demo login](docs/mobile-login.png) | ![Light theme](docs/mobile-light.png) |

## Development

Requires Node.js 22+ and npm.

```sh
npm ci
npm start
```

Open the server on port 3000 (`PORT` overrides it). The server uses Node built-ins. Leaflet 1.9.4 is pinned and its licensed distribution is bundled in public/vendor/leaflet so the standalone artifact needs no CDN scripts. Playwright is a development-only dependency.

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

If no Chromium is installed, run `npx playwright install chromium` and omit `BROWSER_EXECUTABLE`. The browser suite checks automatic map opening, guest browsing, local-demo sign-in gates/cancel/resume/sign-out, and team switching/naming, separate chats, profile visibility, stats, persistence, destination search, themes, responsive overflow, and the standalone artifact. Run `APP_URL=http://127.0.0.1:3092 BROWSER_EXECUTABLE=/usr/bin/chromium npm run test:showcase` with a server on 3092 for the populated-showcase and fixture-directory regression. Marker projection, keyboard activation, pan/refit, and availability filters are checked; external tile availability is not asserted because the cloud environment blocks the tile provider.

## Maps and privacy boundaries

The map uses Leaflet 1.9.4 and OpenStreetMap street tiles with visible attribution, custom geographic basketball pins, pan/zoom, auto-panning popups, and fit-to-results. Google Maps directions open only when requested. No Maps API key is required for this prototype. A custom Google-powered map can replace this provider when the required API configuration is supplied. Public OSM tiles have a usage policy and no app-specific uptime guarantee; production must provision an appropriate provider.

Court coordinates, access, hours, and conditions remain sample/unverified. All basketball parks is the default directory mode. The separate Games with open spots mode uses future scheduled games and selected day/style. Neither mode claims live court occupancy. Self-reported sample availability is not a court reservation. Known courts without matching available games remain in the results list without a pin.

Precise user coordinates stay in memory for local filtering. Normal map viewport tile requests go to OpenStreetMap; opening directions sends the chosen public venue to Google. Stats/profile visibility remains a local UI demonstration, not server authorization. Real privacy, team reservations, and message delivery require authenticated shared storage.

See [UX decisions and standard references](docs/UX-DECISIONS.md) for the applied conventions, source-access limitations, and remaining production work. The new published Figma site also could not be retrieved through the cloud proxy.

## Showcase screenshots

| Player stats and progress | Upcoming games and history |
| --- | --- |
| ![Showcase stats](docs/showcase-stats.png) | ![Showcase games](docs/showcase-games.png) |

## Next production milestones

Authentication; shared games and atomic capacity reservations; realtime chat; server-enforced profile permissions; host controls/cancellation; waitlists; notifications; reporting/blocking and moderation; verified courts/accessibility; real Maps/Places integration; native packaging and device testing.

The business plan and layout screenshot informed this version. The Figma links and reference GitHub repository were inaccessible. See [PRODUCT.md](PRODUCT.md) for the product direction.
