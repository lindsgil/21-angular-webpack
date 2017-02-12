require('../app/index.js');
require('angular-mocks');
let angular = require('angular');
let cowsay = require('cowsay-browser');

let options = ['beavis.zen', 'bud-frogs', 'bunny', 'cheese', 'chick', 'chicken-and-egg', 'cower', 'daemon', 'default', 'doge', 'dragon-and-cow', 'dragon', 'elephant-in-snake', 'elephant', 'eyes', 'flaming-sheep', 'ghostbusters', 'hellokitty', 'kiss', 'kitty', 'koala', 'kosh', 'luke-koala', 'mech-and-cow', 'meow', 'milk', 'moofasa', 'moose', 'mutilated', 'ren', 'rooster', 'satanic', 'sheep', 'skeleton', 'small', 'squirrel', 'stegosaurus', 'stimpy', 'supermilker', 'surgery', 'turkey', 'turtle', 'tux', 'vader-koala', 'vader', 'www'];

describe('CowSayController', function() {
  let cowSay = null;

  beforeEach(() => {
    angular.mock.module('cowApp');
    angular.mock.inject($controller => {
      cowSay = new $controller('CowSayController');
    });
  });

  describe('initial properties', function() {
    it('should have a title COW SAY', function() {
      console.log(cowSay);
      expect(cowSay.title).toBe('COW SAY');
    });
    it('should have an empty array called cowOptions', function() {
      expect(cowSay.cowOptions).toEqual(options);
    });
    it('cowSaved should be an empty string', function() {
      expect(cowSay.saved).toBe('');
    });
    it('savedCows should be an empty array', function() {
      expect(cowSay.savedCows).toEqual([]);
    });
    it('the property custom should be set to default', function() {
      expect(cowSay.custom).toBe('default');
    });
  });

  describe('update()', function() {
    it('should return a cowsay.say call', function() {
      //not sure
    });
  });

  describe('save()', function() {

  });

  describe('undo()', function() {

  });
});