import { useState } from 'react';
import './App.css';
import Results from './assets/components/Results';
import LookupForm from './assets/components/LookUp';
import { SearchType } from './utils/constants';

function App() {
  const [result, setResult] = useState<any>(null);
  const [searchType, setSearchType] = useState<SearchType | null>(null);

  const handleResult = (data: any, searchType: SearchType) => {
    setResult(data);
    setSearchType(searchType);
  };

  return (
    <div>
      <LookupForm onResult={handleResult} />
      {result && searchType && <Results data={result} searchType={searchType} />}
    </div>
  );
}

export default App;
