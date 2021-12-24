var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8a77dbf98e1ddd98fb166357e0ebacd7')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  if(tempValue-273 < 10){
    temp.innerHTML = "Temp - "+tempValue+"F &  Too Cold";
  }
  else if(tempValue-273 < 20){
    temp.innerHTML = "Temp - "+tempValue+"F & accpecteable Cold";
  }
  else if(tempValue-273 < 30){
    temp.innerHTML = "Temp - "+tempValue+"F &  Normal temperature ";
    // var img = new Image();
    // img.src = 'Cold.jpg';
    // document.getElementById('img').appendChild(img);
  }
  else{
    temp.innerHTML = "Temp - "+tempValue+"F &  HOT weather ";
  }
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
