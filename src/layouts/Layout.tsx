import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="flex h-screen flex-col text-gray-100">
    <Header />
    <main className="mt-24">{children}</main>
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default Layout;
