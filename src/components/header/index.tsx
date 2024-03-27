import Image from "next/image";
import { DollarSign } from "lucide-react";

import { ButtonImage } from "@/components/ui/button-image";
import { Stake, Corcel, BoxArrowUp } from "@/icons";

const index = () => {
  return (
    <div className="px-7 flex bg-black justify-between h-[48px] items-center">
      <div className="flex items-center">
        <Image
          src="/logo-small.svg"
          alt="small logo"
          width={11}
          height={12}
          priority
        />
        <div
          className="text-white text-[15px] font-medium ml-3"
        >
          $601.25
        </div>
        <div className="text-green flex items-center ml-3 mr-8">
          <BoxArrowUp width={12} height={12} className="mr-1.5"/>
          24.43%
        </div>

        <div className="text-[15px] text-white mr-8">
          <span className="text-secondaryText mr-4">
            Market Cap
          </span>
          $3.85b
        </div>
        <div className="text-[15px] text-white">
          <span className="text-secondaryText mr-4">
            24hr Volume
          </span>
          $27.97m
        </div>
      </div>
      <div className="flex gap-[10px]">
        <ButtonImage
          position="left"
          iconComponent={<Corcel/>}
        >
          Visit Corcel.io
        </ButtonImage>
        <ButtonImage
          position="left"
          iconComponent={<DollarSign width={17} widths={17}/>}
        >
          Buy
        </ButtonImage>
        <ButtonImage
          position="left"
          iconComponent={<Stake/>}
          variant="secondary"
        >
          Stake
        </ButtonImage>
      </div>
    </div>
  );
};

export default index;
