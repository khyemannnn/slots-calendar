import './homeStyles.css';

export default function HomeRootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
      <body>
      {children}
      </body>
    </html>
    )
}