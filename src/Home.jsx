import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/form');
    }, 120000); 
  }, [history]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'white',
      margin: 0,
      fontFamily: 'Arial, sans-serif '
    }}>
      <h1 style={{color: '#333'}}></h1>
    </div>
  );
};

export default Home;