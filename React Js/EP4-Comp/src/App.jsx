import Header from "./components/Header"
import Footer from "./components/Footer"
import  Content  from "./components/Content"

function App() {

  let user = "Kesavan"

  return (
    <>
      <Header  user = {user} />
      <Content/>
      <Footer user = "Murugesan"/>
    </>
  )
}

export default App
