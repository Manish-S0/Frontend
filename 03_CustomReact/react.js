const mainContainer = document.querySelector('#root')

const reactElement = {
  type:'a',
  props: {
    href:'https://google.com',
    target:'_blank'
  },
  children:'click me to visit google'
}

function customRender(reactElement,container){
  /*const dom=document.createElement(reactElement.type)
  dom.innerHTML=reactElement.children
  dom.setAttribute('href',reactElement.props.href)
  dom.setAttribute('target',reactElement.props.target)
  container.appendChild(dom)
  */

  const dom=document.createElement(reactElement.type)
  dom.innerHTML=reactElement.children
  for (const key in reactElement.props) {
     if(key==='children'){
       continue
     }
     dom.setAttribute(key,reactElement.props[key])
  }
  container.appendChild(dom)
}
customRender(reactElement, mainContainer)