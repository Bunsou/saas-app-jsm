"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const WelcomeMessage = () => {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome back, {user?.firstName || "there"}! 👋
          </h2>
          <p className="text-gray-600 mt-1">
            Ready to continue your learning journey?
          </p>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome to Converso! 🚀
          </h2>
          <p className="text-gray-600 mt-1">
            Sign in to start building your AI companions and enhance your
            learning experience.
          </p>
        </div>
      </SignedOut>
    </>
  );
};

export default WelcomeMessage;
