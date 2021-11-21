import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="h-screen text-gray-100 flex flex-col">
    <Header />
    <main className="mt-24">{children}</main>
    <Footer />
  </div>
);

export default Layout;
