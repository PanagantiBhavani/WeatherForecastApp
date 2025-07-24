function weather1(weatherData){
    switch(weatherData.weather[0].main){
        case 'Clouds':
            document.body.style.backgroundImage="url('cloudy.jpg')";
            break; 
        case 'Rain':
            document.body.style.backgroundImage="url('rainy2.jpg')";
            break;
        case 'Clear':
            document.body.style.backgroundImage="url('sunny.jpg')";
            break;
        case 'Snow':
            document.body.style.backgroundImage="url('snow.jpg')";
            break;
        case 'Mist':
            document.body.style.backgroundImage="url('mist.jpg')";
            break;
        default:
            document.body.style.backgroundImage="none";
            break;     
    }
}
document.getElementById("getWeather").addEventListener("click",function(){
    async function getData(){
        const result=document.getElementById("result");
        /*const city =document.getElementById("cityName").value;*/
        const city=cityName.value;
        try{
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e9132247c28495cd8d100520c564833a&units=metric`);
            const data=await response.json();
            result.innerHTML=`pressure: ${data.main.pressure}hpa <br> temp_min:${data.main.temp_min}${String.fromCharCode(176)}C <br>
            temperature: ${data.main.temp}${String.fromCharCode(176)}C <br> humidity:${data.main.humidity}% <br> speed:${data.wind.speed}kmph`;
            console.log(data);
            weather1(data);
    
        }
                    
        catch(error)
        {
            result.innerHTML="error occurs";
            console.error(error);
        }
            
    }
    getData();
});