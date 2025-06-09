import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import Aboutpage from './pages/AboutPage'




const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/homepage" element={<Homepage/>}/>
                     <Route path="/aboutpage" element={<Aboutpage />}/>

                    
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App