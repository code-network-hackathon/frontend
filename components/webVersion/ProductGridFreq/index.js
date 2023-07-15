"use client";

import usePageBottom from "@/hooks/usePageBottom";
import { useEffect, useState } from "react";
import Card from "@/components/webVersion/Card";
import products from "@/const/products";
import { Suspense } from "react";
import CardWithSaleTimes from "../CardWithSaleTimes";

export default function ProductGridFreq(){
    const [data, setData] = useState([]);
    const [additionaldata, setAdditionalData] = useState([]);
    const bottomOfPage = usePageBottom();
    console.log(products)
    return(
        <div className="flex flex-wrap overflow-hidden">
        {
            products.map((product, index) => {
                return(
                    <CardWithSaleTimes product={product} key={index}/>
                )
            })
        }
        </div>
    )
}