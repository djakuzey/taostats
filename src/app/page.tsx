import HomeWidget, { HomeWidgetProps } from "@/components/home-widget";
import Image from "next/image";
import {BoxArrowUp} from "@/icons";

const widgets: HomeWidgetProps[] = [
  {
    label: "Market Cap",
    value: "$3.85b",
  },
  {
    label: "24hr Volume",
    value: "$27.97m",
  },
  {
    label: "Total Supply",
    value: "21,000,000τ",
  },
  {
    label: "Validating APY",
    value: "19.39%",
  },
  {
    label: "Staking APY",
    value: "15.9%",
  },
  {
    label: "Circulating Supply",
    value: "6,246,404τ",
  },
  {
    label: "Finalised Blocks",
    value: "2,365,427",
  },
  {
    label: "Signed Extrinsics",
    value: "2,365,427",
  },
  {
    label: "Total Accounts",
    value: "93,741",
  },
  {
    label: "Transfers",
    value: "286,239",
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex justify-between w-full max-w-[1600px] mx-auto mt-28 px-6">
        <div className="flex flex-col">
          <div className="flex mb-3">
            <Image
              src="/logo-small.svg"
              alt="small logo"
              width={18}
              height={19}
              priority
              className="mr-4"
            />
            <span className="text-secondaryText text-[20px]">
              Bittensor price (τao)
            </span>
          </div>
          <div className="mb-3 text-[64px] text-white">
            $601.24
          </div>
          <div className="text-green flex items-center ml-3 mr-8 text-[16px]">
            <BoxArrowUp width={18} height={18} className="mr-1.5"/>
            24.43%
          </div>
        </div>

        <div className="grid grid-cols-5 gap-x-10 gap-y-5 mt-5">
          {widgets.map(({label, value}, index) => (
            <HomeWidget label={label} value={value} key={index}/>
          ))}
        </div>
      </div>

    </main>
  );
}
