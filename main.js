status="";
function setup(){
    canvas= createCanvas(480,330);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,480,330);
}
function start(){
    object_detector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= "Status: Detecting Objects"
}
function modelLoaed(){
    console.log('Model Loaed!');
    status=true;
}