import LoginForm from "./LoginForm";
import { PageMeta, RouteKeys } from "@/app/constants/contants";

export const metadata = PageMeta[RouteKeys.LOGIN];

export default function LoginPage() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-6 py-24 flex-col">
            <LoginForm />                                              
        </main>
    )
}