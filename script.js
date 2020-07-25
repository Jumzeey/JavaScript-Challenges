// function drag_drop
function drag_drop(event) {
    event.preventDeafault();
    alert(event.dataTransfer.files[0])
}