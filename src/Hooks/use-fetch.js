import { useState, useEffect } from 'react';

const useFetch = ( url, options={} ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
          try{
            const response = await fetch(url, options);
            const responseData = await response.json();
            setData(responseData);
          }
          catch(error){
            setError(error.message);
          }
          finally{
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, [url, options]);

  return {data, isLoading, error};
}

export default useFetch;
