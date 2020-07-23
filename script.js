//global function
function _(id) {
    return document.getElementById(id)
};


//global variable
var droppedIn = false;

//drag_start function
function drag_start(event) {
    _('app_status').innerHTML = "Dragging the " + event.target.getAttribute('id');
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData('text', event.target.getAttribute('id'));
}
//drag_enter function
function drag_enter(event) {
    _('app_status').innerHTML = "you are dragging over the " + event.target.getAttribute('id');
}
//function drag_leave
function drag_leave(event) {
    _('app_status').innerHTML = "you left the " + event.target.getAttribute('id');
}
//function drag_drop
function drag_drop(event) {
    event.preventDefault();//prevents undesirable event behaviour while dropping
    let elem_id = event.dataTransfer.getData('text');
    event.target.appendChild(_(elem_id));
    _('app_status').innerHTML = "Dropped " + elem_id + " into the " + event.target.getAttribute('id');
    _(elem_id).removeAttribute('draggable');
    _(_elem_id).style.cursor = "default";
    droppedIn = true;
}
//function drag_end
function drag_end(event) {
    if (droppedIn == true) {
        _('app_status').innerHTML = "you let the " + event.target.getAttribute('id') + " go";
    }
    droppedIn = false;
}
//function readdropsone
function readDropZone() {
    for (let i = 0; i < _('drop_zone').children.length; i++) {
        alert(_('drop_zone').children[i].id + " is in the drop zone")
    }
    //make ajax request to send the data to your server
}