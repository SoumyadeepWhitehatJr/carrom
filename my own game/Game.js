class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      
      }
      striker= new Striker(200,200)
    
      blackPic1=new BlackPieces(20,20)
blackPic2=new BlackPieces(20,20)
blackPic3=new BlackPieces(20,20)
blackPic4=new BlackPieces(20,20)
blackPic5=new BlackPieces(20,20)
blackPic6=new BlackPieces(20,20)
blackPic7=new BlackPieces(20,20)
blackPic8=new BlackPieces(20,20)
blackPic9=new BlackPieces(20,20)

whitePic1=new WhitePieces(20,20)
whitePic2=new WhitePieces(20,20)
whitePic3=new WhitePieces(20,20)
whitePic4=new WhitePieces(20,20)
whitePic5=new WhitePieces(20,20)
whitePic6=new WhitePieces(20,20)
whitePic7=new WhitePieces(20,20)
whitePic8=new WhitePieces(20,20)
whitePic9=new WhitePieces(20,20)

redPic1= new RedPieces(20,20)
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
       // var display_position = 130;
       
       var index=0;
       var x=0;
       var y;
  
  
       for(var plr in allPlayers){
         index=index+1;
         x = x+200;
         y=displayHeight-allPlayers[plr].distance;
  
         cars[index-1].x=x;
         cars[index-1].y=y;
  
        
        
        if(index===player.index){
  
          cars[index-1].shapeColor="red";
  
  camera.position.x=displayWidth/2;
    camera.position.y=cars[index-1].y
  
        }
  }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      drawSprites();
    }
  }
  