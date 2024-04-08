import { useState, useEffect } from "react";

const InfiniteScroll = () => {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(false);
    const [page, setPage] = useState(1);

     const fetchData = async () => {
        try {
            setloading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`) 
            const incomingData = await response.json();
            setData(prevData => [...prevData, ...incomingData])
            setloading(false);
        }
        catch (e){
            setloading(false);
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchData()
    },[page])

    useEffect(() => {
        window.addEventListener ("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const handleScroll = () => {
        /**
         * scrollTop- where scrollbutton is present in the scrollbar
         * clientHeight - heigth of element including padding and excluding border
         * scrollHeight - height of element including overflowed element
         */
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement

        if(scrollTop + clientHeight > scrollHeight-10 && !loading){
            setloading(true);
            setPage(prevPage => prevPage+1)
        }
    }

    return (
        <section>
            <div>
                <h1>Infinte scroll</h1>
                {
                    data && data.map((item) => (
                        <div key={item.id}>
                            <h3>title : {item.title}</h3>
                        </div>
                    ))
                }
                {
                    loading && <p>Loading....</p>
                }
            </div>
        </section>
    )
}
export default InfiniteScroll;