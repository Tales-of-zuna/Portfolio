"use client";
import { mdiAccount, mdiAccountMinus } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Tooltip } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  const [laoding, setLoading] = useState(false);

  if (session && session.user) {
    return (
      <div>
        <Tooltip color="foreground" content={"Sign out"}>
          <Button
            isLoading={laoding}
            isIconOnly
            color="danger"
            onClick={() => {
              setLoading(true);
              signOut();
            }}
            variant="light"
          >
            <Icon path={mdiAccountMinus} className="h-6 w-6 text-white" />
          </Button>
        </Tooltip>
      </div>
    );
  } else {
    return (
      <div>
        <Tooltip color="foreground" content={"Sign in"}>
          <Button
            isLoading={laoding}
            isIconOnly
            color="success"
            onClick={() => {
              setLoading(true);
              signIn();
            }}
            variant="light"
          >
            <Icon path={mdiAccount} className="h-6 w-6 text-white" />
          </Button>
        </Tooltip>
      </div>
    );
  }
};

export default SignInButton;
