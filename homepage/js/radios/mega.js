function megastar(){
    var megastar = document.createElement('audio');

    megastar.setAttribute('src', 'http://megastar.cope.stream.flumotion.com/cope/megastar.mp3.m3u');

    document.getElementById("playmega").addEventListener("click", function() {
        megastar.play();
    });

    //document.getElementById("pause").addEventListener("click", function() {
    //    megastar.pause();
    //});

    megastar.setAttribute("controls", "controls");
    megastar.setAttribute("autoplay", "autoplay");
    document.body.appendChild(megastar);
};