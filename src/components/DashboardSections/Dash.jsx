import useAuth from "@/hooks/useAuth";
import React from "react";

function Dash() {
  const { user } = useAuth();
  return (
    <div className="mt-20 w-2/3 mx-auto text-center">
      <p className="font-semibold text-primary text-5xl mb-8">
        Hello, {user?.displayName}
      </p>
      <p className="mt-4 text-xl text-gray-800 leading-relaxed">
        Welcome back to your{" "}
        <span className="font-semibold text-primary">
          resume builder dashboard
        </span>
        . Here, you can easily{" "}
        <span className="font-medium">
          create professional resumes, edit your drafts, and download them
          anytime
        </span>
        . Stay organized and keep all your career documents in one place — so
        you’re always ready for the next opportunity.
      </p>
    </div>
  );
}

export default Dash;
