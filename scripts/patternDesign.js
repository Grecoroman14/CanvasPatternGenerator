var canvasPatterns = function (name) {

    //Private Property
    var _name = "";
    _name = name;
    alert('constructor ' + name)

    //Public Property
    this.ingredient = "Bacon Strips Loves " + _name;

    //Public Method
    this.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + this.ingredient );
    };

    //Private Method
    function addItem( item ) {
        if ( item !== undefined ) {
            console.log( "Adding " + $.trim(item) );
        }
    }

};