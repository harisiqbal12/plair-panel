import Image from "next/image";

import Placeholder from "../../assets/background.svg";

export default function BackgroundImage(): JSX.Element {
  return (
    <div className="w-[80%] h-full absolute top-10 flex -right-60">
      <div className="w-1/2 h-full relative flex">
        <Image
          fill
          src={Placeholder}
          alt="background-image"
          className="opacity-30 "
        />
      </div>
      <div className="w-1/2 h-full relative flex">
        <Image
          fill
          src={Placeholder}
          alt="background-image"
          className="opacity-30 "
        />
      </div>
    </div>
  );
}
