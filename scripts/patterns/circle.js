var circlePattern = function (colors, canvas, config) {

    var ctx = canvas[0].getContext("2d");
    var numberOfCircles = 250;

    colors.forEach(function(color){
        circle(color, numberOfCircles)
        console.log('circleCanvas', color, numberOfCircles)
        numberOfCircles -= 50;
    })

     function circle(color, number){
            var colorRGB = transitionColorUnits.hexToRgb(color);
            console.log(transitionColorUnits.rgbString(colorRGB.r, colorRGB.g, colorRGB.b, Math.random()))
            for(var i = 0; i < number; i++){
                var centerX = randomize.getRandomInt(0, canvas[0].width);
                var centerY = randomize.getRandomInt(0, canvas[0].height);
                var radius = randomize.getRandomInt(50, 550);

                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = transitionColorUnits.rgbString(colorRGB.r, colorRGB.g, colorRGB.b, Math.random());
                ctx.fill();
            }
        }

};