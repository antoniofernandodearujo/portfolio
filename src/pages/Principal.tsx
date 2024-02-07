'use client';

import { useEffect, useState } from "react";

import Navbar from "@/components/NavBar/Navbar";
import Header from "@/components/Header/Header";
import Cards from "@/components/Cards/Cards";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

import Spinner from "react-bootstrap/Spinner";

import { QueryClient, QueryClientProvider } from 'react-query';

const Principal: React.FC = () => {
    const queryClient = new QueryClient();

    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
        // Simule um carregamento assíncrono (substitua pelo seu código real)
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setLoading(false);
        };

        loadData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const showButtonThreshold = 50; // Defina o ponto em que o botão deve aparecer

            setShowScrollButton(offset > showButtonThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
       
        <QueryClientProvider client={queryClient}>
            <Navbar />
      {loading ? (
        // Mostra o Spinner enquanto a página está carregando
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" role="status" color="#445964">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        // Mostra o conteúdo da página quando não estiver mais carregando
        <>
            <Header id="home" />
            <Cards id="projects" />
            <About id="about" />
            <Contact id="contact" />
            <ScrollToTopButton show={showScrollButton} />
        </>
      )}
    </QueryClientProvider>
           
    );
};

export default Principal;