(function( randomize, $, undefined ) {
    
    randomize.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}( window.randomize = window.randomize || {}, jQuery ));