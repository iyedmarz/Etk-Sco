"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import "./startingVideo.css";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.checkout");

  return (
    <div>
      <button onClick={() => router.push(`/${locale}/checkout`)}>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="ETK.mp4" type="video/mp4" />
          </video>
        </div>
      </button>
    </div>
  );
}
