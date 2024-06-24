import UserProfile from "./UserProfile"
import UserDemandsContainer from "./UserDemandsContainer"

export default function ProfilePage() {
    return (
        <main className="flex min-h-screen justify-start items-center w-full my-10 py-24 px-12 flex-col">
            <UserProfile />
            <div className="w-10/12 flex flex-col my-20">
                <UserDemandsContainer />
            </div>
        </main>
    )
}