

(function() {
    var names = ["Anagha", "sreehari", "Omkar", "Joseph", "Jemy", "mwuthmani", "sus", "vaava", "jaggu", "john"];
    for (var i = 0; i < names.length; i++) {
        var first = names[i].charAt(0).toLowerCase();
        if (first === 'j') {
            goodByes.speak(names[i]);
        } else {
            hellos.speak(names[i]);
        }
    }
})();