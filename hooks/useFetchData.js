import { useState } from "react";

const useFetchData = (url, options) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const getDatas = async () => {
        const response = await fetch(url, options);
        if (response.ok){
            const data = await response.json();
            setLoading(false);
            setData(data);
        }
        else{
            setLoading(false);
            setError(response.statusText);
        }  
    }
    if(loading) getDatas();
    return {
        loading, data, error
    }
}

export default useFetchData;