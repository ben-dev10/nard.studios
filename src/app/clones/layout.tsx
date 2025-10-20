export default function ClonesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p className="p-2 rounded-full bg-primary fixed bottom-5 right-5 text-white">
        Modal
      </p>
      {children}
    </>
  );
}
