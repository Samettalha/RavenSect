import Footer from "@/components/common/footer";
import "./globals.css";
import Navbar from "@/components/common/navbar";

export const metadata = {
  title: "RavenSect",
  description: " RavenSect Official Website",
  authors: [{ name: "samet talha", url: "https://github.com/Samettalha" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#101010]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}