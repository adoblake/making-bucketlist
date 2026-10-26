# BucketList product direction

## Promise

Find a real basketball court and the people to play with, nearby or at a destination. The success measure is games that actually happen, not time spent in the app.

## First release

1. Discover courts and upcoming runs by destination or opt-in current location.
2. Join a lasting court community, with chat that continues between games.
3. Start a game with a real time, player limit, play style, and meeting/access notes.
4. Join the roster, coordinate in game chat, and get directions.
5. Opt into time-limited availability. The production service must expire presence and stop location updates when the app leaves the foreground.

The prototype implements these interactions locally. Availability is tab-only and never broadcasts. No sample player count represents live occupancy. Adaptive play is a selectable game style, not a certification of venue accessibility. Unknown access information must remain unknown until verified.

## Quality requirements for a real launch

- Authentication and shared storage, server-enforced membership/capacity, realtime delivery, and authorization checks.
- Game cancellation, host controls, attendance confirmation, waitlists, notifications, and explicit timestamps/timezones.
- Venue-specific accessibility facts, court-condition reports with observation dates, and trustworthy opening hours.
- Report/block tools, moderation, privacy controls, and deliberate age policy before admitting minors. The initial audience in the brief is adults 18–35.
- Availability without publishing precise player coordinates; explicit opt-in and expiry. No background presence by default.
- Measure successful meetups, time to find a suitable game, attendance, repeat play, and report resolution. Growth and revenue figures in the brief are hypotheses, not validated forecasts.

## Later

Self-reported improvement stats, training, court reviews, and community events can follow a reliable meetup loop. Wearables, subscriptions, ads, and DAO governance require separate validation and should not complicate finding a free pickup game.

## Source reconciliation

The pasted business plan supports a basketball-first, simple initial release. Retain community, game organization, inclusion, and court discovery. Replace a long profile/onboarding sequence with progressive setup. Keep a lasting court group separate from individual game rosters. Avoid claims of guaranteed play or live court occupancy without evidence.

The supplied layout screenshot shows onboarding, map discovery, court details, game/team setup, and player lists. Its small text is unreadable; the implementation uses the visible structure, not an exact visual reproduction. The Figma links and reference GitHub code remain inaccessible in this environment.

## Mobile revision

The app now opens with court search and a selected-court Google Maps embed, followed by court details and scheduled games. Bottom navigation separates Courts, My games, Chat, My stats, and Profile. Browsing is available immediately; a local profile can be filled out later.

Scheduled games contain two capacity-limited teams. Players can join, choose/switch a side, and name that side within the game. Court communities continue between games; game chat is specific to a roster. Self-reported session stats are separate from official scoring. Independent profile/stats consent controls default to private, with a public preview and fictional public/private roster examples. Light, dark, and device themes are saved locally.

This revision replaces the previous tab-only availability control to focus on scheduled team formation. Shared presence remains a production milestone. Maps are Google web embeds, not a licensed custom Maps SDK implementation. Cloud map access is blocked; an explicitly labeled illustration and external map link handle that state. No illustrative court diagram represents street geography or navigation.

Local state is migrated from the earlier prototype where possible, preserving custom games, memberships, and messages. Custom future game times are stored as ISO instants and displayed in the viewer's timezone. Fictional sample-game dates are generated relative to the current demo session and must not be treated as scheduled real events.

## Reference-led opening flow

The supplied four-stage map reference now defines the opening flow: location → compact court popup → court info panel → team expansion. The landing screen is the map on every launch. Pierce Park is the initial sample venue; no location permission is requested automatically. Stats, Search, and Chat form the primary navigation, with personal game/profile settings in the hamburger menu. The orange basketball-pin motif, black chrome, white text, pink request indicators, and square orange actions are repeated throughout. Light/dark/device appearance remains available.

Guests browse courts, games, and public roster details. A tab-local demo session gates team joins, game creation, messaging, and personal screens. This demonstrates the post-login sequence without pretending to authenticate: no credentials, account, or secure session exist. Server authentication remains a production requirement. No numeric court rating or review count is fabricated; unverified venues say Not rated. Court art is labeled as an illustration rather than a real venue photo.

## Geographic availability markers

The supplied orange basketball pin now belongs to real map coordinates, using Leaflet/OpenStreetMap rather than an iframe overlay. It appears only when a court matches the location/day/style search and has a future, non-cancelled scheduled game with an open roster spot. The map and results share those filters. This supersedes earlier Google-embed and illustrative-locator descriptions. Google directions remain available; a custom Google basemap requires Maps API configuration. Pins still reflect sample data, not verified live occupancy. The published Figma site was also blocked; standards and access evidence are documented in docs/UX-DECISIONS.md.

## All-parks discovery and populated showcase

The latest direction supersedes the game-only default: basketball parks are selectable even without a scheduled game. All basketball parks is the default; Games with open spots is a separate filter. Live directory lookup uses OSM parks and contained basketball features around a searched location. No global completeness or live provider success is claimed; provider errors/timeouts remain an external limitation, while fixture integration and failure handling are tested.

A separately stored fictional 90-day player showcase demonstrates 24 stat-linked completed sessions, three upcoming games, named teams, three court groups, personal stats/averages/progress, profile visibility, and multi-person demo conversations. The user can return to preserved personal state or deliberately restart the sample.

## Phone sharing, scheduling, and profile conversion

The reference date/time selection replaces datetime-local with a seven-day strip, grouped selectable ranges, duration, timezone, and explicit confirmation. Game form drafts survive cancel/change, and end times persist. Guest browsing retains the core place/game value, while player identities and personal/social actions are gated behind a benefits-led local profile prompt. The populated showcase remains a way to try the offered features.

An installable mobile web package adds the two-color orange/charcoal basketball-pin icon, manifest, iOS home-screen image, own-origin offline shell, QR and sharing. The gh-pages site branch is published. An initial activation attempt through the integration returned 403; the public site subsequently became available and was verified to serve the exact latest build, with manifest, service worker, icon, and QR assets returning 200. Public link: https://adoblake.github.io/making-bucketlist/ . Shared cross-device data and real authentication remain production work.

## Phoenix coverage fix

Phoenix no longer depends on a live Overpass lookup. A retrieved City of Phoenix public GIS snapshot supplies 125 basketball locations, preserving all 155 basketball point records plus park metadata. Names/known aliases are normalized, starter IDs are retained, and cached aliases preserve existing games/chats without duplicate pins. Clusters keep the full-city map readable. All 125 entries are searchable and selectable without games. Court details expose source/date/location precision and listed amenities. The refresh helper was validated against the real city service. Other cities still have starter/live-provider limits; source listings are not live occupancy or access guarantees.


## Current opening and map-area search

This supersedes earlier fixed-Phoenix, tab-only-session, radius-filter, and fit-to-results descriptions. First-time guests see a skippable two-step introduction, with the option to create a local profile. Returning signed-in local profiles go straight to the map and retain their saved information. Explicit sign-out stops automatic re-entry. Real cross-device accounts and server authentication remain a production milestone.

On launch the app requests foreground browser geolocation, centers on the user when allowed, and displays a blue dot with accuracy radius. Denied/unavailable location retains manual destination search and explains the fallback map. Orange basketball pins and the search list include only matching courts inside the current map bounds. Pan/zoom updates results without resetting the camera. A location button returns the map to the user.

The full municipal Phoenix snapshot remains bundled. Visible map areas automatically query OSM basketball features in the visible bounding box, with debounce, request cancellation, a zoom limit, and honest failure/incomplete-coverage labels. Exact coordinates are not saved to the profile; external map/directory providers receive viewport requests. No live occupancy or exhaustive worldwide coverage is promised.
