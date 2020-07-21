//triggers the checkbox selection, it needs  cb parameter which attaches itself to the "this" keyword
function toggleCB(cb){
    if (cb.dataset.checked == 0) {
        cb.style.background = "#89d814";
        cb.dataset.checked = 1;
    } else {
        cb.style.background = "#eee";
        cb.dataset.checked = 0;
    }
   
}
// triggers the submit button
function submitValues() {
    alert('checkbox 1= ' + cb1.dataset.checked + ',' + ' checkbox 2= ' + cb2.dataset.checked)
}