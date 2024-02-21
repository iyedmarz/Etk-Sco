import React from "react";
import "./Assist.css";
import Image from "next/image";
import Aures from "../../../../../public/auresModel.png";
import { useRouter } from "next/navigation";

const Assist = ({
  isvisible,
  onClose,
}: {
  isvisible: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();

  setTimeout(() => {
    onClose();
  }, 5000);

  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="pop">
        <div className="popContainer">
          <Image src={Aures} alt="" />
          <p className="titre">
            Demande d&apos;assistance <br /> <b>on the way</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assist;
