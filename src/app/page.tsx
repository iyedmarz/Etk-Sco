"use client";
import { useRouter } from "next/navigation";
import "./startingVideo.css";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/checkout");
        }}
      >
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="ETK.mp4" type="video/mp4" />
          </video>
        </div>
      </button>
    </div>
  );
}
