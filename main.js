noseX=0; 
noseY=0; 
function preload() 
{ 
dog_nose=loadImage('https://i.postimg.cc/YqD3M7V3/dog-nose.jpg');
} 

function setup() { 
canvas = createCanvas(300, 300); 
canvas.position(200,170); 
video = createCapture(VIDEO); 
video.size(300, 300); 
video.hide(); 
poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses); 
} 

function modelLoaded() 
{ 
console.log('PoseNet Is Initialized'); 
} 

function gotPoses(results) { 
if(results.length > 0) 
{ 
console.log(results); 
noseX = results[0].pose.nose.x; 
noseY = results[0].pose.nose.y; 
} 
} 

function draw() { 
image(video, 0, 0, 300, 300); 
image(dog_nose,noseX,noseY,60,60); 
} 

function take_snapshot()
{ 
save('myFilterImage.png'); 
}