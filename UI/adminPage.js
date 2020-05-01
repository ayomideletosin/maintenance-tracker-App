document.querySelectorAll ('.detailsBtn').forEach ( function (btn) {btn.addEventListener ('click', function () {
    document.querySelector ('.requestDetails').style.display = 'flex';
});
});
document.querySelector ('.closeDetails').addEventListener ('click', function () {
    document.querySelector ('.requestDetails').style.display = 'none';
}); 
document.querySelectorAll ('.requestDetailsBtn').forEach ( function (action) {action.addEventListener ('click', function () {
    document.querySelector ('.requestDetails').style.display = 'none';
});
});

var btns = document.getElementsByClassName ("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener ("click", function() {
        var current = document.getElementsByClassName ("active");
        current[0].className = current[0].className.replace ("active", "");
        this.className += " active";
        });
};
