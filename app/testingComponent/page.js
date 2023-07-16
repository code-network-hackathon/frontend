"use client";

import FilterMenu from "@/components/webVersion/Filtermenu";
import NavBar from "@/components/webVersion/NavBar";
import ProductGrid from "@/components/webVersion/ProductGrid";
import useFetchData from "@/hooks/useFetchData";

export default function TestingPage() {
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
