import './App.css';
import Card from './components/Card';
import LoadingBar from 'react-top-loading-bar'
import {useState} from 'react'

function App() {
  const [progress, setProgress] = useState(10)

  return (
    <>
      <LoadingBar
        color='white'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="CardContainer">
        <Card setProgress={setProgress} />
        
      </div>
    
    </>
  );
}

export default App;
