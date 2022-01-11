import { useEffect, useState } from 'react';

import TrendItem from '../components/TrendItem';
import { getTrending } from '../api';

function Trending() {
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    (async function () {
      const breeds = await getTrending(10);
      setBreeds(breeds);
    })();
  }, []);

  if (!breeds) return <div>Loading...</div>;

  const renderBreeds = () => {
    if (!breeds) return null;
    return breeds.map((breed, index) => {
      return <TrendItem key={index} breed={breed} index={index} />;
    });
  };

  return (
    <div className="trending">
      <main>
        <h2 style={{ fontWeight: 700 }}>Top 10 most searched breeds</h2>
        <div className="trending__trend-list">{renderBreeds()}</div>
      </main>
    </div>
  );
}

export default Trending;
