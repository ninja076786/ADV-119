function preload(){

}




function setup(){
canvas=createCanvas(450,450)
canvas.center()
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ixeNvi9D_/model.json",modelLoaded);

}

function modelLoaded(){
console.log("MODEL LODED HEY!!!!!!!!!!!!!!!!!!!!!!!!!!! LISTEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ")

}


function draw(){
image(video,0,0,450,450)
classifier.classify(video,gotResults)
}

function gotResults(error,results){
if(error){
    console.error(error);
}

else{
console.log(results);
document.getElementById("object_name").innerHTML=results[0].label;
document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}