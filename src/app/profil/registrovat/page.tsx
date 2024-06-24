import RegisterForm from './RegisterForm';
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.REGISTER];

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-6 py-24 flex-col">
            <RegisterForm />
        </main>
    )
}