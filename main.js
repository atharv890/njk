gaana="";
function preload(){

}
function setup(){
    canvas=createCanvas(650,500);
    canvas.position(400,200);
    video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,650,500);
    filter(OPAQUE);
}
function play(){
    song.play();
}