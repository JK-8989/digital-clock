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

 date = date < 10 ? `0${date}`: date
 hour = hour < 10 ? `0${hour}`: hour
 minute = minute < 10 ? `0${minute}`: minute
 second = second < 10 ? `0${second}`: second

 dateDiv.textContent = `${month} ${date} ${year}`
 timeDiv.textContent = `${hour}:${minute}:${second}`
}
getTime()
setInterval(getTime, 1000)