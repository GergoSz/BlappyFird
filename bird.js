function Bird(){
  this.y = height/2;
  this.x = 70;

  this.gravity = 0.5;
  this.velocity = 0;
  this.lift = -10;

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 30, 20);
  }

  this.up = function(){

    this.velocity += this.lift;

  }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;


    if(this.y > height){
      this.y = height;
      this.velocity = 0;
    }

    if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
  }

}
