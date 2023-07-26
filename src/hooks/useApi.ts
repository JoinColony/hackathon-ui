import { useState, useCallback } from 'react';

// Replace 'your_api_endpoint' with the actual URL of your REST API
const API_ENDPOINT = 'https://api.example.com/your_api_endpoint';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
      return null;
    }
  }, []);

  const postData = useCallback(async (data: any) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to post data to the API');
      }

      const responseData = await response.json();
      setLoading(false);
      return responseData;
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
      return null;
    }
  }, []);

  return { loading, error, getData, postData };
};

export default useApi;
