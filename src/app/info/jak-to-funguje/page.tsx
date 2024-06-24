import type { Metadata } from 'next'
import { PageMeta, RouteKeys } from "@/app/constants/contants";
import HowItWorksInfo from "./HowItWorksInfo";

export const metadata: Metadata = PageMeta[RouteKeys.HOWITWORKS];

export default function HowItWorks() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <div className="my-10 mb-32 w-full flex">
                <span className="text-4xl text-center font-semibold w-full text-neutral-800">Cílem je vytvořit portál k pronájmu a zamezit shánění přes &quot;známého&quot;</span>
            </div>
            <HowItWorksInfo />
        </main>
    );
}
