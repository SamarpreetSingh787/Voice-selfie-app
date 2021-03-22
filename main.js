var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
 console.log(event);
 var content = event.results[0][0].transcript;
 console.log(content);
 
 document.getElementById("textbox").innerHTML = content;
 if (content === "take my selfie") {
     console.log("Taking selfie ---");
     speak();
 }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in next five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        takeSnapshot();
        save();
    },5000
    );
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });

  camera = document.getElementById("cameradiv");

  function takeSnapshot() {
      Webcam.snap(function(uri){
          document.getElementById("displaydiv").innerHTML = '<img id="selfie" src="'+uri+'">';
      });
  }

  function save() {
      link = document.getElementById("link");
      image = document.getElementById("selfie").src;
      link.href = image;
      link.click();
  }