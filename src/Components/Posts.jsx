import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const Posts = () => {

    const { isLoading, data, isError, error } = useQuery('posts', () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
        {


        }
    )




    return (
        <div>


            <h1 className='text-5xl'>Query Date</h1>

            {
                isLoading && <div>
                    Loading ............
                </div>
            }

            {

                error && <div>
                    Error {error.message}
                </div>
            }
            <div>
                {
                    data?.data.map((d, i) => {
                        return <div key={i} className='bg-yellow-100 my-2 py-1 px-4'>
                            {i} -- {d.title}
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Posts