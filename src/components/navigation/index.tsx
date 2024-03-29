import Image from "next/image";

import { Input } from "@/components/ui/input";
import NavigationItem, { NavigationItemProps } from "@/components/navigation/navigation-item";

const navigationItems: NavigationItemProps[] = [
  {
    text: "Subnets",
    link: "/subnets",
    // options: [], // TODO: handle options if there are any
  },
  {
    text: "Validators",
    link: "/validators",
    // options: [], // TODO: handle options if there are any
  },
  {
    text: "Developers",
    link: "/developers",
    // options: [], // TODO: handle options if there are any
  },
  {
    text: "Resources",
    link: "/resources",
    // options: [], // TODO: handle options if there are any
  },
];

const Navigation = () => {
  return (
    <div className="flex items-center px-7 mt-7">
      <Image
        src="/logo.svg"
        alt="logo"
        className="mr-16 ml-[-10px]"
        width={131}
        height={40}
        priority
      />
      <Input
        className="mr-auto max-w-[375px]"
      />
      <div className="flex justify-between max-w-[500px] w-full mr-20">
        {navigationItems.map(({ text, link }, index) => (
          <NavigationItem
            key={index}
            text={text}
            link={link}
          />
        ))}
      </div>

      <Input
        className="max-w-[128px]"
      />
    </div>
  );
};

export default Navigation;
