const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')
const html = document.body.parentElement

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dayArr = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function tick() {
  // SOLUTION 1
  // const now = new Date()

  // const day = now.getDay()
  // const date = now.getDate()
  // const month = now.getMonth()
  // const hour = now.getHours()
  // const minute = now.getMinutes()
  // const second = now.getSeconds()
  
  // const clockHours = hour % 12
  // const ampm = hour >= 12 ? 'PM' : 'AM'

  // hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours, 0, 11, 0, 360)}deg)`
  // minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
  // secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

  // timeEl.innerHTML = `${clockHours}:${minute < 10 ? `0${minute}` : minute}, <small class="ampm">${ampm}</small>`
  // dateEl.innerHTML = `${dayArr[day]}, ${monthArr[month]}, <span class="circle">${date}</span> `

  // SOLUTION 2
  const now = new Date();

  const day = now.getDay()
  const date = now.getDate()
  const month = now.getMonth()
  const timeDiffUtc = now.getTimezoneOffset();

  // from timestaps to h:m:s
  const time = Date.now();
  const minute = (time / 1000 / 60) - timeDiffUtc;
  const hour = (minute / 60);
  const second = (hour * 3600);

  const ampm = now.getHours() >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${(hour / 12) * 360}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minute / 60) * 360}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${(second / 60) * 360}deg)`
  timeEl.innerHTML = `${now.getHours()}:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()} <small class="ampm">${ampm}</small>`
  dateEl.innerHTML = `${dayArr[day]}, ${monthArr[month]} <span class="circle">${date}</span> `
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

tick()
setInterval(tick, 0)

if(localStorage.getItem('dark')) {
  html.classList.add('dark')
}

toggleEl.addEventListener('click', (e) => {
  localStorage.setItem('dark', 'dark')

  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    localStorage.setItem('dark', '')
  } else {
    html.classList.add('dark')
  }
})
