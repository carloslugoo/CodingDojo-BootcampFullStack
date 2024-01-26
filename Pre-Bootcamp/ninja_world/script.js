var world = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,2,0,0,2,1,2,3,1],
    [1,2,1,2,1,1,0,0,3,0,1],
    [1,0,2,0,3,0,3,1,1,3,1],
    [1,0,1,1,1,0,1,3,1,0,1],
    [1,2,1,2,3,0,0,3,0,0,1],
    [1,0,1,2,1,1,0,1,1,2,1],
    [1,2,0,3,0,0,3,2,0,2,1],
    [1,1,1,1,1,1,1,1,1,1,1]
];
var worldDict={
    0:'blank',
    1:'wall',
    2:'sushi',
    3:'onigiri'
}
var score=0;

function drawWorld(){
    output = "";
    for(var row = 0; row<world.length; row++){
        output += "<div class='row'>"
            for(var x=0; x<world[row].length;x++){
                output+="<div class = '"+worldDict[
                world[row][x]] +"'></div>"
            }
            output+="</div>"
    }
    document.getElementById("world").innerHTML=output;
    output;
}
drawWorld();

var ninjaman ={
    x:1,
    y:1
}
function drawNinjaman() {
    document.getElementById("ninjaman").style.top=ninjaman.y*60+'px'
    document.getElementById("ninjaman").style.left=ninjaman.x*60+'px'
}
drawNinjaman();

function updateScore(points){
    score+=points;
    document.getElementById("score").innerHTML="Puntos: "+score;
}
drawWorld();
drawNinjaman();

document.onkeydown=function(e){
    if (e.keyCode == 37) {
        if (world[ninjaman.y][ninjaman.x-1]!=1) {
            ninjaman.x--;
        }      
    }
    if (e.keyCode == 39) {
        if (world[ninjaman.y][ninjaman.x+1]!=1) {
            ninjaman.x++;
        }   
    }
    if (e.keyCode == 38) {
        if (world[ninjaman.y-1][ninjaman.x]!=1) {
            ninjaman.y--;
        }   
    }
    if (e.keyCode == 40) {
        if (world[ninjaman.y+1][ninjaman.x]!=1) {
            ninjaman.y++;
        }   
    }
    if (world[ninjaman.y][ninjaman.x] !== 1) {
            if (world[ninjaman.y][ninjaman.x] === 2) {
                updateScore(10);
            } else if (world[ninjaman.y][ninjaman.x] === 3) {
                updateScore(5); 
            }
            world[ninjaman.y][ninjaman.x] = 0;
            drawNinjaman();
            drawWorld();
    }
}