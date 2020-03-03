import http from 'http'
import path from 'path'

const App = {
  appdir: path.join(__dirname, '../')
}
export { App }

export default async () => {
  console.log('booted!')
  http.createServer(() => {}).listen()
}
