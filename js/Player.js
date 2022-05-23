class Player {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.positionX = 0;
    this.positionY = 0;
    
  } 

  
  addPlayer(){
    var playerIndice = "players/player "+ this.indice;

    if(this.indice == 1){
      this.positionX = width/2 - 100;
    }
    else{
      this.positionX = width/2 + 100;
    }
    //colocar esses valores no banco de dados
    
    
       }



  getCount(){
    var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
  //atualizar valores no banco de dados
  
  updateCount(quantidade){
    database.ref("/").update({
      playerCount: quantidade
    })
  }
  //atualizar os valores no banco de dados
  

  //pegar informações do banco de dados sobre os players


  //pegar a distância no banco de dados


}
