import Link from "next/link"

export default function FloatingAddButton(){
    return (
        <div className="md:hidden fixed bottom-0 right-0 p-4">
            <Link href={'/inzeraty/pridat'}>
                <button className="btn btn-primary font-normal text-white shadow-xl">Přidat inzerát</button>
            </Link>
        </div>
    )
}