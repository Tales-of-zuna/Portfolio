"use client";
import { mdiAccount, mdiAccountMinus } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
  User,
} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  if (session && session.user) {
    return (
      <div>
        <Dropdown
          className="text-neutral-800"
          backdrop="opaque"
          placement="bottom-start"
        >
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: session.user.image as string,
                size: "sm",
              }}
              className="hidden transition-transform md:flex"
              description={`@${session.user.email}`}
              name={session.user.name}
            />
          </DropdownTrigger>
          <DropdownMenu
            className="flex flex-col items-center justify-center"
            aria-label="User Actions"
            variant="light"
          >
            <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">@{session.user.email}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <Tooltip
                color="foreground"
                placement="bottom"
                content={"Sign out"}
              >
                <Button
                  fullWidth
                  isLoading={loading}
                  color="danger"
                  onClick={() => {
                    setLoading(true);
                    signOut();
                  }}
                >
                  <Icon path={mdiAccountMinus} className="h-6 w-6 text-white" />
                </Button>
              </Tooltip>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button
          isLoading={loading}
          className="flex md:hidden"
          color="danger"
          variant="flat"
          isIconOnly
          onClick={() => {
            setLoading(true);
            signOut();
          }}
        >
          <Icon path={mdiAccountMinus} className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Tooltip color="foreground" content={"Sign in"}>
          <Button
            isLoading={loading}
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
