"use client";

import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const ClerkComponent = ({ children }) => {
  return (
    <>
      <SignedOut>
        <SignInButton className="border-2 border-sky-500 text-sky-500 px-2 min-w-max" />
      </SignedOut>
      <SignedIn>
        <div className="flex space-x-2">
          {children}
          <UserButton />
        </div>
      </SignedIn>
    </>
  );
};

export default ClerkComponent;
