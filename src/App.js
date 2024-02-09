import React from 'react';
import SendEther from './SendEther';

function App({ history }) {
  const handleRecieveClick = () => {
    history.push('/recieve');
  };

  return (
    <div className="container">
      <marquee>Simple Ethereum Transaction</marquee>
      <index/>
      <SendEther />
      <button onClick={handleRecieveClick}>Recieve</button>
    </div>
  );
}

export default App;