class shape{
    constructor(color){
        if(color===undefined || color===null)
        {
            this.color = "green"
        }
        else{
            this.color = color
        }
    }
    drawShape(){

    }
    calculateArea(){

    }
}
module.exports = Shape
