"use client";

import useFetchData from "@/hooks/useFetchData";

export default function TestingPage() {
    const {loading, data, error} = useFetchData("https://dummyjson.com/prod")
    console.log(loading)
    return (
        loading ? <div>Loading...</div> : <div>{error}</div>
    )
}
