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
