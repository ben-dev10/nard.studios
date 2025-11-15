import { APP_BG } from "../_assets/constants";
import Navbar from "../_components/navbar";

export default function GalleryPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="_main-app.root" style={{ backgroundColor: APP_BG }}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
