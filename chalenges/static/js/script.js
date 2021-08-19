//challenge1:Your age in days
function ageInDays(){
    let birthYear = prompt("What year were you born?")
    var ageInDayss = (2021 -birthYear)*365
     var h1 = document.createElement('h1');
     var textAnswer = document.createTextNode('You are '+ageInDayss+' day')
     h1.setAttribute('id','ageInDays');
     h1.appendChild(textAnswer);
     document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.setAttribute('src','https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small')
    //image.src = ""
    div.appendChild(image);
}

