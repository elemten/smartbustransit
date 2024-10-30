import {  Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import ConnectWallet, { thirdWebClient, wallets } from "@/components/ConnectWallet";
import Link from "next/link";
import { polygonAmoy } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { PixelifySans } from "./layout";
export default function Header() {
    return (
    <div className="flex flex-col w-full gap-2 justify-center mt-4">
        <div className=" logo w-full text-center ">
          <Link className={` text-primary font-bold text-4xl ${PixelifySans.className}`  }  href={'/'}>Decentra Bid</Link>
        </div>
        <div className=" flex flex-row w-full gap-5 justify-center items-center align-middle">
          <Link  href={'/createlisting'} className=" text-primary">Create new Auction</Link>
          <ConnectButton
            client={thirdWebClient}
            chain={polygonAmoy}
            autoConnect
            wallets={wallets}
            theme={'dark'}
            detailsButton={{
              className:" !bg-primary !h-12 !text-md hover:!bg-primary  !font-semibold  !rounded-md",
            }}
            connectButton={
              {
                label: 'Connect Wallet',
                className: ' !text-primary !bg-transparent !h-12 !text-md hover:!bg-transparent hover:!text-primary !font-semibold  !rounded-md',
              }
            }
            />
        </div>
    </div>
    )
}