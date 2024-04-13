window.onscroll = function() {
    headline()
};

var block = document.getElementById("uberhead");

function headline() {
    if (window.scrollY > 10) {
        block.classList.add("headline");
    } else {
        block.classList.remove("headline");
    }
}

