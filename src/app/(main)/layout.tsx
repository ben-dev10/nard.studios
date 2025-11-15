import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import { APP_BG } from "../_assets/constants";

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
