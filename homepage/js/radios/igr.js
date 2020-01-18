function ibizafunction(){
    var ibiza = document.createElement('audio');

    ibiza.setAttribute('src', 'http://ibizaglobalradio.streaming-pro.com:8024/;');

    document.getElementById("playigr").addEventListener("click", function() {
        ibiza.load();
        ibiza.play();
    });

    // document.getElementById("pause").addEventListener("click", function() {
    //    ibiza.pause();
    //});

    ibiza.setAttribute("controls", "controls");
    ibiza.setAttribute("autoplay", "autoplay");
    document.body.appendChild(ibiza);
};