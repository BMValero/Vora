"use client"

import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = window.location.pathname

  console.log("pathname", pathname)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}