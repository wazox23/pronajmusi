"use client"
import { useSearchParams } from "next/navigation"

export default function SearchQueryDisplay(){
    const searchParams = useSearchParams();
    const queryString = searchParams.get("dotaz");
    return (
        <div>
            {
                (queryString && queryString !== "") && 
                <div className="my-4 text-neutral-700 line-clamp-1">
                    <span className="italic">Výsledky pro dotaz: <span className="font-semibold">{queryString}</span></span>
                </div>
            }
        </div>
    )
}