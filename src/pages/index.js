import Head from "next/head";
import { Layout } from "../layout/Layout";
import Navbar from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Items from "../components/items/Items";
import Console from "../components/console/Console";
import Products from "../components/products/Products";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Items />
      <Console />
      <Products />
      <Footer />
    </Layout>
  );
}
