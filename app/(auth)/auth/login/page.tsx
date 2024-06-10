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
    <div className="flex h-screen items-center justify-center bg-neutral-100">
      <Button
        disabled={loading}
        isLoading={loading}
        onClick={async () => {
          setLoading(true);
          await signIn("google");
        }}
        size="lg"
        variant="light"
        className="flex items-center justify-center gap-4 rounded-xl bg-white py-10 text-4xl font-bold text-neutral-900 shadow-xl"
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
