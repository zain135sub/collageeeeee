var SpeachRecognition=window.webkitSpeechRecognition;
var recognition=new SpeachRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
Webcam.attach(camera);
Webcam.attach(camera2);
Webcam.attach(camera3);
}
function speak(){ var synth = window.speechSynthesis;
    speak_data = "Taking you Selfie in 5 seconds";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
       Webcam.attach(camera);
       setTimeout(function(){
           takesnapshot();
           save();
       },5000);
   }
   camera = document.getElementById("camera");
   camera2 = document.getElementById("camera2");
   camera2 = document.getElementById("camera3");
Webcam.set({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
});
function takesnapshot(){
    Webcam.snap(function(uri){
        if(image_id=="camera"){
            document.getElementById("result1").innerHTML="<img id='camera' src="+data_uri+"/>";
        }
        if(image_id=="camera2"){
            document.getElementById("result2").innerHTML="<img id='camera2' src="+data_uri+"/>";
        }
        if(image_id=="camera3"){
            document.getElementById("result3").innerHTML="<img id='camera3' src="+data_uri+"/>";
        }
});

var camera=document.getElementById("camera");
var camera2=document.getElementById("camera2");
var camera3=document.getElementById("camera3");