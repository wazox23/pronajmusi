import AddDemandForm from "./AddDemandForm";
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.DEMAND];

export default function AddDemand() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <div className="w-10/12 flex flex-col">
                <h1 className="font-semibold text-4xl">Přidat poptávku</h1>
                <AddDemandForm />

                <div className="mt-8 flex flex-col">
                <div className="mb-4 flex flex-col">
                    <h1 className="font-semibold text-3xl">Jak to funguje ?</h1>
                    <p className="mt-5 text-slate-500">
                    Poptávka je váš požadavek na něco konkrétního, co potřebujete pronajmout nebo získat.
                    <br />
                    Jak to funguje? Chcete-li něco najít, jednoduše přidáte poptávku na naši platformu. Může to být cokoliv
                    od bytu po nářadí nebo specifickou službu.
                    <br />
                    Délka trvání: Poptávky jsou aktivní po dobu jednoho měsíce. Po uplynutí tohoto období jsou automaticky odstraněny z platformy.
                    </p>
                </div>
                </div>
            </div>
        </main>
    )
}
