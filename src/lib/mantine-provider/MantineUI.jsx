"use client";

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import React from "react";

export default function MantineUI({ children }) {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
