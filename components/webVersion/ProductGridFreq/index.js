"use client";

import CardWithSaleTimes from "../CardWithSaleTimes";
import { useSelector } from 'react-redux'
import useFetchData from "@/hooks/useFetchData";
import LoadingCard from "../LoadingCard";

export default function ProductGridFreq(){
    const data = useFetchData("https://aggregator-api.onrender.com/products");
    const filters = useSelector(state => state.filter); 
    return(
        <div className="flex flex-wrap overflow-hidden">
        {
            data.data.map((product, index) => {
                return(
                    data.loading ?
                    (product.itemName.toLowerCase().includes(filters.search.toLowerCase()))?
                        <CardWithSaleTimes key={index} product={product}/>:<div/>
                    :<LoadingCard key={index}/>
                    
                    
                )
            })
        }
            <div className="w-full h-16 flex justify-center text-align-center font-mono">
                There's no products left :(
            </div>
        </div>
    )
}