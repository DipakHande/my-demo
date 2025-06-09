import React from 'react'
import { Links } from 'react-router-dom'
import Header from '../Components/Header/Header'


const Homepage = () => {
    return (
        <>
        
            <div>
                <Header />
                <h1>Welcome to Vivekanand College!</h1>
                Your journey to excellence starts here.
            
            <button  className="btn "type="button">Apply now</button>
            </div>
            <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            
            <h2>Why Choose Vivekanand College?</h2>

            <ul>
                    <li>*Legacy of Excellence:* Decades of commitment to quality education. </li>
                    <li>*Experienced Faculty:* Learn from renowned experts and passionate educators.</li>
                    <li>*Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li>*Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
                    <li>*Strong Placements:* Excellent career opportunities with leading companies.</li>
             </ul>

             <div className='down'>
                    <h2>Campus Life & Facilities</h2>
                    <link img>
                    </link>
                    <link></link>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                    <p>Ready to explore our courses?</p>
                    <button type="button" >Explore Courses</button>
             </div>
        </>
    )
}
export default Homepage