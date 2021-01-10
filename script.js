localStorage.clear();
localStorage.setItem("username", "jumzeey");
localStorage.setItem("country", "Nigeria");
localStorage.setItem("color", "Orange");
localStorage.setItem("food", "Rice")



document.getElementById('demo').innerText = "My name is " + localStorage.username + ", "+ "i am from "+ localStorage.country;
document.getElementById('counter').innerText = localStorage.length + " items in storage";

//iterating through the localStorage items and convertring them to a list
var items = "<ul>";
for (let i = 0; i <localStorage.length; i++) {
    items += "<li>" + localStorage.key(i) + "</li>";
}
items += "</ul>";
document.getElementById('list').innerHTML = items;

//iterating through the localStorage items to display the values with localStorage.getItem
var values = "<ul>";
for (let i = 0; i <localStorage.length; i++) {
    values += "<li>" + localStorage.getItem(localStorage.key(i)) + "</li>";
}
values += "</ul>";
document.getElementById('values').innerHTML = values;

localStorage.removeItem("color");

var removed = localStorage.length + " items remaining in storage after color was removed";
document.getElementById('notice').innerText = removed;