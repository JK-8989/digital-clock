const dateDiv = document.getElementById('date')
const timeDiv = document.getElementById('time')

getTime = () => {
 let now = new Date()
 let month = now.toLocaleDateString('default', {month: 'short'})
 let date = now.getDate()
 let hour = now.getHours()
 let minute = now.getMinutes()
 let second = now.getSeconds()

 let am_pm = "AM";
    
 if(hour === 12){
     am_pm = "PM"
 }
 if(hour > 12 && minute > 0){
     hour = hour - 12;
     am_pm = "PM";
 }

 date = date < 10 ? `0${date}`: date
 hour = hour < 10 ? `0${hour}`: hour
 minute = minute < 10 ? `0${minute}`: minute
 second = second < 10 ? `0${second}`: second

 dateDiv.textContent = `${month} ${date}ᵀᴴ`
 timeDiv.textContent = `${hour}:${minute}:${second}  ${am_pm}`
}
getTime()
setInterval(getTime, 1000)