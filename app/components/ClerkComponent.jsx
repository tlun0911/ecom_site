"use client";

import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const ClerkComponent = ({ children }) => {
  return (
    <div className="min-w-full">
      <SignedOut>
        <div className="flex w-20">
          <SignInButton className="border-2 border-sky-500 text-sky-500 px-2 min-w-max" />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex space-x-2 w-24">
          {children}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default ClerkComponent;
