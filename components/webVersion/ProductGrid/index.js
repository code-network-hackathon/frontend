"use client";

import usePageBottom from "@/hooks/usePageBottom";
import { useEffect, useState } from "react";
import Card from "@/components/webVersion/Card";
import products from "@/const/products";

export default function ProductGrid(){
    const [data, setData] = useState([]);
    const [additionaldata, setAdditionalData] = useState([]);
    const bottomOfPage = usePageBottom();
    console.log(products)
    return(
        <div className="flex flex-wrap overflow-hidden">
        {
            products.map((product, index) => {
                return(
                    <Card key={index} product={product} />
                )
            })
        }
        </div>
    )
}