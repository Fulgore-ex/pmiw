//https://youtu.be/3_bzo0E5o8Q
let imagen;
function preload() {
  imagen = loadImage("data/IMG.png");
}
function setup() {
  createCanvas (800, 400);
}
function draw() {
  obra(width/2, 0, width/8);
  image (imagen, 0, 0, width/2, height);
}
