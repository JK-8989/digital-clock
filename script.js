const dateDiv = document.getElementById('date')
const timeDiv = document.getElementById('time')

getTime = () => {
 let now = new Date()
 let year = now.getFullYear()
 let month = now.toLocaleDateString('default', {month: 'short'})
 let date = now.getDate()
 let hour = now.getHours()
 let minute = now.getMinutes()
 let second = now.getSeconds()

 let am_pm = "AM";
    
 if(hour === 0){
     hour = 12;
 }
 
 if(hour > 12){
     hour = hour - 12;
     session = "PM";
 }

 date = date < 10 ? `0${date}`: date
 hour = hour < 10 ? `0${hour}`: hour
 minute = minute < 10 ? `0${minute}`: minute
 second = second < 10 ? `0${second}`: second

 dateDiv.textContent = `${month} ${date}ᵀᴴ ${year}`
 timeDiv.textContent = `${hour}:${minute}:${second}  ${am_pm}`
}
getTime()
setInterval(getTime, 1000)