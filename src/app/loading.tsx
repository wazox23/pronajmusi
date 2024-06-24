import { ImSpinner8 } from "react-icons/im";

export default function Loading(){
    return (
        <main className="flex justify-center items-center w-full py-24 h-full min-h-screen bg-white overflow-hidden bg-opacity-10">
            <ImSpinner8 size={80} className="animate-spin text-primary"/>
        </main>
    )
}