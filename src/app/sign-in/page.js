"use client";

import CreateUser from "@/components/pages/sign-in-or-sign-up/CreateUser";
import Link from "next/link";
import React, { useState } from "react";

export default function SignIn() {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  return <CreateUser login={login} setLogin={setLogin} />;
}
