var image;
var grayimg;

function upload(){
  var fileInput = document.getElementById("filechoosed");
  var canvas1 = document.getElementById("lienzo1");
  image = new SimpleImage(fileInput);
  grayimg = new SimpleImage(fileInput);
  image.drawTo(canvas1);
}

function makeGray(){
    for(var px of grayimg.values()){
        var avg = (px.getRed()+px.getGreen()+px.getBlue())/3;
        px.setRed(avg);
        px.setGreen(avg);
        px.setBlue(avg);
    }
    var canvas2 = document.getElementById("lienzo2");
    grayimg.drawTo(canvas2);
}