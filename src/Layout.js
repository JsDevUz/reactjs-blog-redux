import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Routers from './router/Router'

function Layout() {

    return (
        <div className='app'>
            <div className='header-side'>
                <Header />
                <Nav />
                <div className='body'>
                    <Routers />
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Layout