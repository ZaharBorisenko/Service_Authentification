"use client";

import { LoginButton } from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-sky-700">
      <h1 className="text-6xl text-white font-bold drop-shadow-md">Auth</h1>
      <p className="text-lg font-medium text-white my-3">
        A simple authentication service
      </p>
      
      <LoginButton>
        <Button variant="secondary" size="lg">
          Sign In
        </Button>
      </LoginButton>
    </div>
  );
  2;
}
