function locafm(){
    var locafm = document.createElement('audio');

    locafm.setAttribute('src', 'http://audio-online.net:2300/live');

    document.getElementById("playloca").addEventListener("click", function() {
        locafm.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    locafm.pause();
    //});

    locafm.setAttribute("controls", "controls");
    locafm.setAttribute("autoplay", "autoplay");
    document.body.appendChild(locafm);
};