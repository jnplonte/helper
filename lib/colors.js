"use strict";


const colorsFunction = {
    'incrementColor': function(color='#2A3D92', step=20){
        const nstep = parseInt(step);
        let colorToInt = parseInt(color.substr(1), 16); 
    
        if(!isNaN(colorToInt) && !isNaN(nstep)){
            let ncolor = colorToInt.toString(16);                           
    
            colorToInt += nstep;                                            
            ncolor = '#' + (new Array(7-ncolor.length).join(0)) + ncolor;   
            if (/^#[0-9a-f]{6}$/i.test(ncolor)) {                             
                return ncolor.toUpperCase();
            }
        }
    
        return color.toUpperCase();
    },
    'randomColor': function() {
        const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        return (color.length === 7 ) ? color : `${color}9`;
    }
}

module.exports = colorsFunction
