import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero'
import Second from '../components/second/Second';
import Constellations from '../components/constellations/Constellations';
import Services from '../components/services/Services';
import Process from '../components/process/Process';
import Testimonials from '../components/testimonials/Testimonials';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/contactForm/ContactForm';
import ContactInfo from '../components/contactInfo/ContactInfo';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Second />
        <Constellations />
        <Services />
        <Testimonials />
        <Process />
        <ContactForm />
        <ContactInfo/>
        <Footer />
    </div>
  )
}

export default Home