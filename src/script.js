var canvas = null;
var Original_img = null;
var img1 = null;
var img2 = null;
var img3 = null;
var img4 = null;
var img5 = null;
var img6 = null;
var reset_img = null;
function uploadImg(){
  canvas = document.getElementById("cv");
  var image = document.getElementById("imgfle");
  Original_img = new SimpleImage(image);
  img1 = new SimpleImage(image);
  img2 = new SimpleImage(image);
  img3 = new SimpleImage(image);
  img4 = new SimpleImage(image);
  img5 = new SimpleImage(image);
  img6 = new SimpleImage(image);
  reset_img = new SimpleImage(image);
  Original_img.drawTo(canvas);
  alert("The image has been uploaded!");
}
/******************/
function uploadcheck(img){
  if (img == null || ! img.complete()){
    alert("the image is not loaded!");
    return false;
  }
  else{
    return true;
  }
}
/******************/
function changing_graypixels(){
  for (var pixel of img1.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setGreen(avg);
    pixel.setRed(avg);
    pixel.setBlue(avg);
  }
}
/******************/
function grayscale(){
  if (uploadcheck(img1)){
    changing_graypixels();
    img1.drawTo(canvas);
  }
}
/******************/
function changing_redpixels(){
  for (var pixel of img2.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}
/******************/
function Red_Filter(){
  if(uploadcheck(img2)){
    changing_redpixels();
    img2.drawTo(canvas);
  }
}
/******************/
function Window_Pane(){
  for (var pixel of img3.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var w = img3.getWidth();
    var h = img3.getHeight();
    if(x < 10 || x > w - 10 || y < 10 || y > h - 10 || (x > w/4 && x < (w/4)+10) || (x > w/2 && x < (w/2)+10) || (x > 3*w/4 && x < (3*w/4)+10) || (y > h/2 && y < (h/2)+10)){
      pixel.setRed(230);
      pixel.setGreen(153);
      pixel.setBlue(0);
    }
  }
  img3.drawTo(canvas);
}
/******************/
function Rainbow(){
  for (var pixel of img4.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    var y = pixel.getY();
    var h = img3.getHeight();
    if(y < h/7){
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(y < 2*h/7 && y >= h/7){
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(y < 3*h/7 && y >= 2*h/7){
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(y < 4*h/7 && y >= 3*h/7){
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    if(y < 5*h/7 && y >= 4*h/7){
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    if(y < 6*h/7 && y >= 5*h/7){
      if(avg < 128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    if(y < h && y >= 6*h/7){
      if(avg < 128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      else{
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  img4.drawTo(canvas);
}
/******************/
function reset(){
  if (uploadcheck(reset_img)){
    img1 = Original_img;
    img2 = Original_img;
    img3 = Original_img;
    img4 = Original_img;
    img5 = Original_img;
    reset_img.drawTo(canvas);
    alert("The original image is shown now!");
  }
}
