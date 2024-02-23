"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import "./startingVideo.css";

export default function Home() {
  // const router = useRouter();
  const t = useTranslations("page.checkout");

  return (
    <div>
      <button>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="ETK.mp4" type="video/mp4" />
          </video>
        </div>
      </button>
    </div>
  );
}
