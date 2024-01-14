
import { useState } from 'react'
import './App.css'
import Students from './Components/Students'
import Teacher from './Components/Teacher'
import Home from './Components/Home'
import Posts from './Components/Posts'
import LoadingBar from 'react-top-loading-bar'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()
function App() {

  const [progress, setProgress] = useState(100)


  return (
    <>

      <QueryClientProvider client={queryClient}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/students' element={<Students />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>

        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>



    </>
  )
}

export default App
