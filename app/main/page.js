"use client";

import FilterMenu from "@/components/webVersion/Filtermenu";
import ProductGrid from "@/components/webVersion/ProductGrid";
import NavBar from "@/components/webVersion/NavBar";

export default function Home(){
    return(
        <div className="flex flex-wrap">
            <NavBar/>
            <FilterMenu/>
            <div className="w-1/5"/>
            <div className="w-4/5">
                <ProductGrid/>
            </div>
        </div>
        
    )
}