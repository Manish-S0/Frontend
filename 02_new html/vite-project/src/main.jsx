import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import New from './new.jsx'

function MyApp() {
  return <h1>Hello, world!</h1>
}

const anotherElement=(
  <a href="https://google.com" target="_blank">visit google</a>
)

const reactElement= React.createElement(
  'a', 
  {href: 'https://google.com',
  target: '_blank'},
  'visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
  
  <>
    <App />
    <New />
    {MyApp()}
    {anotherElement}<br/>
    {reactElement}
  </>
  
)
