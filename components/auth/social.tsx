import React from "react";
import { FcGoogle } from "react-icons/fc";

import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline">
        <FcGoogle size={26} />
      </Button>
      <Button size="lg" className="w-full" variant="outline">
        <FaGithub size={26} />
      </Button>
    </div>
  );
};
