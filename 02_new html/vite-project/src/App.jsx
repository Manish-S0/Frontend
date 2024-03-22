import New from './new'

function App() {
  const username='manis'

  return (
    <>
      <h1>hello</h1>
      <h1>{username}</h1>
       {/*{username} is a variable,{} is evaluated expression*/}
      <New />
       
    </> // only one element can be returned so we write everything in <>'fragment element'
  )
}

export default App
