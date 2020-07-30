
 let config ={
    
     type : Phaser.CANVAS,
     
    width : 800,
    height:600,
    backgroundColor : 0xffcc00,
    
    scene : {
    preload: preload,
    create : create,
    update : update,
    }

};
let game = new Phaser.Game(config);


function preload(){
    // load image
    console.log(this);
     this.load.image('background',"../Spin win/Assets/back.jpg");
   
    this.load.image('wheel',"../Spin win/Assets/wheel.png");
    
    this.load.image('stand',"../Spin win/Assets/stand.png");
    this.load.image('pin',"../Spin win/Assets/pin.png");
    //adding button
    
    
    
     
    
}

var button;
var background;
function create(){
    //create that background image
    let W = game.config.width;
    let H = game.config.height;
    
    
   let background = this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(0.20);
    
    //lets create stand
    let stand =  this.add.sprite(W/2,H/2+250,'stand');
    stand.setScale(0.25);
    
    // Lets create pin
     let pin =  this.add.sprite(W/2,H/2-250,"pin");
    pin.setScale(0.25);
    pin.depth = 1;
    
    //let create wheel
   this.wheel =  this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.25);
  
   
    //event listener for mouse click
    this.input.on("pointerdown",spinwheel,this);
    // bbutton action on click
      

}
function update(){
    console.log("Inside update");
   // this.wheel.angle +=1;
}

function spinwheel(){
    console.log("You clicked the mouse");
    console.log("Start Spinning");
    
    let rounds = Phaser.Math.Between(2,4);
    let extra_degrees = Phaser.Math.Between(0,11)*30;
    let total_angle = rounds*360+extra_degrees;
    console.log(total_angle);
    
     tween = this.tweens.add(
    {
        targets: this.wheel,
        angle: total_angle,
        ease:"Cubic.easeOut",
        duration:6000,
        callbackScope:this,
    })
}


