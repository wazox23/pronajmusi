import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <div className="w-11/12 md:w-10/12 flex flex-col">
                <div className="mb-4 flex flex-col">
                    <h1 className="font-semibold text-3xl">Kontaktujte nás</h1>
                    <p className="mt-5 text-slate-500">
                        Děkujeme, že jste navštívili PronajmuSi.cz! Jsme zde, abychom vám pomohli s
                        vašimi dotazy a připomínkami. Prosíme, vyplňte níže uvedený formulář a my se
                        vám co nejdříve ozveme. Vaše spokojenost je pro nás prioritou.
                    </p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
