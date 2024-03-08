"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import Link from "next/link";
import NavbarActions from "./navbar-actions";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

interface NavbarContentProps {
  data: Category[];
}

const NavbarContent: React.FC<NavbarContentProps> = ({ data }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    window.scrollY >= 700 ? setNavbar(true) : setNavbar(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div
    className={`w-full top-0 z-50 ${navbar ? "bg-white fixed" : "bg-transparent absolute"}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div>
          <Button onClick={onOpen} className="bg-transparent text-neutral-700">
            <Menu size={30} />
          </Button>

          <Dialog
            open={open}
            as="div"
            className="relative z-50"
            onClose={onClose}
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />

            <div className="fixed inset-0 z-40 flex">
              <Dialog.Panel className="relative bg-white mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-end px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>

                {/* Main navbar */}
                <nav className="flex flex-col gap-2 p-10">
                  <Link
                    href="/"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-black",
                      pathname === `/` ? "text-black" : "text-neutral-500"
                    )}
                    onClick={onClose}
                  >
                    Hem
                  </Link>
                  <Link
                    href="/produkter"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-black",
                      pathname === `/produkter`
                        ? "text-black"
                        : "text-neutral-500"
                    )}
                    onClick={onClose}
                  >
                    Alla produkter
                  </Link>
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                      )}
                      onClick={onClose}
                    >
                      {route.label}
                    </Link>
                  ))}

                  <div className="flex items-center gap-2 mt-2">
                    <Link href="/">
                      <FaFacebookF size={20} />
                    </Link>
                    <Link href="/">
                      <FaInstagramSquare size={20} />
                    </Link>
                  </div>
                </nav>
              </Dialog.Panel>
            </div>
          </Dialog>
        </div>

        <NavbarActions />
      </div>
    </div>
  );
};

export default NavbarContent;
