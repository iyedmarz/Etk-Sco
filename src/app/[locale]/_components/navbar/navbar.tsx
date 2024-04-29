"use client";
import Image from "next/image";
import "./navbar.css";
import assistance from "@/assets/assistance.png";
import AuresKonnect from "@/assets/Aures.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Led from "@/_components/LedControl";
import Assist from "@/_components/_modal/Assistance/Assist";

export default function Navbar() {
  const pathname = usePathname();
  const [assist, setAssist] = useState(false);
  let content = null;

  if (pathname === "/en/checkout" || pathname === "/fr/checkout") {
    content = null;
  } else {
    content = (
      <button
        onClick={() => {
          setAssist(true); //turning on orange light to indcate that client need assistance
          Led({ state: "on", color: "orange" });
        }}
      >
        <Image src={assistance} alt="" height={60} width={60} />
      </button>
    );
  }

  /* to close Assist pop up*/
  const handleCloseAssist = () => {
    setAssist(false);
  };

  return (
    <>
      <header className="headercontainer">
        <div className="container1"> {content} </div>
        <div className="container2">
          <Image src={AuresKonnect} alt="" width={220} height={120} />
        </div>
      </header>
      <Assist isvisible={assist} onClose={handleCloseAssist} />
    </>
  );
}
