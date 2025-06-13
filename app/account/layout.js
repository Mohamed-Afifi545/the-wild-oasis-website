import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-[3rem_1fr] sm:grid-cols-[16rem_1fr] h-full gap-6 sm:gap-12">
      <SideNavigation />

      <div>{children}</div>
    </div>
  );
}
