import AddPageSessionWrapper from "./AddPageSessionWrapper";
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.ADDAD];

export default function AddOffer() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <AddPageSessionWrapper />
        </main>
    )
}