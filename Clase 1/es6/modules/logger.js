export default function logger (message, color = 'green') {
  console.log(`%c${message}`, `color:${color}`)
}
