import AddShopForm from "./AddShopForm"
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.SHOP];

export default function AddShop() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <div className="w-10/12 flex flex-col">
                <h1 className="font-semibold text-4xl">Přidat stálou nabídku</h1>
                <AddShopForm />

                <div className="mt-8 flex flex-col">
                <div className="mb-4 flex flex-col">
                    <h1 className="font-semibold text-3xl">Jak to funguje ?</h1>
                    <p className="mt-5 text-slate-500">
                    Stálá nabídka je kategorie pro ty, kteří nabízejí dlouhodobé možnosti pronájmu.
                    <br />
                    Jak to funguje? Pokud poskytujete službu nebo věc k pronájmu na delší dobu, můžete přidat stálou nabídku.
                    Tato nabídka zůstává aktivní na naší platformě bez automatického odstranění po jednom měsíci.
                    </p>
                </div>
                </div>
            </div>
        </main>
    )
}
