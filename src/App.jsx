import React from "react";
import { Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Stack style={{ minHeight: "100vh" }}>
        <AppRouter />
      </Stack>
      <Footer />
    </BrowserRouter>
  );
}
