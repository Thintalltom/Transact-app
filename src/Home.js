import React from 'react'
import Topbar from './Components/Navbar/Navbar'
import Content1 from './Components/Content1/Content1'
import Content2 from './Components/Content2/Content2'
import Content3 from './Components/Content3/Content3'
import Content4 from './Components/Content4/Content4'
import Footer from './Components/Footer/Footer'

const Home = () => {
  return (
    <div>
<Topbar />
   <Content1 />
   <Content2 />
   <Content3 />
   <Content4 />
   <Footer />
    </div>
  )
}

export default Home