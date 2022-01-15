function check() {
    var sel = null;
    var list = document.querySelectorAll("input[type=radio]")

    for (var i = 0; i < list.length; i++) {
        if (list[i].checked == true) {
            sel = list[i]
            break
        }
    }
    document.body.style.backgroundImage = `url("${sel.dataset.image}")`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundRepeat = `no-repeat`;

}

check()