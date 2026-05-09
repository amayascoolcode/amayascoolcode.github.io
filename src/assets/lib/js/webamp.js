
// NOTE: Your audio file must be served from the same domain as your HTML
// file, or served with permissive CORS HTTP headers:
// https://docs.webamp.org/docs/guides/cors

import Webamp from "https://unpkg.com/webamp@^2/butterchurn";

const webamp = new Webamp({
  initialTracks: [
    { metaData: { artist: "madmadmaya", title: "quickie", }, url: "/src/assets/lib/audio/quickie.wav", },
        
  ],
  initialSkin: { url: "/src/assets/lib/makemesad.wsz"},
});

webamp.renderWhenReady(document.getElementById("webamp"));