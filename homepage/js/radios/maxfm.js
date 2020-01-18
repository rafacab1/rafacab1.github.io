function maximafm(){
    var maximafm = document.createElement('audio');

    maximafm.setAttribute('src', 'http://20133.live.streamtheworld.com/MAXIMAFM.mp3');

    document.getElementById("playmaxfm").addEventListener("click", function() {
        maximafm.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    maximafm.pause();
    //});

    maximafm.setAttribute("controls", "controls");
    maximafm.setAttribute("autoplay", "autoplay");
    document.body.appendChild(maximafm);
};