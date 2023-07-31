import dynamic from "next/dynamic";
const Header = dynamic(() => import("../Header"));
const Sidebar = dynamic(() => import("../Sidebar"));

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex">
        <div className="w-[20%] h-full">
          <Sidebar />
        </div>
        <div className="w-[80%] h-full flex flex-col">{children}</div>
      </div>
    </>
  );
}
