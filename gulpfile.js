var im = require('imagemagick');

im.resize({
  srcPath: 'img/2048.png',
  dstPath: 'img_s/2048-small.jpg',
  width:   100,
  height: 50
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kittens.jpg to fit within 256x256px');
});

im.resize({
  srcPath: 'img/cam_be_like.jpg',
  dstPath: 'img_s/cam_be_like-small.jpg',
  width:   100,
  height: 50
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kittens.jpg to fit within 256x256px');
});

im.resize({
  srcPath: 'img/mobilewebdev.jpg',
  dstPath: 'img_s/mobilewebdev-small.jpg',
  width:   100,
  height: 50
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kittens.jpg to fit within 256x256px');
});

im.resize({
  srcPath: 'img/profilepic.jpg',
  dstPath: 'img_s/profilepic-small.jpg',
  width:   100,
  height: 50
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kittens.jpg to fit within 256x256px');
});

