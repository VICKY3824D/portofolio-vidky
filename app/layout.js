import "./globals.css";

export const metadata = {
  title: "Vidky Adhi Pradana | Fullstack Developer & Project Manager",
  description:
    "Portofolio Vidky Adhi Pradana: Fullstack Developer (Laravel, Python, Next.js) dan Project Manager dari Wonogiri. Proyek, pengalaman, dan CV.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
