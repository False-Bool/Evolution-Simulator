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
  this.distance;// used to get path
  this.dist_traveled
 this.time=0;
  this.display = function() {
    var creature_radius = tile_size * 0.8;
    fill(255, 0, 0);
    ellipse(this.xpos, this.ypos, creature_radius, creature_radius);

  }
//MAJOR ALERT: THIS ONLY WORKS FOR N*N maps, perfect squares, because X and Y are reversed here.... [x][y], should be [y][x]
//sets local map depending on current position
this.set_local_map = function(destx,desty) {
print(true);
this.dist_traveled=0;
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


this.distance=  this.local_map[desty][destx];

  }


  this.get_route=function(destx,desty){
// keeps walking to fking infinity???

    //  print(this.distance);
      if(this.distance!=this.dist_traveled && adding){
          print(this.local_map[this.my_ytile][this.my_xtile]);
           if(this.my_ytile-1>=0&&this.local_map[this.my_ytile-1][this.my_xtile]==this.dist_traveled+1){

            this.ypos-=tile_size;
            this.dist_traveled+=1 ;
          }
          //check below
          else if(this.my_ytile+1<=length_y&&this.local_map[this.my_ytile+1][this.my_xtile]==this.dist_traveled+1){
            this.ypos+=tile_size;
            this.dist_traveled+=1;
          }
          //check right
          else if(this.my_xtile+1<=length_x&&this.local_map[this.my_ytile][this.my_xtile+1]==this.dist_traveled+1){
              this.xpos+=tile_size;
              this.dist_traveled+=1;

          }
          //check left
          else if(this.my_xtile-1>=0&&this.local_map[this.my_ytile][this.my_xtile-1]==this.dist_traveled+1){
              this.xpos-=tile_size;
              this.dist_traveled+=1;
          }
          else {
            print("ERROR CANT FIND TILE");
            //break;
          }
          this.update_current_pos();



      }


  }
  // no current use, temporary ,updates current creature position, x,y tile are positions on grid, not canvas
  this.update_current_pos= function(){
    this.my_xtile = (this.xpos - 5) / tile_size;
    this.my_ytile = (this.ypos - 5) / tile_size;
  }

  this.setup = function() {
    // create a local map
    for (var i = 0; i < length_y; i++) {
      this.local_map[i] = new Array(length_x);
    }
    this.set_local_map(3,3);



  }

  this.run = function() {
    //this.move();
    this.display();
    this.get_route(3,3);
  }


  //this.adding = false;
  /**
  *timer- run time in seconds, when tabbed into the program, frame counter based
  */
  /*
this.timer= function () {

    if (frameCount % 14 == 0) {
      this.adding = true;
      time += 1;
    } else {
      adding = false;
    }


  }
*/
}
/*
   map fully written with paths v1
    for (j=0;j <=this.my_xtile;j++) {
      for (i = 0; i <= this.my_ytile; i++) {
        this.local_map[this.my_ytile - i][this.my_xtile-j] = i+j;
      }
      //  console.log(this.local_map[6][0]);
      for (i = 0; i < (length_x - this.my_ytile); i++) {
        //  console.log(this.my_ytile,this.my_xtile);
        this.local_map[this.my_ytile + i][this.my_xtile-j] = i+j;
      }
    }

    for (j=0;j <=(length_y-this.my_xtile);j++) {
      for (i = 0; i <= this.my_ytile; i++) {
        this.local_map[this.my_ytile - i][this.my_xtile+j] = i+j;
      }
      //  console.log(this.local_map[6][0]);
      for (i = 0; i < (length_x - this.my_ytile); i++) {
        //  console.log(this.my_ytile,this.my_xtile);
        this.local_map[this.my_ytile + i][this.my_xtile+j] = i+j;
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
