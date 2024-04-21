import Link from "next/link";
import PropreButton from "@/_components/PropreButton";
import "./settings.css";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className=" bg-[black]">
          <div className="mx-2 flex justify-between items-center ">
            <div className="text-3xl text-white">PARAMETRAGE</div>
            <div className="w-[30%]">
              <Link href={"/en"}>
                <button className="w-[49%] mr-1 border border-[white] rounded-md bg-[black] text-[white] hover:text-black hover:bg-[white] ">
                  RETOUR
                </button>
              </Link>
              <button className=" w-[49%] border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black] ">
                ENREGISTRER
              </button>
            </div>
          </div>
        </header>
        <div className="setting-paths grid grid-cols-3">
          <Link
            href="/settings/general"
            className="border border-black p-1 font-bold text-center"
          >
            Géneral
          </Link>
          {/* <button className="border border-black p-1 font-bold font-bold">Encaissement</button> */}
          <Link
            href="/settings/design"
            className="border border-black p-1 font-bold text-center"
          >
            Design
          </Link>
          {/* <button className="border border-black p-1 font-bold">Monnayeur</button> */}
          {/* <button className="border border-black p-1 font-bold">
            Imprimante
          </button> */}
          <Link
            href="/settings/options"
            className="border border-black p-1 font-bold text-center"
          >
            Options
          </Link>
        </div>
        {children}
        <footer className="fixed bottom-0 w-[100%] bg-[black] flex">
          <div className="text-white mr-2">Numero Support</div>
          <div className="text-xl text-white">
            Specialiste de la croissance de votre point de vente
          </div>
          &
        </footer>
      </body>
    </html>
  );
}
