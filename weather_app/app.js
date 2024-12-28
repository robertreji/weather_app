const search=document.querySelector("button")
const api_key="3410d8a8de796a934cae37b821cbc128";
const temp=document.querySelector("#temp")
const city=document.querySelector("#city")
const input =document.querySelector("input")
console.log(input.value)


search.addEventListener("click",async(evnt)=>
{
    
    try
    {
       let cityname=input.value
       let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${api_key}`)
       let json=await response.json()
       temp.innerText=`${json.main.temp} °C`
       city.innerText=`${cityname}`
      
    }catch(err)
    {
       console.error(err);
    }
})

