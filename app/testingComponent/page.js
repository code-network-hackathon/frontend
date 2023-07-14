"use client";

import useFetchData from "@/hooks/useFetchData";

export default function TestingPage() {
    const {loading, data} = useFetchData("https://dummyjson.com/products/1")
    console.log(loading)
    return (
        loading ? <div>Loading...</div> : <div>{data[0]}</div>
    )
}
