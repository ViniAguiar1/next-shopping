'use client'

import { Navbar } from "@/components/navbar/Navbar";
import React from "react";7
import { Footer } from "@/components/footer/Footer";
import { List } from "@/components/list/List";
// import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
// import { QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import "./globalcss"

export default function Home() {
  const [client] = useState(new QueryClient())
  return (
    <>
    <QueryClientProvider client={client}>
      <Navbar />
      <List />
      <Footer />
    </QueryClientProvider>
    </>
  );
}
