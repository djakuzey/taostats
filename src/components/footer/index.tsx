import Image from "next/image";
import Link from "next/link";

import GradientBackgroundFooter from '@/components/gradient-background';

const Footer = () => {
  return (
    <div className="mx-11 flex flex-col pt-16 border-t h-[556px] relative p-10">
      <div className="flex items-center mb-20">
        <Image
          src="/logo-icon.svg"
          alt="logo"
          className=""
          width={29}
          height={27}
          priority
        />
        <Image
          src="/logo.svg"
          alt="logo"
          className=""
          width={152}
          height={84}
          priority
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-secondaryText max-w-[414px] text-[14px]">
          <p className="mb-2">
            τaostats is a Block Explorer and Analytics Platform for Bittensor, a
            decentralized machine learning network.
          </p>
          <p className="mb-2">
            This site is not affiliated with the Opentensor Foundation. The
            content of this website is provided for information purposes only.
          </p>
          <p className="mb-2">
            No claim is made as to the accuracy or currency of the content on
            this site at any time.
          </p>
          <p>
            τaosτaτs is created and maintained by{' '}
            <span className="underline">mogmachine</span>. We hope you found it
            helpful, if you have any suggestions or issues please contact us at{' '}
            <span className="underline">taostats@mogmachine.com</span>.
          </p>
        </div>
        <div className="flex max-w-[480px] w-full justify-between mr-32">
          <div className="flex-col flex">
            <div className="text-white mb-7 text-[16px] font-medium">
              Blockchain
            </div>
            <div className="text-secondaryText flex flex-col text-[14px] font-medium">
              <Link className="mb-2" href="#">
                Blocks
              </Link>
              <Link className="mb-2" href="#">
                Transfers
              </Link>
              <Link className="mb-2" href="#">
                Delegation
              </Link>
              <Link className="mb-2" href="#">
                Validators
              </Link>
              <Link className="mb-2" href="#">
                Accounts
              </Link>
              <Link className="mb-2" href="#">
                Subnets
              </Link>
              <Link className="mb-2" href="#">
                Tokenomics
              </Link>
              <Link className="mb-2" href="#">
                Nakamoto
              </Link>
              <Link href="#">Kusanagi</Link>
            </div>
          </div>
          <div className="flex-col flex">
            <div className="text-white mb-7 text-[16px] font-medium">
              Validators
            </div>
            <div className="text-secondaryText flex flex-col text-[14px] font-medium">
              <Link className="mb-2" href="#">
                Verified Validators
              </Link>
              <Link className="mb-2" href="#">
                Delegation/Staking
              </Link>
            </div>

            <div className="text-white mb-7 text-[16px] font-medium mt-11">
              Resources
            </div>
            <div className="text-secondaryText flex flex-col text-[14px] font-medium">
              <Link className="mb-2" href="#">
                Links
              </Link>
              <Link className="mb-2" href="#">
                Media
              </Link>
            </div>
          </div>
          <div className="flex-col flex">
            <div className="text-white mb-7 text-[16px] font-medium">
              Developers
            </div>
            <div className="text-secondaryText flex flex-col text-[14px] font-medium">
              <Link className="mb-2" href="#">
                Corcel API
              </Link>
              <Link className="mb-2" href="#">
                Taostats API
              </Link>
            </div>

            <div className="text-white mb-7 text-[16px] font-medium mt-11">
              Apps
            </div>
            <div className="text-secondaryText flex flex-col text-[14px] font-medium">
              <Link className="mb-2" href="#">
                Corcel Chat
              </Link>
              <Link className="mb-2" href="#">
                Corcel Image Studio
              </Link>
              <Link className="mb-2" href="#">
                Corcel Translate
              </Link>
              <Link className="mb-2" href="#">
                Corcel Mobile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-12 pb-16">
        <div className="font-medium text-secondaryText text-[14px]">
          Taostats ©2024
        </div>
        <div className="font-medium text-secondaryText text-[14px]">
          Taostats is funded by public delegation. Support us by delegating
          stake to the taostats.io validator
        </div>
      </div>
      {/*<GradientBackgroundFooter/>*/}
    </div>
  );
};

export default Footer;
