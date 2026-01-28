import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '1.5rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '0.8rem',
      boxSizing: 'border-box'
    }}>
      <div>© 2024 SHAMPOO STUDIO.</div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <span style={{ cursor: 'pointer' }}>INSTAGRAM</span>
        <span style={{ cursor: 'pointer' }}>TWITTER</span>
        <span style={{ cursor: 'pointer' }}>BEHANCE</span>
      </div>
    </footer>
  );
};

export default Footer;