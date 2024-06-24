'use client'

import { useState } from 'react';
import Link from 'next/link';
import IconComponent from '@/app/components/IconComponent';
import { AddIconKeys, AdTypes } from "../../constants/contants"

export default function AddOptions() {
    const selectType = (type: AdTypes) => {
        setSelectedType(type);
    };

    const getClass = (type: AdTypes) => {
        if (type === selectedType) {
        return `bg-indigo-700 text-white border-indigo-700`;
        }

        return 'bg-white text-black border-black';
    }

    const getLinkPath = () => {
        if (selectedType === AdTypes.DEMAND) {
        return `/inzeraty/pridat/poptavku`;
        } else if (selectedType === AdTypes.OFFER) {
        return `/inzeraty/pridat/nabidku`;
        }

        return `/inzeraty/pridat/stalou-nabidku`;
    }

    const [selectedType, setSelectedType] = useState(AdTypes.DEMAND);


    return (
        <div>
            <div className="flex flex-col md:flex-row items-center my-10 justify-between">
                <div
                    className={
                        `border-2 shadow-xl cursor-pointer px-14 py-20 
                        rounded-lg hover:bg-indigo-800 hover:text-white hover:border-indigo-800 
                        duration-150 w-full md:w-1/3 mb-2 md:mb-0 flex items-center justify-center flex-col
                        h-80
                        ${getClass(AdTypes.DEMAND)}
                        `
                    }
                    onClick={() => selectType(AdTypes.DEMAND)}
                >
                    <IconComponent iconKey={AddIconKeys.LIALIGHTBULB} />
                    <div className="text-3xl mt-10 text-center">Poptávku</div>
                </div>
                <div
                    className={
                        `border-2 shadow-xl cursor-pointer px-14 py-20  
                        rounded-lg hover:bg-indigo-800 hover:text-white hover:border-indigo-800 
                        duration-150 w-full md:w-1/3 mb-2 md:mb-0 md:mx-4 flex items-center justify-center flex-col
                        h-80
                        ${getClass(AdTypes.OFFER)}
                        `
                    }
                    onClick={() => selectType(AdTypes.OFFER)}
                >
                    <IconComponent iconKey={AddIconKeys.BSTAG} />
                    <div className="text-3xl mt-10 text-center">Nabídku</div>
                </div>
                <div
                    className={
                        `border-2 shadow-xl cursor-pointer px-14 py-20
                        rounded-lg hover:bg-indigo-800 hover:text-white hover:border-indigo-800 
                        duration-150 w-full md:w-1/3 mb-2 md:mb-0 flex items-center justify-center flex-col
                        h-80
                        ${getClass(AdTypes.SHOP)}
                        `
                    }
                    onClick={() => selectType(AdTypes.SHOP)}
                >
                    <IconComponent iconKey={AddIconKeys.AIOUTLINESHOP} />
                    <div className="text-3xl mt-10 text-center">Stálou nabídku</div>
                </div>
            </div>
            <div className="w-full flex justify-center md:justify-end">
                <Link href={getLinkPath()}>
                <button  className="text-white bg-black px-8 py-2 ml-2 rounded hover:bg-indigo-700 duration-150">Pokračovat</button>
                </Link>
            </div>
        </div>
    )
}
