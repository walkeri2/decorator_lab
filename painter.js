const Painter = function(stock){
  this.stock = [];
};

Painter.prototype.addStock = function (can) {
  this.stock.push(can);

};

Painter.prototype.countStock = function () {
  return this.stock.length;
};

Painter.prototype.countLitres = function () {
  return this.stock.volume;
};





module.exports = Painter;
