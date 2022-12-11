import { useEffect, useState } from 'react';
import './App.css';
import Progressbar from './components/progressbar';

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(Math.random()*100);
    },3000);
    return () => {
      clearInterval(id);
    }
  }, []);
  return (
    <div className="App">
      <Progressbar value={progress}/>
    </div>
  );
}

export default App;
