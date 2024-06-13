"use client";
import {
  mdiAccountGroup,
  mdiApplicationBraces,
  mdiChat,
  mdiController,
  mdiFlask,
  mdiPodcast,
  mdiPost,
  mdiViewDashboard,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const buttons = [
  {
    path: mdiViewDashboard,
    href: "/admin/dashboard",
    tooltipContent: "Dashboard",
  },
  { path: mdiPost, href: "/admin/blogs", tooltipContent: "Blogs" },
  {
    path: mdiApplicationBraces,
    href: "/admin/projects",
    tooltipContent: "Projects",
  },
  { path: mdiFlask, href: "/admin/experiments", tooltipContent: "Experiments" },
  { path: mdiPodcast, href: "/admin/podcasts", tooltipContent: "Podcasts" },
  { path: mdiController, href: "/admin/demos", tooltipContent: "Demos" },
  { path: mdiChat, href: "/admin/chat", tooltipContent: "Chatting" },
  { path: mdiAccountGroup, href: "/admin/users", tooltipContent: "Users" },
];

const SidebarButton = ({ path, href, tooltipContent }: any) => {
  const [isActive, setIsActive] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setIsActive(currentPath.includes(href));
  }, [href, currentPath]);

  return (
    <Tooltip placement="bottom" color="foreground" content={tooltipContent}>
      <Button
        as={Link}
        href={href}
        className={`flex h-20 w-20 transform items-center justify-center rounded-xl bg-white text-neutral-700 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-neutral-100 hover:shadow-xl active:translate-y-0 active:scale-95 ${isActive ? "-translate-y-2 shadow-xl outline-dashed outline-2 outline-neutral-500" : ""}`}
      >
        <Icon path={path} className="h-10 w-10" />
      </Button>
    </Tooltip>
  );
};

const AdminSidebar = () => {
  const groupedButtons = [];
  for (let i = 0; i < buttons.length; i += 2) {
    groupedButtons.push(buttons.slice(i, i + 2));
  }

  return (
    <div className="fixed h-screen w-1/5 p-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 rounded-xl bg-white p-8 shadow-xl">
        {groupedButtons.map((group, index) => (
          <div key={index} className="flex justify-around gap-4">
            {group.map((button, idx) => (
              <SidebarButton key={idx} {...button} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
