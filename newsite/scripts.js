// lastfm
fetch("https://lastfm-last-played.biancarosa.com.br/nondmo/latest-song").then(res => res.json()).then(json => {
	if (json.track["@attr"]?.nowplaying) {
		document.getElementById("lastfm").textContent = json.track.name.toLowerCase() + " - " + json.track.artist["#text"].toLowerCase();
	}
});

// prerender html page on link hover
// Get all `<a>` elements
const anchorTagElements = document.getElementsByTagName('a');

[ ...anchorTagElements ].forEach(anchor => {
    anchor.addEventListener('mouseover', event => {
        // Get the target href from the element.
        // i.e. "/tip/hover-preloading" from <a href="/tip/hover-preloading">
        const href = event.target.href;

        // Create a new <link rel="prefetch" href="/tip/hover-preloading"> element
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    });
});