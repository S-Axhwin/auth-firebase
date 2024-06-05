"use server";

import { redirect } from 'next/navigation';
import React from 'react'

const redirected = () => {
  redirect("/login")
}

export default redirected