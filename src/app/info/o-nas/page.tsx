import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.ABOUT];

export default function About() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <div className="w-11/12 md:w-10/12 flex flex-col">
                <div className="mb-4 flex flex-col">
                    <h1 className="font-semibold text-3xl">O nás</h1>
                    <p className="mt-5 text-slate-500 px-2">O Nás - PronajmuSi.cz: Spolehlivé Propojení Pro Snadné Pronájmy</p>
                </div>
                <div className="my-10">
                    <p className="text-slate-500 px-2">
                    Vítejte na PronajmuSi.cz, přední online platformě pro snadné a spolehlivé pronájmy. Naše poslání spočívá v tom, abychom vytvořili prostředí, ve kterém se setkávají lidé hledající a nabízející pronájem, a to vše s důrazem na jednoduchost, efektivitu a spokojenost našich uživatelů.
                    </p>
                </div>
                <div className="my-10">
                    <h2 className="mb-8 text-3xl font-semibold">Naše Vize</h2>
                    <p className="text-slate-500 px-2">
                    Jsme hrdí na to, že nabízíme komplexní řešení pro ty, kteří chtějí snadno a rychle pronajmout nebo nabídnout své služby a věci. Naše vize spočívá v tom, aby každý uživatel naší platformy mohl dosáhnout svých cílů s minimálním úsilím a maximálním úspěchem.
                    </p>
                </div>
                <div className="my-10">
                    <h2 className="mb-8 text-3xl font-semibold">Jak To Funguje</h2>
                    <p className="text-slate-500 px-2">
                    S jednoduchým přidáváním poptávek, nabídek nebo stálých nabídek na PronajmuSi.cz můžete rychle a efektivně komunikovat s potenciálními partnery. Naše platforma vám umožňuje snadno spravovat vaše inzeráty, získávat relevantní nabídky a usnadnit proces pronájmu.
                    </p>
                </div>
                <div className="my-10">
                    <h2 className="mb-8 text-3xl font-semibold">Proč Vybrat PronajmuSi.cz</h2>
                    <p className="text-slate-500 px-2">
                    S důrazem na bezpečnost, spolehlivost a rychlost vám PronajmuSi.cz poskytuje ideální prostředí pro úspěšné pronájmy. Naše komunita je tvořena lidmi, kteří chtějí efektivně sdílet své možnosti pronájmu a najít to, co potřebují.
                    </p>
                </div>
                <div className="my-10">
                    <p className="text-slate-500 px-2">
                    Připojte se k PronajmuSi.cz a zažijte nový standard v oblasti pronájmů. Vytvořte si účet ještě dnes a objevte, jak můžeme usnadnit váš pronájem!
                    </p>
                </div>
                <div className="my-14">
                    <p className="text-slate-500 px-2">
                    Pronajmusi.cz je inzertní server provozovaný fyzickou osobou - Vojtěch Kordač, Lány 995, Napajedla, 763 61, IČO 13960041.
                    </p>
                </div>
            </div>
        </main>
    )
}  