const ApiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const ApiKey ="a8cf06ad972398f95852c2e2f79f7837"
let button = document.querySelector('#btn')
let search = document.querySelector('#search')
let image = document.querySelector('#image')
let Main = document.querySelector('#main')
let Errore = document.querySelector('#error')

async function cheak(city){
 const response = await fetch(ApiUrl +city + `&appid=${ApiKey}`)

 if(response.status == 404){
    Errore.style.display= 'block'
    Main.style.display ='none'
 }
else{
    let data =await response.json()
 console.log(data)

 document.querySelector('#temp').innerHTML=Math.round(data.main.temp) +'°C'
 document.querySelector('#city').innerHTML=data.name
 document.querySelector('#humidity').innerHTML=data.main.humidity +"%"
 document.querySelector('#wind').innerHTML=data.wind.speed +"km/h"

if(data.weather[0].main =="Clouds"){
    image.src ='/assets/clouds.png'
}
else if( data.weather[0].main =="Clear"){
    image.src ='/assets/clear.png'
}
else if( data.weather[0].main =="Rain"){
    image.src ='/assets/rain.png'
}
else if( data.weather[0].main =="Drizzle"){
    image.src ='/assets/drizzle.png'
}
else if( data.weather[0].main =="Mist"){
    image.src ='/assets/mist.png'
}
else if( data.weather[0].main =="Snow"){
    image.src ='/assets/snow.png'
}
Main.style.display ='block'
Errore.style.display= 'none'
 }
 

}

button.addEventListener("click", ()=>{
cheak(search.value)
})
