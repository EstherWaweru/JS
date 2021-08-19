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
//challenge-3 rock paper scissor
function rpsGame(yourChoice){
    console.log(yourChoice.src);
    var humanchoice,botchoice;
    humanchoice = yourChoice.id;
    botchoice =numToChoice(randToRpsInt());
    console.log(botchoice);
    results = decideWinner(humanchoice,botchoice);//return an arr
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botchoice,message);
     
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanchoice,botchoice){
    var rpsData = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}}
    var score = rpsData[humanchoice][botchoice]
    var compScore = rpsData[botchoice][humanchoice]
    return [score,compScore]

}
function finalMessage([score,compScore]){
    switch(score){
        case 0:
            result = {'message':'You lost','color':'red'};
            break;
        case 0.5:
            result = {'message':'You tied!','color':'yellow'};
            break;
        default:
            result = {'message':'You won','color':'green'};

    }
    return result;

}

function rpsFrontEnd(yourChoice,botchoice,message){
    var images = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src}
    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var compDiv = document.createElement('div');
    var messagediv = document.createElement('div');
    humandiv.innerHTML = "<img src = '" + images[yourChoice] + "' height=150,width=150,style='box-shadow: 0px 10px 50px rgba(37,50,233,0.7)'>";
    console.log(images[yourChoice]);
    document.getElementById('flex-box-rps').append(humandiv);
    messagediv.innerHTML = "<h1 style='color:"+message['color']+";font-size:80px;padding:30px'>" +message['message']+"</h1>" ;
    document.getElementById('flex-box-rps').append(messagediv);
    compDiv.innerHTML = "<img src = '" + images[botchoice] + "' height=150,width=150,style='box-shadow: 0px 10px 50px rgba(243,38,24,0.7)'>";
    document.getElementById('flex-box-rps').append(compDiv);
    

}


