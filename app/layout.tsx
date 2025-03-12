import '@/app/ui/global.css'
import {inter} from 'app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// By adding th3e Inter the <body> element, the font will be applied throughout the application.

// we have also added a tailwind "antialised" class will smooth out the font and give it a nice touch.
