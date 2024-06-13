"use client";
import AdminSidebar from "@/components/layout/admin/adminSidebar";
import "@/styles/monster.css";
import { mdiHandBackLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const allowedList = [
    "tales.of.zuna@gmail.com",
    "cloud.lifec@gmail.com",
    "bmbdlm2001@gmail.com",
  ];
  if (allowedList.includes(session?.user?.email as string)) {
    return (
      <div className="">
        <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-neutral-800 text-9xl font-bold">
          <Link
            className="flex items-center justify-center text-9xl text-white"
            href="/"
          >
            <Icon path={mdiHandBackLeft} className="h-52 text-white" />
            <p>Nope</p>
          </Link>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
          <div className="rotate-180">
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <main className="flex min-h-screen w-screen justify-center bg-neutral-100">
      <nav className="w-1/5">
        <AdminSidebar />
      </nav>
      <section className="min-h-screen w-4/5 p-8 light">{children}</section>
      <footer className="">{/* <Footer /> */}</footer>
    </main>
  );
};

export default AdminLayout;
