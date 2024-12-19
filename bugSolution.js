```javascript
// pages/api/data.js
// This remains the same as the original bug code
export default function handler(req, res) {
  // Simulate an asynchronous operation
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Data from API' });
    }, 500);
  });

  promise.then((data) => {
    res.status(200).json(data);
  }).catch((error) => {
    res.status(500).json({ error: 'Failed to fetch data' });
  });
}
```
```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
```