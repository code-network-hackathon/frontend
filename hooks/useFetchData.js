import { useState } from "react";

const useFetchData = (url, options) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getDatas = async () => {
        const response = await fetch(url, options);
        const data = await response.json();
        setLoading(false);
        setData(data);
        console.log(data)
    }
    if(loading) getDatas();
    return {
        loading, data
    }
}

export default useFetchData;