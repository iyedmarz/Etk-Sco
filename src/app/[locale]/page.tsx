"use client";
import { useRouter, usePathname } from "next/navigation";
import "./startingVideo.css";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLanguage = (newLocale: string) => {
    const newPathname: string = currentPathname.replace(
      `/${locale}`,
      `/${newLocale}`
    );
    router.push(newPathname);
  };
  
  return (
    <div className="video-container">
      <div className="langSwitcher">
        <button onClick={() => handleChangeLanguage("en")}>EN</button>
        <button onClick={() => handleChangeLanguage("fr")}>FR</button>
        {/* Add more buttons for additional languages if needed */}
      </div>
      <button onClick={() => router.push(`/${locale}/checkout`)}>
        <video autoPlay loop muted>
          <source src="ETK.mp4" type="video/mp4" />
        </video>
      </button>
    </div>
  );
}
