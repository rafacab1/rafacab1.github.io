function melodiafm(){
    var melodia = document.createElement('audio');

    melodia.setAttribute('src', 'http://icecast-streaming.nice264.com/melodiafm?hash=1520730212720.mp3');

    document.getElementById("playmfm").addEventListener("click", function() {
        melodia.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    melodia.pause();
    //});

    melodia.setAttribute("controls", "controls");
    melodia.setAttribute("autoplay", "autoplay");
    document.body.appendChild(melodia);
};