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
     pitch: 100000,
     yaw: 0,
     radius: 0.10,
     distance: 1
   });
   myPicture.addHotspot('creating-hotspot-3', {
     pitch: 0,
     yaw: 100000,
     radius: 0.10,
     distance: 1
   });
   myPicture.addHotspot('creating-hotspot-4', {
     pitch: 50000,
     yaw: 150000,
     radius: 0.10,
     distance: 1
   });
   myPicture.addHotspot('creating-hotspot-5', {
     pitch: 50000,
     yaw: 100000,
     radius: 0.10,
     distance: 1
   });
 });
myPicture.on('click', function(event) {
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-1') {
    alert('clicked Hotspot1!');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-2') {
    alert('clicked Hotspot2!');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-3') {
    alert('clicked Hotspot3!');
  }
  console.log ('register all click events');
  if (event.id == 'creating-hotspot-4') {
    alert('clicked Hotspot4!');
  }
  console.log ('register all click events');
  alert('clicked Hotspot5!');
  if (event.id == 'creating-hotspot-5') {
  }
});
myPicture.on('click', function(event){
  console.log('regiser all clik events');

  if(event.id == 'creating-hotspot-3'){
    myPicture.setContent({
      image: 'BALCONY.jpg',
      is_stereo:true
    });
  }
});
