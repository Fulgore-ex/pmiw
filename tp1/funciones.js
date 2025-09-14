function obra(x, y, tam) {
  let posx=0;
  let posy=0;
  for (let i=0; i<7; i++) {
    if (i==1) {
      posx=100;
      posy=100;
    }
    if (i>=2) {
      posx=posx/2;
      posy=posy/2;
    }
    cuadrado(x+posx, y+posy, tam);
    tam=tam/2;
    x=x+posx;
    y=y+posy;
  }
}

function cuadrado(x, y, tam) {
  let unit=tam;
  stroke(63, 136, 204);
  strokeWeight(1.5);
  for (let i=0; i<4; i++) {
    for (let n=0; n<4; n++) {
      if (dist((x+(tam*n))+tam/2, (y+(tam*i))+tam/2, mouseX, mouseY) > unit*3 ) {
        fill(159, 9, 9);
      } else {
        if (dist((x+(tam*n))+tam/2, (y+(tam*i))+tam/2, mouseX, mouseY) > unit*2 ) {
          fill(172, 15, 15);
        } else {
          if (dist((x+(tam*n))+tam/2, (y+(tam*i))+tam/2, mouseX, mouseY) > unit ) {
            fill(189, 20, 21);
          } else {
            fill(207, 31, 33);
          }
        }
      }
      rect(x+(tam*n), y+(tam*i), tam, tam);
      cruz(x+(tam*n), y+(tam*i), tam);
    }
  }
}

function cruz(x, y, tam) {
  let xcenter=x+(tam/2);
  let ycenter=y+(tam/2);
  if (mousedentro(x, y, tam)==true) {
    xcenter=mouseX;
    ycenter=mouseY;
  }
  line(x, y, xcenter, ycenter);
  line(x+tam, y, xcenter, ycenter);
  line(x, y+tam, xcenter, ycenter);
  line(x+tam, y+tam, xcenter, ycenter);
}
function mousedentro( x, y, tam) {
  if ((mouseX<x+tam)&&(mouseX>x)&&(mouseY<y+tam)&&(mouseY>y)) {
    return true;
  } else {
    return false;
  }
}
