//function to store document.getElementById
function _(id) {
    return document.getElementById(id);
};
//actions done on data submission
function submitForm(){
    _("mybtn").disabled = true;
    _("status").innerHTML = "Please wait...";
    let formdata = new formData();
    formdata.append('n', _('n').value);
    formdata.append('e', _('e').value);
    formdata.append('m', _('m').value);
    //new http request object
    let ajax = new XMLHttpRequest();
    ajax.open('post', 'parser.php');
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            if (ajax.responseText == "success") {
                _('my_form').innerHTML = '<h2>Thanks ' + _('n').value + ', your message has been sent</h2>';
            } else {
                _('status').innerHTML = ajax.responseText;
                _('mybtn').disabled = false;
            }
        }
    }
    ajax.send('formData');
}
