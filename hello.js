(function(window) {
    var hellos = new Object();
    var speakWord = "Hello";
    hellos.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.hellos = hellos;
})(window);