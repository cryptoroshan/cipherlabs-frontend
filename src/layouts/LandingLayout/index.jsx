import { Outlet } from 'react-router-dom'

import Header from './header'
import Footer from './footer'

const LandingLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-[url('/imgs/landing/landing_background.svg')] bg-cover bg-no-repeat px-[22px] py-5">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LandingLayout
