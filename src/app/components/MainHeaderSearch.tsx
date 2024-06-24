"use client"
import { LocationKeys, Categories, AdTypes, AdTypesArray, Locations, MainCategoriesSelect, getCategory, getLocation, getType } from "../constants/contants";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MainHeaderSearch(){
    const filterAds = () => {
        let params = new URLSearchParams({
            dotaz: searchString,
            kraj: selectedLocation,
            kategorie: selectedCategory,
            typ: selectedType,
            strana: "1"
        })
        return params;
    }
    const searchParams = useSearchParams();
    const queryString = searchParams.get("dotaz");
    const queryLocation = searchParams.get("kraj");
    const queryCategory = searchParams.get("kategorie");
    const queryType = searchParams.get("typ");
    const [selectedLocation, setSelectedLocation] = useState(LocationKeys.ALL);
    const [selectedCategory, setSelectedCategory] = useState(Categories.ALL);
    const [selectedType, setSelectedType] = useState(AdTypes.ALL);
    const [searchString, setSearchString] = useState("");
    const [shownDrop, setShownDrop] = useState(false);

    useEffect(() => {
        const getParamsFromSearch = () => {
            setSelectedLocation(queryLocation && queryLocation !== "" ? queryLocation as LocationKeys : LocationKeys.ALL);
            setSelectedCategory(queryCategory && queryCategory !== "" ? queryCategory as Categories : Categories.ALL);
            setSelectedType(queryType && queryType !== "" ? queryType as AdTypes : AdTypes.ALL);
            setSearchString(queryString || "");
        }
    
        getParamsFromSearch();
    }, [queryLocation, queryCategory, queryString, queryType]);
    
    return (
        <div className="collapse bg-white shadow border" onClick={() => setShownDrop(!shownDrop)}>
            <input type="checkbox" checked={shownDrop} onChange={(e) => setShownDrop(e.target.checked)}/> 
            <div className="collapse-title font-medium px-4">
                <div className="flex items-center justify-between">
                <div>
                    <span>{queryCategory && queryCategory !== "" ? `${getCategory(queryCategory as Categories)} /` : `${getCategory(Categories.ALL as Categories)} /`}</span>
                    <span className="mx-2">{queryLocation && queryLocation !== "" ? `${getLocation(queryLocation as LocationKeys)} /` : `${getLocation(LocationKeys.ALL as LocationKeys)} /`}</span>
                    <span>{queryType && queryType !== "" ? `${getType(queryType as AdTypes)}` : `${getType(AdTypes.ALL as AdTypes)}`}</span>
                </div>
                <div>
                    <CiSearch size={25} />
                </div>
                </div>
            </div>
            <div className="collapse-content"> 
                <div>
                    <input onClick={(e) => e.stopPropagation()} value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" placeholder="Sháním..." className="input input-bordered w-full focus:outline-none focus:ring-indigo-500 focus:ring-1" />
                </div>
                <div className="flex items-center mt-2 flex-wrap">
                    <select onClick={(e) => e.stopPropagation()} value={selectedType} onChange={e => setSelectedType(e.target.value as AdTypes)} className="pl-4 py-2 px-4 w-full mb-2 md:mb-0 md:w-fit rounded-md input input-bordered focus:outline-none focus:ring-indigo-500 focus:ring-1 cursor-pointer">
                        {AdTypesArray.map((location, index) => (
                            <option
                            key={index}
                            value={location.value}
                            className="
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                py-14 
                                rounded-xl 
                                h-24 
                                border-2 
                                duration-100
                                cursor-pointer
                                shadow-lg"
                            >
                            {location.name}
                            </option>
                        ))}
                    </select>
                    <select onClick={(e) => e.stopPropagation()} value={selectedLocation} onChange={e => setSelectedLocation(e.target.value as LocationKeys)} className="pl-4 md:mx-2 w-full mb-2 md:mb-0 md:w-fit py-2 px-4 rounded-md input input-bordered focus:outline-none focus:ring-indigo-500 focus:ring-1 cursor-pointer">
                        {Locations.map((location, index) => (
                            <option
                            key={index}
                            value={location.value}
                            className="
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                py-14 
                                rounded-xl 
                                h-24 
                                border-2 
                                duration-100
                                cursor-pointer
                                shadow-lg"
                            >
                            {location.name}
                            </option>
                        ))}
                    </select>
                    <select onClick={(e) => e.stopPropagation()} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value as Categories)} className="pl-4 py-2 px-4 w-full mb-2 md:mb-0 md:w-fit rounded-md input input-bordered focus:outline-none focus:ring-indigo-500 focus:ring-1 cursor-pointer">
                        {MainCategoriesSelect.map((category, index) => (
                            <option
                            key={index}
                            value={category.key}
                            className="
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                py-14 
                                rounded-xl 
                                h-24 
                                border-2 
                                duration-100
                                cursor-pointer
                                shadow-lg"
                            >
                            {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end w-full mt-4">
                    <Link href={`?${filterAds()}`} onClick={() => setShownDrop(false)}>
                        <button className="btn btn-sm btn-primary text-white font-normal">Vyhledat</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}