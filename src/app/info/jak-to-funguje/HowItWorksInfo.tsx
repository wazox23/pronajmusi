"use client";

import IconComponent from "@/app/components/IconComponent";
import { AddIconKeys, AdTypes } from "@/app/constants/contants";
import { useRef } from "react";
import Link from "next/link";

export default function HowItWorksInfo(){
    const scrollToView = (key: AdTypes) => {
        switch (key) {
        case AdTypes.OFFER:
            if (!offerRef.current) return;
            window.scrollTo({
                top: offerRef.current.offsetTop - 120,
                behavior: "smooth",
            });
            break;
        case AdTypes.DEMAND:
            if (!demandRef.current) return;
            window.scrollTo({
                top: demandRef.current.offsetTop - 120,
                behavior: "smooth",
            });
            break;
        case AdTypes.SHOP:
            if (!shopRef.current) return;
            window.scrollTo({
                top: shopRef.current.offsetTop - 120,
                behavior: "smooth",
            });
            break;
        default:
            break;
        }
    };

    const demandRef: any = useRef(null);
    const offerRef: any = useRef(null);
    const shopRef: any = useRef(null);
    
    return (
        <div className="w-11/12 flex flex-col">
            <div className="mb-4 flex flex-col">
                <h1 className="font-semibold text-3xl">Jak to vlastně funguje ?</h1>
                <p className="mt-5 text-slate-500">
                    Je to jednoduché! Chcete-li si něco pronajmout, můžete přidat poptávku a
                    naše platforma vám pomůže najít odpovídající nabídky od našich spolehlivých
                    poskytovatelů. Naopak, pokud máte něco k pronájmu, můžete jednoduše přidat
                    nabídku a dostat se do kontaktu s lidmi, kteří hledají právě to, co nabízíte.
                    Pro ty, kteří hledají stabilní nabídky, jsme připravili kategorii Stálé nabídky,
                    kde mohou nalézt dlouhodobé možnosti pronájmu. Na PronajmuSi.cz spojujeme poptávky,
                    nabídky a stálé nabídky, abychom vám usnadnili hledání a nabízení
                    potřebných služeb a věcí.
                </p>
            </div>
            <div className="my-20 flex justify-center items-center w-full">
                <div
                    className={`border-2 shadow-xl cursor-pointer px-12 md:px-14 md:py-20 mx-1
                    border-black bg-white
                    rounded-lg hover:bg-indigo-800 hover:text-white hover:border-indigo-800 
                    duration-150  flex items-center justify-center flex-col
                    h-40 md:h-80 w-1/3 md:mx-4 mb-4 md:mb-0
                    `}
                    onClick={(e) => scrollToView(AdTypes.DEMAND)}
                >
                    <IconComponent iconKey={AddIconKeys.LIALIGHTBULB}/>
                    <div className="md:text-3xl md:mt-10 mt-2 text-center">Poptávku</div>
                </div>
                <div
                    className={`border-2 shadow-xl cursor-pointer px-12 md:px-14 md:py-20 mx-1
                    border-black bg-white
                    rounded-lg hover:bg-indigo-800 hover:text-white hover:border-indigo-800 
                    duration-150  flex items-center justify-center flex-col
                    h-40 md:h-80 w-1/3 md:mx-4 mb-4 md:mb-0
                    `}
                    onClick={(e) => scrollToView(AdTypes.OFFER)}
                >
                    <IconComponent iconKey={AddIconKeys.BSTAG} />
                    <div className="md:text-3xl md:mt-10 mt-2 text-center">Nabídku</div>
                </div>

                <div
                    className={`border-2 shadow-xl cursor-pointer px-12 md:px-14 md:py-20 mx-1
                    border-black bg-white
                    rounded-lg hover:bg-indigo-800 hover:text-white hover:border-indigo-800 
                    duration-150  flex items-center justify-center flex-col
                    h-40 md:h-80 w-1/3 md:mx-4 mb-4 md:mb-0
                    `}
                    onClick={(e) => scrollToView(AdTypes.SHOP)}
                >
                    <IconComponent iconKey={AddIconKeys.AIOUTLINESHOP} />
                    <div className="md:text-3xl text-center mt-2 md:mt-10 text-cente">Stálou nabídku</div>
                </div>
            </div>
            <div className="my-10" ref={demandRef}>
                <h1 className="font-semibold text-3xl">Poptávka</h1>
                <p className="text-slate-500 my-5">
                    Poptávka je váš požadavek na něco konkrétního, co potřebujete pronajmout nebo získat.
                    <br />
                    Jak to funguje? Chcete-li něco najít, jednoduše přidáte poptávku na naši platformu. Může to být cokoliv
                    od bytu po nářadí nebo specifickou službu.
                    <br />
                    Délka trvání: Poptávky jsou aktivní po dobu jednoho měsíce. Po uplynutí tohoto období jsou automaticky odstraněny z platformy.
                </p>
            </div>
            <div className="my-10" ref={offerRef}>
                <h1 className="font-semibold text-3xl">Nabídka</h1>
                <p className="text-slate-500 my-5">
                    Nabídka znamená, že máte něco, co můžete nabídnout k pronájmu nebo půjčení.
                    <br />
                    Jak to funguje? Když máte něco k pronájmu, jednoduše přidáte nabídku. Může to být vše od věcí,
                    které vlastníte, po dovednosti nebo služby, které můžete poskytnout.
                    <br />
                    Délka trvání: Nabídky jsou také aktivní po dobu jednoho měsíce a po uplynutí této lhůty jsou automaticky odstraněny.
                </p>
            </div>
            <div className="my-10" ref={shopRef}>
                <h1 className="font-semibold text-3xl">Stálá nabídka</h1>
                <p className="text-slate-500 my-5">
                    Stálá nabídka je kategorie pro ty, kteří nabízejí dlouhodobé možnosti pronájmu.
                    <br />
                    Jak to funguje? Pokud poskytujete službu nebo věc k pronájmu na delší dobu, můžete přidat stálou nabídku. Tato nabídka zůstává aktivní na naší platformě bez automatického odstranění po jednom měsíci.
                </p>
            </div>
            <div className="my-20 flex flex-col md:flex-row justify-end items-center">
                <h1 className="font-semibold text-2xl mb-4 md:mb-0 md:mr-8">Máte ještě dotazy ?</h1>
                <Link href={"/kontakt"}>
                    <button  className="text-white bg-black px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150">
                    Kontaktujte nás
                    </button>
                </Link>
            </div>
        </div>
    )
}