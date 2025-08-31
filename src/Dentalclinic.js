import React, { useState } from 'react';
import './Dental.css';
import heroImage from './3.jpeg';
import herImage from './DENTAL.jpeg';
import heImage from './2.jpeg';


function Dentalclinic() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [message, setMessage] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      setMessage(`Your appointment has been successfully booked! Name: ${name}, Date: ${date}`);
      setName('');
      setDate('');
      setTime('');
    } else {
      setMessage('Please fill in all fields!');
    }
  };

  
return (
      <div>
        {}
      <div className='burger-menu'>
        <div className='burger-icon' onClick={toggleMenu}> &#9776;
          {menuOpen && (
            <div className='dropdown-menu'>
              <a href='#home'>Home</a>
              <a href='#about'>About Us</a>
              <a href='#appointment'> Get Your Smile</a>
              </div>
          )}
          </div>
        </div>
{/* home */}
        <div id='home' className='heroSection' style={{backgroundImage: `url(${heroImage})` }}>

          <div className='overlay'><h1 className='clinic-title'>HAPPY SMILE CLINIC </h1>
          <button className='hero-button' onClick={() => document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' })} >
               Book Your Consultation Now ▼</button>
          </div>
        </div>
{/* about */}
        <div id='about' className='about-section' style={{backgroundImage: `url(${heImage})` }}>
          <h2>About Us</h2>
          <p>
              Welcome to Happy Smile Clinic! We are dedicated to providing high-quality dental care
          with the latest technology and a caring team to ensure your best smile.
        </p>
        </div>
       

          <div id='appointment' className='dental-container' style={{backgroundImage: `url(${herImage})` }}>
            <h2>Take Your Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
              <input type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)} 
              /> 
              
              <input type='date'
              value={date}
              onChange={(e)=> setDate(e.target.value)}
              />
         <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            
          />


              <button type='submit'>SEND</button>
            </form>
                    {/* عرض رسالة النجاح */}

          {message && <p className="success-message">{message}</p>}
      </div>
    </div>

  );
}
export default Dentalclinic;
