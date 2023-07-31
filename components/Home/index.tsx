import Image from "next/image";
import Placeholder from "../../assets/background.svg";
import BackgroundImage from "./Background";

export default function Home(): JSX.Element {
  return (
    <div className="w-full h-full text-black py-20 bg-white">
      <BackgroundImage />
      <span>Home component</span>
    </div>
  );
}
