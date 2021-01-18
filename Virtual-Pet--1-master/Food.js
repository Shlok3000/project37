var milk;
var FoodStock, lastFed, database;

function preload() {
    milk = loadImage("images/Milk.png");
}

function setup(){

    FoodStock=database.ref('lastFed');
    FoodStock.on("value",getFoodStock,updateFoodStock,deductFood);
}

function display() {
    var x=80,y=100;

    

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.FoodStock!=0){
        for(var i=0;i<this.FoodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
    bedroom(){
        background(bedroom,550,500);
    }
    
    garden(){
        background(garden,550,500);
    }

    washroom(){
        background(washroom,550,500);
    }
}

