export default function( server ) {

  // Create players
  server.createList('player', 10);
  
  /*
  // Create games, assign players
  for ( var i=0; i<20; i++ ) {
    var whitePlayerId = 
    
    
    var game = server.create('game');
    game.white = whitePlayerId;
    game.black = blackPlayerId;
  }
*/  
  server.createList('game', 20, {white: 1, black:2} );
  
  // server.createList('contact', 10);
}
