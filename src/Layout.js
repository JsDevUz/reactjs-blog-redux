import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { useEffect } from "react";
import Routers from './router/Router'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useStoreActions } from 'easy-peasy'
function Layout() {
    const setPost = useStoreActions((action) => action.setPosts)
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')
    useEffect(() => {
        setPost(data)
        // console.log(isLoading, data);
    }, [data, setPost])

    return (
        <div className='app'>
            <div className='header-side'>
                <Header />
                <Nav />
                <div className='body'>
                    <Routers fetchError={fetchError} isLoading={isLoading} />
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Layout