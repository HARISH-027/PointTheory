"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function LoadingWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return null;
}
