# BucketList

A first interactive implementation of the core loop: find a physical place to play → join a game → coordinate in the game’s group.

## Open without installation

On GitHub choose **Code → Download ZIP**, extract the archive, and open **BucketList.html** in your browser. This standalone demo includes its styles and scripts. Joins and chats are local to your browser; no account or shared service is connected.

## Run

Requires Node.js 22 or later. No dependency installation is necessary.

```sh
cd /workspace/making-bucketlist
npm run dev
```

The server listens on port 3000 (`PORT` overrides it). Run `npm test` for HTTP smoke tests.

## Implemented

- Basketball-first discovery and destination search.
- Optional geolocation with distance filtering, error handling, and no coordinate persistence.
- Game details with a venue address, directions, player counts, skill level, and meeting notes.
- Join/leave, My Games, game creation with future dates and player limits, and per-game local chat.
- Persistent court groups with separate court chat and upcoming games.
- Tab-only, opt-in Open to Play status with 60-minute expiry.
- Adaptive basketball game style and access-needs notes; venue accessibility remains unverified.
- Explicit demo labels, empty states, keyboard controls, and native modal focus handling.

## Limits and next implementation work

This is a local prototype, not a live multiplayer service. Listings, hosts, counts, and relative times are examples. Messages and joins exist only in the current browser. Venue access and availability have not been verified. Maps opens an external directions service. Optional Google Fonts are loaded externally; system fonts work offline.

Production work requires authentication, a database, authoritative capacity reservations, realtime chat, venue verification, server-validated dates/timezones, shared game creation and cancellation, moderation/reporting/blocking, notification preferences, privacy controls, accessibility/browser testing, and deployment. Live data should replace sample events before inviting users.

The user supplied the business plan as text and a layout screenshot. Their product direction is captured in PRODUCT.md. The Figma URLs remain blocked by network policy and the dualistique39/bucketlist Git read returned access denied; the implementation does not claim to reproduce inaccessible source material.
