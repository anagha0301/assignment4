(function(window) {
    var goodByes = new Object();
    var speakWord = "Good Bye";
    goodByes.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.goodByes = goodByes;
})(window);