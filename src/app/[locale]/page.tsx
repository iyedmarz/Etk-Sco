"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button, Modal } from "react-daisyui";
import { useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NumPad from "@/_components/NumPad/NumPad";
import Aures from "@/assets/auresModel.png";
import "./startingVideo.css";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const currentPathname = usePathname();
  const settings = useRef<HTMLDialogElement>(null);

  const handleChangeLanguage = (newLocale: string) => {
    const newPathname: string = currentPathname.replace(
      `/${locale}`,
      `/${newLocale}`
    );
    router.push(newPathname);
  };

  // POP UP Settings MODAL
  const handleShowSettings = useCallback(() => {
    settings.current?.showModal();
  }, [settings]);

  const handlePass = () => {};

  return (
    <div className="h-[100%] w-[100%]">
      <Link href={`/${locale}/checkout`}>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="assets/ETK.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
      <div className="langSwitcher">
        <button className="en" onClick={() => handleChangeLanguage("en")}>
          EN
        </button>
        <button className="fr" onClick={() => handleChangeLanguage("fr")}>
          FR
        </button>
        {/* Add more buttons for additional languages if needed */}
      </div>
      <button onClick={handleShowSettings} className="hiddenBut"></button>
      <Modal
        ref={settings}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="w-[95%] h-[95%] bg-white p-[1rem] rounded-2xl flex justify-between items-center flex-col">
          <Image src={Aures} alt="" />
          <div className="text-3xl">Connexion du Superviseur</div>
          <NumPad placeholder="Entrer votre Code" onInput={handlePass} />
          <Modal.Actions className="flex flex-row">
            <form method="dialog">
              <Button className="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black hover:bg-[#F4F4F4] font-bold text-2xl mr-2">
                Close
              </Button>
            </form>
            <Button
              onClick={() => {
                router.push("/settings/general");
              }}
              className="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black hover:bg-[#F4F4F4] font-bold text-2xl mr-2"
            >
              Confirm
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
    </div>
  );
}
