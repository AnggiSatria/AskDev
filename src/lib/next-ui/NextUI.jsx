"use client";

import { NextUIProvider } from "@nextui-org/system";
import React from "react";

export default function NextUI({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
