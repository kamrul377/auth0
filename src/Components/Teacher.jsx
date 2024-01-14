import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Teacher = () => {

    const [pictures, setPictures] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(false)


    const getAllPictures = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=500`)


        setPictures((prevPicture) => [...prevPicture, ...res.data])
        setPage((prevPage) => prevPage + 1)
        setloading(false)


    }

    useEffect(() => {
        setloading(true)
        getAllPictures()
    }, [])


    return (
        <div>


            <h1 className="text-3xl font-bold">Pictures</h1>

            {/* {
                loading && <h1 className="text-6xl "> Loading..........</h1>
            }
            <div className="flex flex-wrap">
                {
                    pictures?.map((picture, i) => {
                        return <div key={i} className="w-48 flex m-2 border p-3">
                            <h2>{i}</h2>
                            <img src={picture.url} alt="images" loading="lazy" />
                        </div>
                    })
                }

            </div> */}

            <InfiniteScroll
                dataLength={pictures.length}
                next={getAllPictures}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                <div className="flex flex-wrap">
                    {
                        pictures?.map((picture, i) => {
                            return <div key={i} className="w-48 flex m-2 border p-3">
                                <h2>{i}</h2>
                                <img src={picture.url} alt="images" loading="lazy" />
                            </div>
                        })
                    }

                </div>
            </InfiniteScroll>



            {
                loading && <div className="bg-indigo-700 px-10 py-3 fixed bottom-4 left-16 text-white rounded">

                    Loading...
                </div>
            }
        </div>
    )
}

export default Teacher