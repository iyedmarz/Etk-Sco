import Image from "next/image";
import "./navbar.css";
import assistance from "@/assets/assistance.png";
import AuresKonnect from "@/assets/Aures.png";

export default function Navbar() {
  return (
    <header className="headercontainer">
      <div className="container1">
        <Image src={assistance} alt="" width={60} height={60} />
      </div>
      <div className="container2">
        <Image src={AuresKonnect} alt="" width={220} height={120} />
      </div>
    </header>
  );
}
