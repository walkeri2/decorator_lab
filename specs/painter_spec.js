const assert = require('assert');
const Paint = require('../paint.js');
const Painter = require('../painter.js');
const Room = require('../room.js');

describe('Paint', function(){
  beforeEach(function(){
    paint = new Paint(5);
  });

  it('should be able to empty ones self', function(){
    const actual = paint.empty();
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check if empty', function(){
    const actual = paint.check();
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  describe('room', function(){
    beforeEach(function(){
      room = new Room('4', false)
    });

    it('should be able to be painted', function(){
      const actual = room.painted();
      const expected = true;
      assert.strictEqual(actual, expected);
    });
  });

  describe('painter', function(){
    beforeEach(function(){
      painter = new Painter([]);
    });

    it('Should be able to add stock', function(){
      painter.addStock(paint);
      const actual = painter.countStock();
      const expected = 1;
      assert.strictEqual(actual, expected);
    });

    it('Should be able to calculate litres in stock', function(){
      painter.addStock(paint);
      const actual = painter.countLitres();
      const expected = 5;
      assert.strictEqual(actual, expected);
    });
  });
});
