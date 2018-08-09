var bird;
var pipes = [];
function setup(){
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw(){
  background(0);

  for(var i = pipes.length-1; i >= 0; i--){
    pipes[i].update();
    pipes[i].show();

    if(pipes[i].hits(bird)){
      fill(124);
      pipes[i].show();
      //console.log("HIT");
    }

    if(pipes[i].offscreen()){
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();

  if(frameCount % 400 == 0){
    pipes.push(new Pipe());
  }


}

function keyPressed(){
  if(key == ' '){
    bird.up();
    //console.log("Space");
  }
}
