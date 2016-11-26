var trapezoidPattern = function (colors, canvas, config) {

    var ctx = canvas[0].getContext("2d");
    var numberOfCircles = 250;

    colors.forEach(function(color){
        createSetOfTrapezoids(color, numberOfCircles)
        console.log('trapezoidCanvas', color, numberOfCircles)
        numberOfCircles -= 50;
    })

     function createSetOfTrapezoids(color, number){
            var colorRGB = transitionColorUnits.hexToRgb(color);
            for(var i = 0; i < number; i++){
                createRandomTrapezoid(transitionColorUnits.rgbString(colorRGB.r, colorRGB.g, colorRGB.b, Math.random()));
            }
        }

    function createRandomTrapezoid(color){
                        var randomX = randomize.getRandomInt(0, canvas[0].width);
                        var randomY = randomize.getRandomInt(0, canvas[0].height);
                        var randomHeight = randomize.getRandomInt(150, 650);
                        var randomWidth = randomize.getRandomInt(50, 250);
                        var slant = .8;
                        
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.moveTo(randomX, randomY);
                        ctx.lineTo(randomX + (randomHeight * slant), randomY - (randomHeight));
                        ctx.lineTo(randomX + (randomHeight * slant) + randomWidth, randomY - (randomHeight));
                        ctx.lineTo(randomX + randomWidth, randomY);
                        ctx.lineTo(randomX, randomY);
                        ctx.closePath();
                        ctx.fill();
            }

};