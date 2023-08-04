import { useState, useCallback } from 'react';

// Replace 'your_api_endpoint' with the actual URL of your REST API
const API_ENDPOINT = 'http://localhost:3001';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  console.log('useApi is called or re-rendered'); // This will log every time the hook is called or its parent component re-renders

  const getData = useCallback(async (url = '/') => {
    console.log(`Fetching data from ${url}`);
    
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_ENDPOINT}/${url}`, {
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
      console.log(`Data fetched successfully from ${url}`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${url}`, error);
      setError((error as Error).message);
      setLoading(false);
      return null;
    }
  }, []);

  const postData = useCallback(async (url = '/', data: any) => {
    console.log(`Posting data to ${url}`, data);
    
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_ENDPOINT}/${url}`, {
        credentials: 'include',
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
      console.log(`Data posted successfully to ${url}`, responseData);
      return responseData;
    } catch (error) {
      console.error(`Error posting data to ${url}`, error);
      setError((error as Error).message);
      setLoading(false);
      return null;
    }
  }, []);

  return { loading, error, getData, postData };
};

export default useApi;
