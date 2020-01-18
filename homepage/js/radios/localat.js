function localatino(){
    var localatino = document.createElement('audio');

    localatino.setAttribute('src', 'http://audio-online.net:8012/live');

    document.getElementById("playlocalat").addEventListener("click", function() {
        localatino.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    localatino.pause();
    //});

    localatino.setAttribute("controls", "controls");
    localatino.setAttribute("autoplay", "autoplay");
    document.body.appendChild(localatino);
};