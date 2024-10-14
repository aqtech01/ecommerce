"use client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Product from "./product/page";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Product />
      </Main>
      <Footer />
    </>
  );
}
