"use client";
import { Button, Image } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (status === "authenticated" && session) {
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tl">
      <Button
        disabled={loading}
        isLoading={loading}
        onClick={async () => {
          setLoading(true);
          await signIn("google");
        }}
        size="lg"
        variant="ghost"
        className="flex items-center justify-center gap-4 rounded-xl py-8 text-xl font-bold text-white shadow-xl hover:text-neutral-800 md:py-10 md:text-4xl"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
          className="h-10 w-10"
          alt=""
        />
        Continue with Google
      </Button>
    </div>
  );
};

export default Login;
