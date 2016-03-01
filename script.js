// Your JS goes here
var tilearr = [];
var body = document.getElementsByTagName('body')[0];
body.setAttribute('style', 'margin: 0; padding: 0;');

for(var i = 0; i < 45; i++){
  var tile = document.createElement('div');
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  tile.setAttribute('style', 'width: 11.1%; padding-bottom: 11.1%; float: left;');
  tile.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
  tilearr.push(tile);
  body.appendChild(tile);
}

setInterval(function(){
  tilearr.forEach(function(curr){
    console.log(curr);
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    curr.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
  });
}, 2000);