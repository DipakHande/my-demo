import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Aboutpage from './pages/AboutPage'
import Homepage from './pages/HomePage'




const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                     <Route path="/aboutpage" element={<Aboutpage />}/>

                
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App