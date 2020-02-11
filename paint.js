const Paint = function(litres){
  this.litres = litres;
};

  Paint.prototype.empty = function() {
    return this.litres = 0;
  };

  Paint.prototype.check = function() {
    if (this.litres > 0){
       return true
    } else {
      return false};
  };

  Paint.prototype.volume = function () {
    return this.litres;
  };

module.exports = Paint;
