# Familiar map behavior, Bucketlist identity

The basketball-pin silhouette from the supplied reference remains the primary court marker. It is drawn as a local SVG with an orange fill, dark outline, and basketball center. No external icon font is needed.

## Implemented conventions

- Geographic anchoring: Leaflet anchors the pin's bottom tip to the sample latitude/longitude and moves it with pan/zoom. Popups share that geographic anchor and auto-pan into view.
- Search and map agree: location, day, and play-style filters drive the same candidate list. The current map bounds are the search area. Pan/zoom updates both pins and list automatically without refitting the camera. A permanently accessible location arrow recenters on the user. Destination search deliberately moves the map; a name query narrows courts inside the current bounds.
- Game-only filter (superseded as the default by All basketball parks): a pin requires at least one future, non-cancelled, matching game with remaining roster capacity. A full/expired game does not create a pin. Pins disappear when no games match. A known venue without a matching spot remains inspectable in the list without an availability icon.
- Meaning: “available” means an open scheduled roster spot in the local sample, not verified court occupancy, booking, or access. All venues remain unverified. Adaptive basketball matches only explicitly adaptive games; All levels games also match other play styles.
- Touch and keyboard: 44 × 64 pixel marker targets; accessible court names; Enter/Space selection; visible focus; Escape dismissal; controls independent of color. This is implementation guidance, not a claim of full WCAG conformance.
- Public map → contextual court/game details → sign-in at the action. Court and game chats remain separate. Profile and stats sharing are still independently opt-in.
- Street-map attribution stays visible. The base map stays readable in either app theme. When tiles fail, an explicit status explains that court pins remain available; no invented street map is drawn.

## References and evidence

The Figma Make URL and published site were supplied by the user. Both were inaccessible through the cloud proxy. The supplied screenshots were reviewed; no claim is made to have inspected unseen Figma screens or interactions. The live site is https://kilt-seven-59448120.figma.site/ . The later Community link, https://www.figma.com/community/file/1695694396860711302/bucketlist-mobile-app , also returned a proxy access denial.

These standard references identify the conventions used. Their web pages could not be retrieved in this environment; Leaflet marker anchoring, keyboard behavior, and focus behavior were checked directly in the installed **Leaflet 1.9.4** source (`src/layer/marker/Marker.js`, `Icon.js`).

- [Leaflet marker API](https://leafletjs.com/reference.html#marker): coordinates, anchor points, keyboard activation, popups, and auto-pan.
- [Google Maps advanced markers](https://developers.google.com/maps/documentation/javascript/advanced-markers/overview): custom markers as location-based interactions. A future Google basemap implementation needs its Maps API configuration; an iframe cannot host our geographic markers.
- [WCAG 2.2 target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): target-size and spacing considerations. The implementation uses a 44-pixel-wide target rather than relying on a small graphic.
- [Material bottom sheets](https://m3.material.io/components/bottom-sheets/overview): contextual details while preserving map context.
- [OpenStreetMap tile policy](https://operations.osmfoundation.org/policies/tiles/): attribution, normal viewport tile requests, and no bulk/offline prefetch. The public tile service is not a production availability SLA; production hosting must respect its policy or provision a suitable provider.

## Remaining production needs

Verified court data and live event capacity, authenticated shared storage, fresh availability timestamps/cancellations, provider-approved production tiles or Maps SDK integration, device testing, and backend-enforced privacy. Demo sign-in and device-local membership do not provide account security or shared reservations.

## Latest revision

All basketball parks is now the default. Existing parks remain selectable without games. Games with open spots retains the earlier stricter filter. OpenStreetMap/Nominatim/Overpass supply an optional mapped-park directory; missing tags/boundaries and service failures prevent a claim of exhaustive global coverage. The separately stored 90-day showcase labels all performance and social data as fictional and preserves user-created personal data.

## Phoenix source correction

The five-record bootstrap was insufficient. The app now bundles all 155 records from the City of Phoenix Basketball Courts layer and supplements them with park records explicitly listing basketball, normalized to 125 locations. The source is https://services.arcgis.com/cfKakmeHE95cgeEK/arcgis/rest/services/ParksOpenData/FeatureServer (layers 0 and 10), discovered through the ArcGIS item owned by City_of_Phoenix and fetched successfully. This replaces the Overpass dependency for the initial Phoenix experience. It does not assert all-city/global coverage. Leaflet.markercluster groups nearby courts with count labels, and the search list provides direct access to each location. Source dates and amenities appear in court details.

## Location and returning-player opening

First-time guests receive a skippable two-step welcome: court/team purpose, then profile benefits and privacy. Location is requested after the introduction; returning visitors request it on launch. Browser permission remains the authority. A blue location dot and accuracy circle distinguish the user from orange court pins. Denial, timeouts, and unavailable geolocation retain a usable map and explain manual destination search; fallback Phoenix is never labeled as the user's location.

Signed-in local profiles reopen directly on the map across browser sessions. Explicit sign-out retains personal data but disables automatic re-entry. This is device-local prototype continuity, not production authentication. The existing profile/stat consent defaults remain unchanged.

Area discovery uses a bounded Overpass query for basketball features rather than the older slow per-park boundary traversal. Queries are debounced, cancellable, cached for the current page, and require a reasonable zoom. OSM tags and public-service availability limit coverage. Current coordinates are memory-only; map bounds reach external directory services. Google directions use the chosen court coordinates, including entries without a street address.

References: [W3C Geolocation API](https://www.w3.org/TR/geolocation/), [Leaflet map moveend and bounds](https://leafletjs.com/reference.html#map-moveend), and [Overpass bounding boxes](https://wiki.openstreetmap.org/wiki/Overpass_API/Language_Guide#Bounding_box). These support browser consent, a distinct user marker, and familiar map-area discovery.
