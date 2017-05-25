window.onload = function() {
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var list = document.getElementById("list");
    var banner = document.getElementById("banner");
    var index = 1;
    var timer;
    var animated = false;

    function animate(offset) {
        var time = 300;
        var inteval = 10;
        var speed = offset / (time / inteval);
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;

        function go() {
            if ((speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            } else {

                animated = false;
                if (newLeft > -1000) {
                    list.style.left = -4000 + "px";
                };
                if (newLeft < -4000) {
                    list.style.left = -1000 + "px";
                };
            }
        }
        go();
    };

    prev.onclick = function() {
        if (!animated) {
            if (index == 1) {
                index = 3;
            } else {
                index -= 1;
            }

            shownButton();
            animate(1000);
        }

    };
    next.onclick = function() {



        if (!animated) {
            if (index == 3) {
                index = 1;
            } else {
                index += 1;
            }
            animate(-1000);
        }
    };

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 2000);
    }

    function stop() {
        clearInterval(timer);
    }

    play();
    banner.onmouseover = stop;
    banner.onmouseout = play;
}
