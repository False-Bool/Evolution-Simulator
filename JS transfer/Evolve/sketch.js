var length_x = 100;
var length_y = 100;
var my_map = new Array(length_y);
var creature = new Array(1);
var tile_size = 10;
var time = 0; // avrg fps is 14 for some reason cant go any higher :(so 1 sec/ 14 fps


function setup() {

  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < length_y; i++) {
    my_map[i] = new Array(length_x);
  }
  init();
  seed();
  display();

  for (i = 0; i < 25; i++) {
    generate();
  }
  for (i = 0; i < 5; i++) {
    clean_fill();
    clean_space();
  }

    //fill in creature list with creatures
  for (var i = 0; i < 1; i++) {
  //  creature[i] = new Creature(5 + i * tile_size, 5 + i * tile_size)
  creature[i] = new Creature(5 + 0 * tile_size, 5 + 0* tile_size)
  creature[i].setup();

  }


}


function draw() {
  background(255);
  display();
  timer();
  for (var i = 0; i < creature.length; i++) {
    creature[i].run();

  }

  //print(time);
}




function init() {
  //var i=0;
  for (var y = 0; y < length_y; y++) {
    for (var x = 0; x < length_x; x++) {
      //  i+=1;
      my_map[x][y] = 1;

    }
  }
}
/**
* initial random generation
* randomizes map every time
* fill_val= % of map
* need to make a seed saver, to txt and a retrevier, associate them with a seed num
*/

function seed() {
  var fill_val= 55;
  var r = random(100);
  for (var y = 0; y < length_y; y++) {
    for (var x = 0; x < length_x; x++) {
      r = random(100);
      if (r > fill_val) {
        my_map[x][y] = 0;
      }
    }
  }
}
/**
* map display
*/
function display() {
  for (var y = 0; y < length_y * tile_size; y += tile_size) {
    for (var x = 0; x < length_x * tile_size; x += tile_size) {

      if (my_map[x / tile_size][y / tile_size] == 1) {
        fill(255); //empty
        //    stroke(255);
      } else {
        fill(0); // filled
        //    stroke(0);
      }
      rect(x, y, tile_size, tile_size);
    }
  }
}

/**
 * @param {int} x x position of tile on the map grid
 * @param {int} y y position of tile on the map grid
 * checks for filled body vs an empty body on the map grid
 */
function is_empty(x, y) {
  if (my_map[x][y] == 1) {
    return true;
  }
  return false;
}

/**
 * @param {int} x x location of a tile on the map grid
 * @param {int} y y location of a tile on the map grid
 * counts surrounding filled in, tile neighbours
 */
function count_neighbours(x, y) {
  n_count = 0;
  // checking for empty sidelines... dont wanna edit those
  if (y == 0 || y == length_y - 1 || x == 0 || x == length_x - 1) {
    return false;
  }
  if (my_map[y - 1][x] == 0) {
    n_count += 1
  }
  if (my_map[y + 1][x] == 0) {
    n_count += 1;
  }
  if (my_map[y][x - 1] == 0) {
    n_count += 1;
  }
  if (my_map[y][x + 1] == 0) {
    n_count += 1;
  }
  return n_count;
}
/**
* using generation conditions, checks if tile will live or die
*/
function generate() {
  for (var y = 0; y < length_y; y++) {
    for (var x = 0; x < length_x; x++) {
      if (count_neighbours(x, y) < 1) {
        if (is_empty(x, y)) {
          my_map[y][x] = 0; // fill it in
        }
      } else {
        my_map[y][x] = 1; // empty it up other wise
      }
    }
  }
}

/**
*cleans up space by filling spaces that need to be filled, causes map to connect with tunnels when used along side clean space()
*/
function clean_fill() {
  for (var y = 0; y < length_y; y++) {
    for (var x = 0; x < length_x; x++) {
      if (count_neighbours(x, y) >= 3) {
        if (is_empty(y, x)) {
          my_map[y][x] = 0; // fill it in
        }
      }

    }
  }
}/**
*cleans up space by emptying spaces that need to be filled, causes map to connect with tunnels when used along side clean fill()
*/

function clean_space() {
  for (var y = 0; y < length_y; y++) {
    for (var x = 0; x < length_x; x++) {
      if (count_neighbours(x, y) < 2) {
        if (is_empty(y, x) == false) {
          my_map[y][x] = 1; // empty it
        }
      }

    }
  }
}

var adding = false;
/**
*timer- run time in seconds, when tabbed into the program, frame counter based
*/
function timer() {

  if (frameCount % 14 == 0) {
    adding = true;
    time += 1;
  } else {
    adding = false;
  }


}
