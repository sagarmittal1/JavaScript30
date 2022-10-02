const compass = document.querySelector('.compass');
const speed = document.querySelector('.speed');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');

navigator.geolocation.watchPosition((data) => {
    // console.log(data);
    speed.textContent = data.coords.speed || 00;
    latitude.textContent = data.coords.latitude;
    longitude.textContent = data.coords.longitude;
    compass.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.log(err);
    alert('You have to allow location permission to use this.')
})