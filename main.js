function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AG5w4tcYQ/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}