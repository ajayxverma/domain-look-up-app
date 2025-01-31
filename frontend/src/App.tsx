import { useState } from 'react';
import './App.css';
import Results from './assets/components/Results';
import LookupForm from './assets/components/LookUp';

function App() {
  const [data, setData] = useState<any>(null);

  return (
    <>
      <LookupForm onResult={setData} />
      <Results data={data} />
    </>
  );
}

export default App;
