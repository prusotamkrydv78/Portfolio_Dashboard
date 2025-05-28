import { Toaster } from 'sonner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" theme="dark" />
      </body>
    </html>
  );
}