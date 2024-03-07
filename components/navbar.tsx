import getCategories from "@/actions/get-categories";
import NavbarContent from "./navbar-content";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return <NavbarContent data={categories} />;
};

export default Navbar;
