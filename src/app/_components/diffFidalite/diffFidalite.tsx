import Image from "next/image";
import "./diffFidalite.css";
import fidaliteImg from "./../../../../public/fidelite.png";

type text = {
  title1: string;
  title2: string;
  // pathImg: any /* same pathImg = no need to use it*/;
};

function DiffFid({ title1, title2 }: text) {
  return (
    <div className="maincontainer">
      <div className="mainfidalite">
        <Image src={fidaliteImg} alt="fidalite" />
        <div className="verticalLine"></div>
        <div className="parag">
          <p className="nogras">{title1}</p>
          <p className="gras">{title2}</p>
        </div>
      </div>
    </div>
  );
}

export default DiffFid;
