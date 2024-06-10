"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const links = [
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Experiments",
      link: "/experiments",
    },
    {
      name: "Podcasts",
      link: "/podcasts",
    },
    {
      name: "Demos",
      link: "/demos",
    },
  ];
  const path = usePathname();
  return (
    <div className="text-white">
      <Sheet>
        <SheetTrigger>
          <Icon path={mdiMenu} className="h-7 w-7 text-neutral-100" />
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="border-none bg-neutral-950 text-white"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <div className="flex flex-col items-center gap-4">
                {links.map((link) => (
                  <Link
                    className={`transform transition-all duration-300 ease-in-out hover:text-gray-200 ${
                      link.link === path ? "text-gray-200" : "text-gray-400"
                    }`}
                    key={link.name}
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
