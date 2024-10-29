import "@/app/globals.css";
import Header from "@/components/header";
import { Alegreya_Sans_SC } from 'next/font/google';

const alegreya = Alegreya_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
      <Header />
      
      {children}
      
    
      </body>
    </html>
  );
}
