import { ChevronDown } from "lucide-react";
import Link from "next/link";

export interface NavigationItemProps {
  text: string;
  link: string;
}
const NavigationItem = ({ text, link }: NavigationItemProps) => {
  return (
    <Link href={link} className="flex items-center text-white text-[16px]">
      <span className="">{text}</span>
      <ChevronDown width={20} height={20}/>
    </Link>
  )
}

export default NavigationItem;
