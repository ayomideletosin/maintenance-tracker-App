/* Addin an active class to a clicked buttonn */
document.getElementsByClassName ("buttonContainer");
var btns = document.querySelectorAll (".btn").forEach(function (){
    for (var i=0; i < btns.length; i++) {
        btns[i].addEventListener ("click", function ()  {
            var current = document.getElementsByClassName ("active");
            current[0].className = current[0].className.replace ("active", "");
            this.className += " active";
});
}
    });


/* Toggling the class of the request details */
/* const toggleRequestDetails = () => {
    document.querySelector('.requestDetails').classList.toggle ('hiddenRequestDetails');
};
document.querySelector ('#sbmt').addEventListener ('click', toggleRequestDetails); */

document.querySelector ('.detailsBtn').addEventListener ('click', function () {
    document.querySelector ('.requestDetails').style.display = 'flex';
});