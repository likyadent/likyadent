import Main from "./Components/Main/Main"
import "../src/css/root.css"
import { HelmetProvider } from "react-helmet-async";


function App() {

  return (
    <>
      <HelmetProvider>
        <Main />      
      </HelmetProvider>
    </>
  )
}

export default App
