"use client";

import CreateUser from "@/components/pages/sign-in-or-sign-up/CreateUser";
import React, { useState } from "react";

export default function SignUp() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  return <CreateUser register={register} setRegister={setRegister} />;
}
