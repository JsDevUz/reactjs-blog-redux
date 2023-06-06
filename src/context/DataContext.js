import { useEffect, useState, createContext } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [search, setSearch] = useState('')


    const [searchResult, setSearchResult] = useState([])
    const [posts, setPosts] = useState([])

    // custom hook
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')
    //

    useEffect(() => {

        setPosts(data)
    }, [data])
    useEffect(() => {
        if (search.length > 0) {
            console.log(posts);
            const searchResults = posts.filter(p => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                || posts.filter(p => p.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            setSearchResult(searchResults)
        } else {
            setSearchResult(posts)
        }
    }, [search, posts])



    return (
        <DataContext.Provider value={{
            isLoading, fetchError, posts, setPosts, setSearch, searchResult
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;