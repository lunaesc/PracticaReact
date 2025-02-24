import { Children } from "react"
import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"


const BaseLayout = () => {
  return (
    <>
    <Header/>
    <main>

        {Children}
    </main>
    <Footer/>
    </>
  )
}

export default BaseLayout