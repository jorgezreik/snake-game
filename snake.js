function Snake() {
  this.x = 0;
  this.y = 0;
  this.xGrid = 0;
  this.yGrid = 0;
  this.xDir = 0;
  this.yDir = 0;
  this.speed = 4;
  this.tail = [];
  this.haveGrown = false;

  this.update = function(list) {
    var xOld = this.xGrid;
    var yOld = this.yGrid;
    this.x += this.xDir*this.speed;
    this.y += this.yDir*this.speed;
    this.xGrid = floor(this.x/screenSize*gridCount)*gridSize;
    this.yGrid = floor(this.y/screenSize*gridCount)*gridSize;

    if(xOld != this.xGrid || yOld != this.yGrid && this.tail.length>0) {
      if(!this.haveGrown) {
        for(i = 0; i < this.tail.length-1; i++) {
          this.tail[i] = this.tail[i+1];
        }
        this.tail[this.tail.length-1] = new Tail(xOld,yOld);
      }
      else {
        this.haveGrown = false;
      }
    }

    for(i = 0; i < this.tail.length-1; i++) {
      if(this.xGrid == this.tail[i].x
      && this.yGrid == this.tail[i].y)
      return false;
    }

    for(i = 0; i < list.length-1; i++) {
      if(this.xGrid == list[i].x
      && this.yGrid == list[i].y)
      return false;
    }

    if(this.x < 0 || this.x > screenSize
    || this.y < 0 || this.y > screenSize) {
      return false;
    }
    return true;
  }

  this.show = function(col) {
    fill(col);
    stroke(51);
    rect(this.xGrid,this.yGrid,gridSize,gridSize);
    for(i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x,this.tail[i].y,gridSize,gridSize);
    }
  }

  this.grow = function() {
    this.tail.push(new Tail(this.xGrid,this.yGrid));
    this.haveGrown = true;
  }
}

function Tail(x,y) {
  this.x = x;
  this.y = y;
}
