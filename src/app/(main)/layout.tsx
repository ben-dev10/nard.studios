import React from "react";

import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

export const APP_BG = "#fafafa"; /* or: #fafafa, f7f7f7, #f4f5ff */

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="_main-app.root" style={{ backgroundColor: APP_BG }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
