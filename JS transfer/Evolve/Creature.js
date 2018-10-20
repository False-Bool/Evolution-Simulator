function Creature(x, y, speed, sight, stamina, strength, size, intelligence, hunger) {
  this.xpos = x;
  this.ypos = y;
  this.sight = sight;
  this.stamina = stamina;
  this.size = size;
  this.strength = strength;
  this.speed = speed;
  this.int = intelligence;
  this.hunger = hunger; // still dont know how i will put this in
  this.null_blocks = 0;
  this.local_map = new Array(length_y);


  this.display = function() {
    var creature_radius = tile_size * 0.8;
    fill(255, 0, 0);
    ellipse(this.xpos, this.ypos, creature_radius, creature_radius);

  }
  this.move = function(xtile, ytile) {
    this.dest_x = xtile;
    this.dest_y = ytile;
    // input jsut used for destination for now
    this.my_xtile = (this.xpos - 5) / tile_size; //current location on the map...
    this.my_ytile = (this.ypos - 5) / tile_size;

    this.local_map[this.my_xtile][this.my_ytile] = 0;


// type creature[0].local_map to view what creature sees... he sees a flipped view btw needs fix
  // distance from top left corner
    for (j = 0; j <= this.my_ytile; j++) {
      for (i = 0; i <= this.my_xtile; i++) {
        if (my_map[this.my_xtile - i][this.my_ytile - j] == 0) {
          this.local_map[this.my_xtile - i][this.my_ytile - j] = '?';
        } else {
          this.local_map[this.my_xtile - i][this.my_ytile - j] = i + j;
        }
        //  this.local_map[this.my_xtile - i][this.my_ytile - j] = i + j;
        //console.log(this.my_ytile - j);
      }
  // distance from top right corner
      for (i = 0; i < (length_x - this.my_xtile); i++) {
        if (my_map[this.my_xtile + i][this.my_ytile - j] == 0) {
          this.local_map[this.my_xtile + i][this.my_ytile - j] = '?';
        } else {
          this.local_map[this.my_xtile + i][this.my_ytile - j] = i + j;
        }
      }
    }
    // distance from bottom left corner
    for (j = 0; j <= (length_y - this.my_ytile); j++) {
      for (i = 0; i <= this.my_xtile; i++) {
        if (my_map[this.my_xtile - i][this.my_ytile + j] == 0) {
          this.local_map[this.my_xtile - i][this.my_ytile + j] = '?';
        } else {
          this.local_map[this.my_xtile - i][this.my_ytile + j] = i + j;
        }

      }
  // distance from bottom right corner
      for (i = 0; i < (length_x - this.my_xtile); i++) {
        if (my_map[this.my_xtile + i][this.my_ytile + j] == 0) {
          this.local_map[this.my_xtile + i][this.my_ytile + j] = '?';
        }else{
            this.local_map[this.my_xtile + i][this.my_ytile + j] = i + j;
        }

      }
    }


  }


  this.setup = function() {
    // create a local map
    for (var i = 0; i < length_y; i++) {
      this.local_map[i] = new Array(length_x);
    }
    //this.want_to_move();
    this.move(5, 5);
    //  console.log(this.local_map[0][0]);

  }

  this.run = function() {
    //this.move();
    this.display();
  }
}
/*
   map fully written with paths v1
    for (j=0;j <=this.my_ytile;j++) {
      for (i = 0; i <= this.my_xtile; i++) {
        this.local_map[this.my_xtile - i][this.my_ytile-j] = i+j;
      }
      //  console.log(this.local_map[6][0]);
      for (i = 0; i < (length_x - this.my_xtile); i++) {
        //  console.log(this.my_xtile,this.my_ytile);
        this.local_map[this.my_xtile + i][this.my_ytile-j] = i+j;
      }
    }

    for (j=0;j <=(length_y-this.my_ytile);j++) {
      for (i = 0; i <= this.my_xtile; i++) {
        this.local_map[this.my_xtile - i][this.my_ytile+j] = i+j;
      }
      //  console.log(this.local_map[6][0]);
      for (i = 0; i < (length_x - this.my_xtile); i++) {
        //  console.log(this.my_xtile,this.my_ytile);
        this.local_map[this.my_xtile + i][this.my_ytile+j] = i+j;
      }
    }




*/




/*
recursive approach
// target_x & target_y are physical coords on convas, sub 5 and divide by tile size to get tile destination #
this.xtile=(this.xpos-5)/20; // ints that gives tile location
this.ytile=(this.ypos-5)/20;
this.move = function (){
  if(this.xpos!=this.target_x,this.ypos!=this.target_y){
    this.local_map[this.xtile][this.ytile]=true;
    if(this.local_map[this.xtile+1][this.ytile]==false && map[this.xtile+1][this.ytile]==0){ // hasnt been visted or is a no pass block

    }
    this.move(target_x,target_y);
  }else{

    return 1;
  }
}

this.want_to_move= function(){
this.target_x = 105;
this.target_y = 5;
}
*/
