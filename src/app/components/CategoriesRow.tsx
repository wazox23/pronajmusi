'use client'

import IconCustom from "./IconCustom";
import { useSearchParams } from "next/navigation";
import { MainCategories, getUsedParams, Categories } from "../constants/contants";
import Link from "next/link";

export default function CategoriesRow(){
    const getNewParams = (cat: Categories) => {
        let params = getUsedParams(searchParams);

        params.kategorie = cat;

        return new URLSearchParams(params)
    }

    const getCatClass = (cat: Categories) =>{
        let params = getUsedParams(searchParams);

        if((!params.kategorie || params.kategorie === "") && cat === Categories.ALL){
            return "border-indigo-700 text-indigo-700";
        }

        if(params.kategorie === cat){
            return "border-indigo-700 text-indigo-700";
        } else {
            return "border-transparent text-black";
        }
    }

    const searchParams = useSearchParams();

    return (
        <div className="flex items-center justify-between w-full overflow-x-auto">
            {MainCategories.map((cat, index) => (
                <Link key={index} href={`?${getNewParams(cat.key)}`}>
                    <div
                        className={`
                            flex 
                            flex-col 
                            items-center 
                            justify-center
                            h-20 
                            w-full
                            border-b-2
                            px-6
                            ${getCatClass(cat.key)} 
                            duration-150
                            cursor-pointer
                            hover:border-indigo-700
                            hover:text-indigo-700
                        `}
                    >
                        <div className="mb-2">
                            <IconCustom size={25} iconKey={cat.key} />
                        </div>
                        <div >{cat.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}