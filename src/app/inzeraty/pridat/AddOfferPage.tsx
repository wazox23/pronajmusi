import AddOptions from './AddOptions';
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.ADDAD];

export default function AddOfferPage() {
    return (
        <div className="w-10/12 flex flex-col">
            <div className="w-full">
                <h1 className="font-semibold text-4xl">Chci přidat..</h1>
            </div>

            <AddOptions />

            <div className="my-20 flex flex-col">
                <h1 className="font-semibold text-4xl">Jaký je mezitím rozdíl?</h1>

                <div className="mt-20">
                    <h1 className="font-semibold text-2xl">Poptávka</h1>
                    <p className="mt-5 text-slate-500">
                        Poptávka je váš požadavek na něco konkrétního, co potřebujete pronajmout nebo získat.
                        <br />
                        Jak to funguje? Chcete-li něco najít, jednoduše přidáte poptávku na naši platformu. Může to být cokoliv
                        od bytu po nářadí nebo specifickou službu.
                        <br />
                        Délka trvání: Poptávky jsou aktivní po dobu jednoho měsíce. Po uplynutí tohoto období jsou automaticky odstraněny z platformy.
                    </p>
                </div>

                <div className="mt-20">
                    <h1 className="font-semibold text-2xl">Nabídka</h1>
                    <p className="mt-5 text-slate-500">
                        Nabídka znamená, že máte něco, co můžete nabídnout k pronájmu nebo půjčení.
                        <br />
                        Jak to funguje? Když máte něco k pronájmu, jednoduše přidáte nabídku. Může to být vše od věcí,
                        které vlastníte, po dovednosti nebo služby, které můžete poskytnout.
                        <br />
                        Délka trvání: Nabídky jsou také aktivní po dobu jednoho měsíce a po uplynutí této lhůty jsou automaticky odstraněny.
                    </p>
                </div>

                <div className="mt-20">
                    <h1 className="font-semibold text-2xl">Stálá nabídka</h1>
                    <p className="mt-5 text-slate-500">
                        Stálá nabídka je kategorie pro ty, kteří nabízejí dlouhodobé možnosti pronájmu.
                        <br />
                        Jak to funguje? Pokud poskytujete službu nebo věc k pronájmu na delší dobu, můžete přidat stálou nabídku.
                        Tato nabídka zůstává aktivní na naší platformě bez automatického odstranění po jednom měsíci.
                    </p>
                </div>
            </div>
        </div>
    )
}

AddOfferPage.requireAuth = true;
