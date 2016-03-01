// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var overlay = document.createElement('div');

body.setAttribute('style', 'margin: 0; padding: 0;');
overlay.setAttribute('style', 'background: linear-gradient(rgba(0,0,0,.5), rgba(255,255,255,.5)); position: absolute; top: 0; left: 0; width: 100%; height: 100%;')

for(var i = 0; i < 45; i++){
  var tile = document.createElement('div');
  tile.setAttribute('style', 'width: 11.1%; padding-bottom: 11.1%; float: left;');
  if(i % 2 === 0){
    tile.style.backgroundColor = '#3dcafc';
  }else{
    tile.style.backgroundColor = '#c92dfa';
  }
  body.appendChild(tile);
}
body.appendChild(overlay);