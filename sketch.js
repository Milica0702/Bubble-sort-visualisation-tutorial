console.log("CAO");
let values = [];
let i = 0;
let j = 0;

function setup (){
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function draw(){
  background(0);
    if ( i < values.length){
      for (let j = 0; j < values.length-i-1 ; j++) {
       let a = values[j];
       let b = values[j+1];
        // > je da bude od najmanjeg ka najvecem a ako stavimo da je < onda od najveceg na najmanjem
        if (a > b){
          zamena(values, j, j+1);
        }

      }
    }else{
      console.log("Gotovo");
      noLoop();
    }
    i++

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
    
  }

}

function zamena(niz, a, b){
  let temp = niz[a];
  niz[a]= niz[b];
  niz[b]= temp;

}
