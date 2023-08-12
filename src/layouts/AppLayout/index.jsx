import { Outlet } from 'react-router-dom'

import Header from './header'
import Footer from './footer'

const AppLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-[url('/imgs/landing/app_background.jpg')] bg-cover bg-no-repeat bg-center overflow-auto overscroll-y-scroll no-scrollbar">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
