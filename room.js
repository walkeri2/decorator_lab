const Room = function(sqmeters, finished) {
  this.sqmeters = sqmeters;
  this.finished = finished;
};

Room.prototype.painted = function(){
  return this.finished = true;
}



module.exports = Room;
