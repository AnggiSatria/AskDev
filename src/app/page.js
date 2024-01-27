"use client";

import Image from "next/image";
import { useEffect } from "react";
import app from "@/config/firebase";
// import Navbar from "@/components/navbar/navbar";
import LandingPage from "@/components/pages/landing-page/LandingPage";
import NavbarDaisy from "@/components/navbar/navbat-daisy-ui/NavbarDaisy";
import HeaderMegaMenu from "@/components/navbar/landing-page/NavbarLandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <NavbarDaisy /> */}
      <HeaderMegaMenu />
      <LandingPage />
    </main>
  );
}
