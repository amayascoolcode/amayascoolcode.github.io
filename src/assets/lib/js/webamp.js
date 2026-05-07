
// NOTE: Your audio file must be served from the same domain as your HTML
// file, or served with permissive CORS HTTP headers:
// https://docs.webamp.org/docs/guides/cors


function show() {
            /* Access image by id and change 
            the display property to block*/
            document.getElementById('webamp')
                .style.display = "block";
            document.getElementById('sprite')
                .style.display = "none";
}


import Webamp from "https://unpkg.com/webamp@^2/butterchurn";

const webamp = new Webamp({
  initialTracks: [
    {
      metaData: { artist: "madmadmaya", title: "quickie", },
      url: "/src/assets/lib/audio/quickie.wav",
    },
        
  ],
  initialSkin: { url: "/src/assets/lib/makemesad.wsz"},
});

webamp.renderWhenReady(document.getElementById("webamp"));