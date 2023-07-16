"use client";

import usePageBottom from "@/hooks/usePageBottom";
import { useEffect, useState } from "react";
import Card from "@/components/webVersion/Card";
import products from "@/const/products";
import { Suspense } from "react";
import CardWithSaleTimes from "../CardWithSaleTimes";
import { useSelector } from 'react-redux'
import useFetchData from "@/hooks/useFetchData";
import LoadingCard from "../LoadingCard";

export default function ProductGrid(){
    const data = useFetchData("https://aggregator-api.onrender.com/products");
    const filters = useSelector(state => state.filter); 
    return(
        <div className="flex flex-wrap overflow-hidden">
        {
            data.data.map((product, index) => {
                return(
                    data.loading ?
                    (product.itemName.toLowerCase().includes(filters.search.toLowerCase()))?
                        <Card key={index} product={product}/>:<div/>
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