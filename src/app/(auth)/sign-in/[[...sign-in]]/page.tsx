import { ClerkLoaded, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-neutral-800">Welcome Back!</h1>
          <p className="text-base text-neutral-500">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoaded>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoaded>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="logo" height={100} width={100} />
      </div>
    </div>
  );
}
