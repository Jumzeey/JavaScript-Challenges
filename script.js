function check(input){
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "")
}