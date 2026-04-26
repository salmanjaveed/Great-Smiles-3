import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = p => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header page={page} setPage={navigate} />
      <main>
        {page === 'home'     && <HomePage     setPage={navigate} />}
        {page === 'about'    && <AboutPage    setPage={navigate} />}
        {page === 'services' && <ServicesPage setPage={navigate} />}
        {page === 'book'     && <BookPage />}
        {page === 'contact'  && <ContactPage />}
      </main>
      <Footer setPage={navigate} />
    </>
  );
}
