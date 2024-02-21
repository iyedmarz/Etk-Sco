import React from "react";
import "./cancel.css";
import Image from "next/image";
import Aures from "../../../../../public/auresModel.png";
import ABientot from "../../../../../public/Abientot.png";
import { useRouter } from "next/navigation";

const Abientot = ({ isvisible }: { isvisible: boolean }) => {
  const router = useRouter();

  if (!isvisible) return null;

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="pop">
        <div className="popContainer">
          <Image src={Aures} alt="" />
          <p className="titre">
            Merci pour votre visite <br /> <b>A bientot</b>
          </p>
          <Image src={ABientot} alt="" className="mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Abientot;
