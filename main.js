
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text_box").innerHTML = ""; 
    recognition.start();
}

recognition.onresult = function run (event) 
{
 console.log(event); 
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("text_box").innerHTML = Content;

if (Content == "Cheese.") {
   console.log("Tomando la selfie")
   speak() 
}


}

function speak() {
   var synth= window.speechSynthesis;
   speech_data= "Tomando fotografia en 5 segundos"
   var utterThis= new SpeechSynthesisUtterance(speech_data);
   synth.speak(utterThis);
   Webcam.attach(camera);
   setTimeout(function() {
    alert("Fotografia tomada")
    take_snapshot()
    save()
   },5000)
}

Webcam.set({
    width: 360,
    height: 250,
    image_format:"jpeg",
    jpeg_quality: 90,
});

camera= document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_img" src= "'+data_uri+'">';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}