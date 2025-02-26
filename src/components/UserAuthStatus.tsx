// components/UserAuthStatus.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const UserAuthStatus = () => {
  const { isSignedIn } = useUser();

  return (
    <div>
      {/* Show content depending on user's sign-in state */}
      {!isSignedIn ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-4xl font-bold text-neutral-200">Welcome to CutieTube</h2>
          <p className="mt-4 text-neutral-300">Create your account to get started</p>
          <SignedOut>
            <SignUpButton />
          </SignedOut>
        </div>
      ) : (
        <div>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
      )}
    </div>
  );
};

export default UserAuthStatus;
