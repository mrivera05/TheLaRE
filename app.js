var myPicture = vRViewPlayer ('#skull-tattoo', {
  image: 'RLC.jpg',
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
   myPicture.addHotspot('creating-hotspot-2', {
     pitch: 180,
     yaw: 320,
     radius: 0.10,
     distance: 1
   });
   myPicture.addHotspot('creating-hotspot-3', {
     pitch: 180,
     yaw: 270,
     radius: 0.10,
     distance: 1
   });
   myPicture.addHotspot('creating-hotspot-4', {
     pitch: 180,
     yaw: 50,
     radius: 0.10,
     distance: 1
   });
   myPicture.addHotspot('creating-hotspot-5', {
     pitch: 180,
     yaw: 150,
     radius: 0.10,
     distance: 1
   });
 });
myPicture.on('click', function(event) {
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-1') {
    alert('Coffee break!');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-2') {
    alert('Work this way');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-3') {
    alert('lets take a break');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-4') {
    alert('Bathroom break');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-5') {
    alert('Math deparment this way');
  }



});
myPicture.on('click', function(event){
  console.log('regiser all clik events');

  if(event.id == 'creating-hotspot-3'){
    myPicture.setContent({
      image: 'BALCONY.jpg',
      is_stereo:false
      });
    }
    console.log('regiser all clik events');

    if(event.id == 'creating-hotspot-1'){
      myPicture.setContent({
        image: 'KELLY.jpg',
        is_stereo:false
        });
      }
});
