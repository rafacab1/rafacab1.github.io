function flaixfunction(){
    var flaix = document.createElement('audio');

    flaix.setAttribute('src', 'http://flaixfmmob.streaming-pro.com:8002/;');

    document.getElementById("playffm").addEventListener("click", function() {
        flaix.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    flaix.pause();
    //});

    flaix.setAttribute("controls", "controls");
    flaix.setAttribute("autoplay", "autoplay");
    document.body.appendChild(flaix);
};