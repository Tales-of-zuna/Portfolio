"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Notfound = () => {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-4">
      <p className="text-8xl font-bold">404</p>
      <div className="h-1 w-32 rounded-xl bg-neutral-700"></div>
      <p className="text-3xl font-light">Page not found</p>
      <Button
        onClick={() => {
          router.back();
        }}
        className="z-20 border text-white"
        variant="bordered"
      >
        Back
      </Button>
    </main>
  );
};

export default Notfound;
