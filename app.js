var myPicture = vRViewPlayer ('#skull-tattoo', {
  image: 'picture1.jpg',
  is_stereo : false
});
 window.addEventListener('load',myPicture);
 myPicture.on('ready', function(event) {
   myPicture.addHotspot('creating-hotspot-1', {
     pitch: 0,
     yaw: 0,
     radius: 0.10,
     distance: 1
   });
 });
