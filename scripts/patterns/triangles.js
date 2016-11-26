
var trianglifyJsLib = 'https://cdnjs.cloudflare.com/ajax/libs/trianglify/0.4.0/trianglify.min.js';
var jsLoaded = false;
$.getScript(trianglifyJsLib, function(){
    jsLoaded = true;
})

var trianglePattern = function (colors, canvas, config) {
    if(!jsLoaded)
        alert('Trianglify Js Library not loaded yet. Try again soon.')
    
    var pattern = Trianglify({
            cell_size: 1000,
            variance: .75,
            x_colors: new Array(colors[2], colors[1], colors[2], colors[0], colors[2]),
            y_colors: new Array(colors[0], colors[1],  colors[2], colors[0], colors[1]),
            color_space: 'lab',
            color_function: false,
            stroke_width: 1.51,
            seed: null,
            width:canvas[0].width,
            height:canvas[0].height
        });

        pattern.canvas(canvas[0]);
};