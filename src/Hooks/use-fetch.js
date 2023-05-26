import { useState, useEffect } from 'react';

const useFetch = ( url ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
          try{
            const response = await fetch(url);
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
      }, [url]);

  return {data, isLoading, error};
}

export default useFetch;
