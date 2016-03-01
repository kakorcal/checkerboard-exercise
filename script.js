// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var overlay = document.createElement('div');

body.setAttribute('style', 'margin: 0; padding: 0;');

for(var i = 0; i < 45; i++){
  var tile = document.createElement('div');
  tile.setAttribute('style', 'width: 11.1%; padding-bottom: 11.1%; float: left;');
  if(i % 2 === 0){
    tile.style.backgroundColor = 'black';
  }else{
    tile.style.backgroundColor = 'red';
  }
  body.appendChild(tile);
}