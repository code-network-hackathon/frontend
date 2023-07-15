"use client";

import FilterMenu from "@/components/webVersion/Filtermenu";
import NavBar from "@/components/webVersion/NavBar";
import ProductGridFreq from "@/components/webVersion/ProductGridFreq";

export default function Home(){
    return(
        <div className="flex flex-wrap">
            <NavBar/>
            <FilterMenu/>
            <div className="w-1/5"/>
            <div className="w-4/5">
                <ProductGridFreq/>
            </div>
        </div>
        
    )
}