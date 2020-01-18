function rockfm(){
    var rockfm = document.createElement('audio');

    rockfm.setAttribute('src', 'http://rockfm.cope.stream.flumotion.com/cope/rockfm.mp3.m3u');

    document.getElementById("playrfm").addEventListener("click", function() {
        rockfm.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    rockfm.pause();
    //});

    rockfm.setAttribute("controls", "controls");
    rockfm.setAttribute("autoplay", "autoplay");
    document.body.appendChild(rockfm);
};