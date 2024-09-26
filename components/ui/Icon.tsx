"use client";
import React from "react";

import { Icon as LibIcon } from "@iconify/react";

export const Icon = ({ icon, width = 28, height = 28 }) => {
  return (
    <span className="hover:text-green">
      <LibIcon width={width} icon={icon} height={height} />
    </span>
  );
};
