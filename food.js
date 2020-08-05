function Food() {
  this.x = 0;
  this.y = 0;
  this.xGrid = 0;
  this.yGrid = 0;

  this.randomize = function() {
    this.x = random(screenSize);
    this.y = random(screenSize);
    this.xGrid = floor(this.x/screenSize*gridCount)*gridSize;
    this.yGrid = floor(this.y/screenSize*gridCount)*gridSize;
  }

  this.show = function() {
    fill(color('magenta'));
    noStroke();
    rect(this.xGrid,this.yGrid,gridSize,gridSize);
  }
}
