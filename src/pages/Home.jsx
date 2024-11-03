import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Ready to craft your standout resume?",
      "Want to showcase your skills in style?",
      "Let’s build something amazing!",
      "Click below to get started",
      "Make your resume work for you!",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 30,
  });

  const colors = [
    '#FFD700', // Light Gold
    '#FFECB3', // Light Yellow
    '#A5D6A7', // Light Green
    '#FFAB91', // Light Orange
    '#80DEEA', // Light Cyan
    '#F8BBD0', // Light Pink
    '#C5CAE9', // Light Blue
    '#B2EBF2', // Aqua Light Blue
    '#D1C4E9', // Light Lavender
    '#FFCDD2', // Light Rose
    '#E1BEE7', // Light Purple
    '#FFCCBC', // Light Coral
    '#B3E5FC', // Light Sky Blue
  ];
  
  const [bgColor, setBgColor] = useState(colors[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [colors.length]);

  useEffect(() => {
    setBgColor(colors[currentIndex]);
  }, [currentIndex, colors]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        height: '100vh',
        width:'100vw',
        transition: 'background-color 0.5s ease',
      }}
    >
      <p style={{ textAlign: 'center', fontSize: '50px', color: 'white', fontWeight: 'bolder' }}>
        {typeEffect}
      </p>
      <Link
        to="/create_resume"
        style={{
          textAlign: 'center',
          marginTop: '25px',
          fontSize: '25px',
          color: 'white',
          fontWeight: '700',
          textDecoration: 'underline',
        }}
      >
        Start Building <FaArrowRight />
      </Link>
    </div>
  );
};

export default Home;
