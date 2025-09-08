import logoUrl from "@/public/Loomin AI Logo.png";
import Image from "next/image"; // Not from 'react'

function Logo() {
  return (
    <Image src={logoUrl} width={60} height={60} alt="Picture of the author" />
  );
}

export default Logo;
