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
