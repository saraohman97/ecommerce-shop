"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import Link from "next/link";

interface NavbarMenuProps {
  data: Category[];
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ data }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Button onClick={onOpen} className="bg-transparent text-neutral-700">
        <Menu size={30} />
      </Button>

      <Dialog open={open} as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            {/* Main navbar */}
            <nav className="flex flex-col gap-2 p-10">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default NavbarMenu;
