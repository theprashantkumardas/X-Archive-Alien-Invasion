import { Inter, Space_Grotesk } from "next/font/google"; // Add Space_Grotesk here
import "./globals.css";

export const metadata = {
  title: "X-ARCHIVE | Extraterrestrial Intelligence Hub",
  description: "Classified research into ancient mysteries and UAP phenomena.",
};

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}