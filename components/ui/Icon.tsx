"use client";
import React from "react";

import { Icon as LibIcon } from "@iconify/react";

export const Icon = ({ icon, width = 28, height = 28, color }) => {
  return <LibIcon width={width} icon={icon} height={height} />;
};
