import Image from "next/image";

import Placeholder from "../../../assets/logo.svg";

export default function Logo(): JSX.Element {
  return (
    <div className="w-20 h-10 relative">
      <Image src={Placeholder} fill alt="logo" className="object-contain" />
    </div>
  );
}
