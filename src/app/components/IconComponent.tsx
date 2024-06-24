import { LiaLightbulb } from "react-icons/lia"
import { AiOutlineShop } from "react-icons/ai"
import { BsTag } from "react-icons/bs"
import { AddIconKeys } from "../constants/contants";

export default function IconComponent({ iconKey }: any) {
    const iconMapping: Record<AddIconKeys, any> = {
        [AddIconKeys.LIALIGHTBULB]: <LiaLightbulb />,
        [AddIconKeys.AIOUTLINESHOP]: <AiOutlineShop />,
        [AddIconKeys.BSTAG]: <BsTag />,
    };

    const selectedIcon = iconMapping[iconKey as AddIconKeys] || null;

    return (
        <div className="text-4xl md:text-8xl">{selectedIcon}</div>
    )
}