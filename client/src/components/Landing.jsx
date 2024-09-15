import React from 'react';
import '@fontsource/raleway';  // Raleway font from Google Fonts

// Inline styles
const styles = {
  container: {
    position: 'relative',
    height: '100vh', // Full viewport height
    background: `url('https://wallpaperaccess.com/full/266875.jpg') no-repeat center center/cover`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Raleway, sans-serif', // Modern font
    overflow: 'hidden',  // Ensures no scroll bars on animation
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))', // Gradient overlay
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    animation: 'fadeIn 2s ease-in-out', // Smooth fade-in animation
  },
  heading: {
    fontSize: '4rem',
    margin: '0',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', // Larger shadow for better readability
    letterSpacing: '3px', // Modern spacing
    animation: 'slideDown 2s ease-in-out', // Slide-in effect for heading
  },
  subheading: {
    fontSize: '1.7rem',
    margin: '1rem 0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
    opacity: 0,
    animation: 'fadeIn 3s 1s forwards', // Delayed fade-in for subheading
  },
  button: {
    marginTop: '2rem',
    padding: '12px 24px',
    fontSize: '1.2rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    boxShadow: '0 4px 12px rgba(0, 123, 255, 0.5)', // Glowing shadow effect
    zIndex: 2,
    animation: 'fadeInUp 3s 1.5s forwards', // Button fade-in with a slight upward motion
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  '@keyframes slideDown': {
    '0%': { transform: 'translateY(-100px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 },
  },
  '@keyframes fadeInUp': {
    '0%': { transform: 'translateY(20px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 },
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Change on hover
    transform: 'scale(1.1)', // Scale button on hover
  },
};

function Landing() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Our Website</h1>
        <p style={styles.subheading}>We offer amazing services just for you.</p>
      </div>
    </div>
  );
}

export default Landing;

