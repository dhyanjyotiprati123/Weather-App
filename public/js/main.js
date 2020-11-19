const btn=document.getElementById("searchbtn");
const day=document.getElementById("day");
const month =document.getElementById("month");
const time=document.getElementById("time");

const CityName=document.getElementById("cityName");
const message=document.getElementById("message");
const temp=document.getElementById("temp");

const Mood=document.getElementById("mood")

const date=new Date();

const newDay=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const newMonth=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

day.innerHTML=newDay[date.getDay()];
month.innerHTML=newMonth[date.getMonth()];
time.innerHTML=date.toLocaleTimeString();

const getWeather=async (event)=>{
    event.preventDefault();
   
    let cityname=CityName.value;
    
    if(cityname===""){
        message.innerHTML=`Please enter a city Name`;
    }else{
        try{
            let api=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=bfe8eb0096216e8a0b8ce94b35b36f06`;
            const response=await fetch(api);
            const data= await response.json();
            const arrData=[data];

            console.log(arrData);
            temp.innerText=`${arrData[0].main.temp} degC`;
            message.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`

            const weatherMood=arrData[0].weather[0].main;

            if(weatherMood=="Clouds"){
                Mood.innerHTML='<i class="fas fa-cloud fa-5x" style="color:white"  ></i>';
            }
            else if(weatherMood=="Clear"){
               Mood.innerHTML='<i class="far fa-sun fa-5x" style="color:yellow"  ></i>';
            } 
            else if(weatherMood=="Rain"){
                Mood.innerHTML='<i class="fas fa-cloud-rain fa-5x"  style="color:white" ></i>';
            }
            else{
                Mood.innerHTML='<i class="fas fa-cloud-sun-rain fa-5x"  style="color:yellow" ></i>';
            }

        }catch{
            message.innerHTML=`Please enter a valid city Name`;
        }
    }


};

btn.addEventListener("click",getWeather);