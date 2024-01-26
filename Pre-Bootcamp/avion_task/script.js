var player = {
    left:400,
    top:620
};
var enemies = [
    {left: 250, top: 200},
    {left: 350, top: 250},
    {left: 450, top: 250},
    {left: 550, top: 200},
    {left: 400, top: 100}
];

var missiles=[];
function drawPlayer(){
    var content = "<div class='player' style='left:" + player.left + "px; top:" + player.top + "px'></div>";
        document.getElementById("players").innerHTML = content;
    }
function drawEnemies(){
    content = "";
    for (var idx = 0; idx < enemies.length; idx++) {
            content += "<div class='enemy' style='left:" + enemies[idx].left + "px; top:" + enemies[idx].top + "px'></div>";
        }
        document.getElementById("enemies").innerHTML = content;
}

function drawMissiles(){
    content="";
    for (let idx = 0; idx < missiles.length; idx++) {
        content+="<div class = 'missile' style='left:"+missiles[idx].left+"px; top:"+missiles[idx].top+"px;'></div>";
    }
    document.getElementById("missiles").innerHTML = content;
}
function moveEnemies(){
    for (var idx = 0; idx < enemies.length; idx++) {
        if (enemies[idx].top < 550) {
        enemies[idx].top = enemies[idx].top + 1;
    }
    }
}
function moveMissiles(){
    for (var idx = 0; idx < missiles.length; idx++) {
        missiles[idx].top = missiles[idx].top-4;
    }
}
document.onkeydown = function(e){
    if (e.keyCode == 37 && player.left > 0) { // left
        player.left = player.left - 10;
    }
    if (e.keyCode == 39 && player.left < 800)  { // right
        player.left = player.left + 10;
    }
    if (e.keyCode == 38 && player.top > 400){ //top
        player.top = player.top - 10;
    }
    if (e.keyCode == 40 && player.top < 625){ //bottom
        player.top = player.top + 10;
    }
    if (e.keyCode == 32){ //fire
        missiles.push({left:(player.left+34), top: (player.top-8)})
    }
    drawPlayer();
}

function gameLoop(){

    drawPlayer();

    moveEnemies();
    drawEnemies();
    
    moveMissiles();
    drawMissiles();

    setTimeout(gameLoop,10)
}
gameLoop();