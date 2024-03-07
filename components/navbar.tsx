import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import NavbarMenu from "./navbar-menu";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="fixed bg-white w-full top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <NavbarMenu data={categories} />
        <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;
