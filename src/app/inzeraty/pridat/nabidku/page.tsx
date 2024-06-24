import AddOfferForm from "./AddOfferForm"
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.OFFER];

export default function AddOffer() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <div className="w-10/12 flex flex-col">
                <h1 className="font-semibold text-4xl">Přidat nabídku</h1>
                <AddOfferForm />

                <div className="mt-8 flex flex-col">
                <div className="mb-4 flex flex-col">
                    <h1 className="font-semibold text-3xl">Jak to funguje ?</h1>
                    <p className="mt-5 text-slate-500">
                    Nabídka znamená, že máte něco, co můžete nabídnout k pronájmu nebo půjčení.
                    <br />
                    Jak to funguje? Když máte něco k pronájmu, jednoduše přidáte nabídku. Může to být vše od věcí,
                    které vlastníte, po dovednosti nebo služby, které můžete poskytnout.
                    <br />
                    Délka trvání: Nabídky jsou také aktivní po dobu jednoho měsíce a po uplynutí této lhůty jsou automaticky odstraněny.
                    </p>
                </div>
                </div>
            </div>
        </main>
    )
}
