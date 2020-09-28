function editContent(div){
    div.style.border = '1px solid #000';
    div.style.padding = '20px';
    div.contentEditable = true;
};
function uneditContent(div){
    div.style.border = 'none';
    div.style.padding = '0px';
    div.contentEditable = false;
}
/* added features
1. edittabel only for particular users
2. after editting, submit to database
3. have a edit button instead of cliucking directly
*/