const weatherOptions=['Sunny','Rainy','Cloudy','Snowy'];

function weatherSelection(){
    const selectedWeather=Math.floor(Math.random()*weatherOptions.length);
    return weatherOptions[selectedWeather];
}

function updateAdvice(weather){
    const currentWeather=document.getElementById('weather');
    const advice=document.getElementById('advice');
    

    currentWeather.textContent=`Current Weather : ${weather}`;

    if(weather==='Sunny'){
        advice.textContent='Advice : Sunny day today🌞 Remember to take sunglasses🕶';
    }
    else if(weather==='Rainy'){
        advice.textContent='Advice : Rainy day today🌧. Remember to take your umbrella☂';
    }
    else if(weather==='Cloudy'){
        advice.textContent='Advice : Cloudy day today☁. Good for a walk outside🚶';
    }
    else{
        advice.textContent='Advice : Snowy day today❄. Better stay indoors🏠';
    }
};
    const button1=document.getElementById('btn1');
    button1.addEventListener('click',function(){
        const weatherValue=weatherSelection();
        updateAdvice(weatherValue);
    });
