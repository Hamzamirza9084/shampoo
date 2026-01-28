import React from 'react';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 3rem',
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        letterSpacing: '2px', 
        color: '#fff',
        textTransform: 'uppercase' 
      }}>
        SHAMPOO
      </div>
      
      <nav>
        <ul style={{ 
          display: 'flex', 
          gap: '2rem', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0 
        }}>
          {['Gallery', 'About', 'Contact',].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;