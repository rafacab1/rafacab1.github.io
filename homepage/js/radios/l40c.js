function los40classic(){
    var los40c = document.createElement('audio');

    los40c.setAttribute('src', 'http://19643.live.streamtheworld.com/LOS40_CLASSIC.mp3');

    document.getElementById("playl40c").addEventListener("click", function() {
        los40c.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    los40c.pause();
    //});

    los40c.setAttribute("controls", "controls");
    los40c.setAttribute("autoplay", "autoplay");
    document.body.appendChild(los40c);
};