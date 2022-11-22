import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message)); 
  })

  return (
    <div className="App">
      <Header />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
