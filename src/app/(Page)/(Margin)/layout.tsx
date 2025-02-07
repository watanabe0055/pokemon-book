export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container flex-grow px-4 py-8 mx-auto">{children}</main>
  );
}
