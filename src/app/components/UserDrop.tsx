import { FaUser } from "react-icons/fa"
import UserDropContent from "./UserDropContent"

export default function UserDrop(){
    return (
        <div className="dropdown dropdown-end ml-2">
            <label tabIndex={0} className="btn btn-circle avatar bg-white hover:bg-white shadow">
                <button className="w-10 rounded-full flex items-center justify-center">
                    <FaUser size={20} className="text-black"/>
                </button>
            </label>
            <UserDropContent />
        </div>
    )
}