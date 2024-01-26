let spanClose = document.getElementsByClassName("close")[0];
function onBtnClick(btnId) {
    // alert(btnId);
    document.getElementById(btnId + '-modal')
        .style.display = "block";
}
function onCloseClick(event) {
    // console.log(event.target.parentNode.parentNode.id)
    let _modal = document.getElementById(event.target.parentNode.parentNode.id);
    _modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        document.getElementById(event.target.id).style.display = "none";
    }
}
// Used on "FECHAR" button
function onFecharClick(event) {
    let _modal = document.getElementById(event.target.parentNode.parentNode.parentNode.id)
    // console.log(event.target.parentNode.parentNode.parentNode.id)
    _modal.style.display = "none";

}
