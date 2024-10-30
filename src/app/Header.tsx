import {  Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import ConnectWallet, { thirdWebClient, wallets } from "@/components/ConnectWallet";
import Link from "next/link";
import { polygonAmoy } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
export default function Header() {
    return (
        <Navbar  isBlurred={false}>
      <NavbarBrand>
        <Link href="/" className="font-bold text-2xl text-primary ">Auction Hub</Link>
      </NavbarBrand>
      <NavbarContent  justify="start">
        <NavbarItem>
         <Link className=" text-primary" href="/createlisting">Create Auction</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <ConnectButton
            client={thirdWebClient}
            chain={polygonAmoy}
            autoConnect
            wallets={wallets}
            theme={'dark'}
            connectButton={
              {
                label: 'Connect Wallet',
                className: '!border-medium !border-primary !border !text-primary !bg-background !h-12 !text-md hover:!bg-primary hover:!text-background !font-semibold  !rounded-md',
              }
            }
            />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    )
}