var s;
var e;
var f;
var screenSize = 600;
var gridCount = 20;
var gridSize = screenSize/gridCount;
var alive = true;

function setup() {
  // put setup code here
  createCanvas(screenSize,screenSize);
  s = new Snake();
  e = new Snake();
  s.x = screenSize - 1;
  s.y = screenSize - 1;
  f = new Food();
  f.randomize();
}

function draw() {
  // put drawing code here
  if(!alive) {}
  else if(!s.update(e.tail)) {
      background(color("yellow"));
      alive = false;
  }

  else if(!e.update(s.tail)) {
      background(color("cyan"));
      alive = false;
  }

  if(alive) {
      background(51);
    if(s.xGrid==f.xGrid && s.yGrid==f.yGrid) {
      f.randomize();
      s.grow();
    }
    if(e.xGrid==f.xGrid && e.yGrid==f.yGrid) {
      f.randomize();
      e.grow();
    }
    s.show(color('cyan'));
    e.show(color('yellow'));
    f.show();
  }
}

function keyPressed() {
  var xOld = s.xDir;
  var yOld = s.yDir;
  switch(keyCode) {
    case LEFT_ARROW:
      s.xDir = -1;
      s.yDir = 0;
      break;
    case RIGHT_ARROW:
      s.xDir = 1;
      s.yDir = 0;
      break;
    case DOWN_ARROW:
      s.xDir = 0;
      s.yDir = 1;
      break;
    case UP_ARROW:
      s.xDir = 0;
      s.yDir = -1;
      break;
  }
  if(xOld == -s.xDir && yOld == -s.yDir)
  {
    s.xDir = xOld;
    s.yDir = yOld;
  }

  xOld = e.xDir;
  yOld = e.yDir;
  switch(keyCode) {
    case 65:
      e.xDir = -1;
      e.yDir = 0;
      break;
    case 68:
      e.xDir = 1;
      e.yDir = 0;
      break;
    case 83:
      e.xDir = 0;
      e.yDir = 1;
      break;
    case 87:
      e.xDir = 0;
      e.yDir = -1;
      break;
  }
  if(xOld == -e.xDir && yOld == -e.yDir)
  {
    e.xDir = xOld;
    e.yDir = yOld;
  }
}
