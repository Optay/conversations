import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games');
  this.route('player', { path: '/player/:player_id' } );
  this.route('game', { path: '/game/:game_id' } );
  this.route('players');
});

export default Router;
