"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Notfound = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center space-y-4 h-screen items-center">
      <p className="font-bold text-8xl">404</p>
      <div className="w-32 h-1 rounded-xl bg-neutral-700"></div>
      <p className="text-3xl font-light">Page not found</p>
      <Button
        onClick={() => {
          router.back();
        }}
        className="border text-white z-20"
        variant="bordered"
      >
        Back
      </Button>
    </main>
  );
};

export default Notfound;
