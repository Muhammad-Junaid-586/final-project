

const urli = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=islamabad`;

const optionsi = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd168b4ac3msh416f19ee0e8af3cp16ffc2jsn21cc248159fb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeatheri = async () => {
    
    
    try {
        const response = await fetch(urli, optionsi);
        const result = await response.json();

        document.getElementById('cloud_pcti').innerHTML = result.cloud_pct;
        document.getElementById('feels_likei').innerHTML = result.feels_like;
        // document.getElementById('feels_like2').innerHTML = result.feels_like;
        document.getElementById('humidityi').innerHTML = result.humidity;
        // document.getElementById('humidity2').innerHTML = result.humidity;
        document.getElementById('max_tempi').innerHTML = result.max_temp;
        document.getElementById('min_tempi').innerHTML = result.min_temp;
        document.getElementById('sunrisei').innerHTML = result.sunrise;
        document.getElementById('sunseti').innerHTML = result.sunset;
        document.getElementById('tempi').innerHTML = result.temp;
        // document.getElementById('temp2').innerHTML = result.temp;
        document.getElementById('wind_degreesi').innerHTML = result.wind_degrees;
        document.getElementById('wind_speedi').innerHTML = result.wind_speed;
        // document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    } catch (e) {
        console.error(e);
    }
}


// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // getWeather(city.value)
//     console.log(inp.value)
// })

getWeatheri();



const urlk = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=karachi`;

const optionsk = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd168b4ac3msh416f19ee0e8af3cp16ffc2jsn21cc248159fb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeatherk = async () => {
    
    
    try {
        const response = await fetch(urlk, optionsk);
        const result = await response.json();

        document.getElementById('cloud_pctk').innerHTML = result.cloud_pct;
        document.getElementById('feels_likek').innerHTML = result.feels_like;
        // document.getElementById('feels_like2').innerHTML = result.feels_like;
        document.getElementById('humidityk').innerHTML = result.humidity;
        // document.getElementById('humidity2').innerHTML = result.humidity;
        document.getElementById('max_tempk').innerHTML = result.max_temp;
        document.getElementById('min_tempk').innerHTML = result.min_temp;
        document.getElementById('sunrisek').innerHTML = result.sunrise;
        document.getElementById('sunsetk').innerHTML = result.sunset;
        document.getElementById('tempk').innerHTML = result.temp;
        // document.getElementById('temp2').innerHTML = result.temp;
        document.getElementById('wind_degreesk').innerHTML = result.wind_degrees;
        document.getElementById('wind_speedk').innerHTML = result.wind_speed;
        // document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}


// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // getWeather(city.value)
//     console.log(inp.value)
// })

getWeatherk();







const urll = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore`;

const optionsl = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd168b4ac3msh416f19ee0e8af3cp16ffc2jsn21cc248159fb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeatherl = async () => {
    
    
    try {
        const response = await fetch(urll, optionsl);
        const result = await response.json();

        document.getElementById('cloud_pctl').innerHTML = result.cloud_pct;
        document.getElementById('feels_likel').innerHTML = result.feels_like;
        // document.getElementById('feels_like2').innerHTML = result.feels_like;
        document.getElementById('humidityl').innerHTML = result.humidity;
        // document.getElementById('humidity2').innerHTML = result.humidity;
        document.getElementById('max_templ').innerHTML = result.max_temp;
        document.getElementById('min_templ').innerHTML = result.min_temp;
        document.getElementById('sunrisel').innerHTML = result.sunrise;
        document.getElementById('sunsetl').innerHTML = result.sunset;
        document.getElementById('templ').innerHTML = result.temp;
        // document.getElementById('temp2').innerHTML = result.temp;
        document.getElementById('wind_degreesl').innerHTML = result.wind_degrees;
        document.getElementById('wind_speedl').innerHTML = result.wind_speed;
        // document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}


// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // getWeather(city.value)
//     console.log(inp.value)
// })

getWeatherl();









const urlq = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=quetta`;

const optionsq = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd168b4ac3msh416f19ee0e8af3cp16ffc2jsn21cc248159fb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeatherq = async () => {
    
    
    try {
        const response = await fetch(urlq, optionsq);
        const result = await response.json();

        document.getElementById('cloud_pctq').innerHTML = result.cloud_pct;
        document.getElementById('feels_likeq').innerHTML = result.feels_like;
        // document.getElementById('feels_like2').innerHTML = result.feels_like;
        document.getElementById('humidityq').innerHTML = result.humidity;
        // document.getElementById('humidity2').innerHTML = result.humidity;
        document.getElementById('max_tempq').innerHTML = result.max_temp;
        document.getElementById('min_tempq').innerHTML = result.min_temp;
        document.getElementById('sunriseq').innerHTML = result.sunrise;
        document.getElementById('sunsetq').innerHTML = result.sunset;
        document.getElementById('tempq').innerHTML = result.temp;
        // document.getElementById('temp2').innerHTML = result.temp;
        document.getElementById('wind_degreesq').innerHTML = result.wind_degrees;
        document.getElementById('wind_speedq').innerHTML = result.wind_speed;
        // document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}


// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // getWeather(city.value)
//     console.log(inp.value)
// })

getWeatherq();




const urln = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york`;

const optionsn = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd168b4ac3msh416f19ee0e8af3cp16ffc2jsn21cc248159fb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeathern = async () => {
    
    
    try {
        const response = await fetch(urln, optionsn);
        const result = await response.json();

        document.getElementById('cloud_pctn').innerHTML = result.cloud_pct;
        document.getElementById('feels_liken').innerHTML = result.feels_like;
        // document.getElementById('feels_like2').innerHTML = result.feels_like;
        document.getElementById('humidityn').innerHTML = result.humidity;
        // document.getElementById('humidity2').innerHTML = result.humidity;
        document.getElementById('max_tempn').innerHTML = result.max_temp;
        document.getElementById('min_tempn').innerHTML = result.min_temp;
        document.getElementById('sunrisen').innerHTML = result.sunrise;
        document.getElementById('sunsetn').innerHTML = result.sunset;
        document.getElementById('tempn').innerHTML = result.temp;
        // document.getElementById('temp2').innerHTML = result.temp;
        document.getElementById('wind_degreesn').innerHTML = result.wind_degrees;
        document.getElementById('wind_speedn').innerHTML = result.wind_speed;
        // document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}


// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // getWeather(city.value)
//     console.log(inp.value)
// })

getWeathern();






const urld = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dehli`;

const optionsd = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd168b4ac3msh416f19ee0e8af3cp16ffc2jsn21cc248159fb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeatherd = async () => {
    
    
    try {
        const response = await fetch(urld, optionsd);
        const result = await response.json();

        document.getElementById('cloud_pctd').innerHTML = result.cloud_pct;
        document.getElementById('feels_liked').innerHTML = result.feels_like;
        // document.getElementById('feels_like2').innerHTML = result.feels_like;
        document.getElementById('humidityd').innerHTML = result.humidity;
        // document.getElementById('humidity2').innerHTML = result.humidity;
        document.getElementById('max_tempd').innerHTML = result.max_temp;
        document.getElementById('min_tempd').innerHTML = result.min_temp;
        document.getElementById('sunrised').innerHTML = result.sunrise;
        document.getElementById('sunsetd').innerHTML = result.sunset;
        document.getElementById('tempd').innerHTML = result.temp;
        // document.getElementById('temp2').innerHTML = result.temp;
        document.getElementById('wind_degreesd').innerHTML = result.wind_degrees;
        document.getElementById('wind_speedd').innerHTML = result.wind_speed;
        // document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}


// submit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     // getWeather(city.value)
//     console.log(inp.value)
// })

getWeatherd();








