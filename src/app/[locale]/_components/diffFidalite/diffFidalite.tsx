import Image from "next/image";
import fidaliteImg from "@/assets/fidelite.png";
import "./diffFidalite.css";

type text = {
  title1: string;
  title2: string;
  // pathImg: any /* same pathImg = no need to use it*/;
};

function DiffFid({ title1, title2 }: text) {
  return (
    <div className="maincontainer">
      <div className="mainfidalite">
        <Image src={fidaliteImg} alt="fidalite" height={300} width={300} />
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
