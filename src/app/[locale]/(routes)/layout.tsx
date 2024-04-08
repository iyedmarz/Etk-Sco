import Navbar from "@/_components/navbar/navbar";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
