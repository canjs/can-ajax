import QUnit from 'steal-qunit';
import plugin from './can-ajax';

QUnit.module('can-ajax');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-ajax plugin');
});
