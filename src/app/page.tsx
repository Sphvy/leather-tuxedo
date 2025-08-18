import Image from "next/image";
import stenimg from "/public/images/sten.png";

export default function Home() {
  return (
    <div className="bg-[url(/images/sunset_yellow.jpg)] bg-cover bg-scroll w-screen h-screen">
      <div className="max-w-screen max-h-fit rounded-b-4xl bg-gradient-to-r from-sky-orange-100 from-20% via-sky-orange-200 via-50% to-90% bg-repeat-x  flex justify-start">
        <Image
          src={stenimg}
          width={150}
          height={75}
          alt="Sten"
          className="p-2"
        ></Image>
      </div>
      <div className="p-16">
        <div className="p-4 shadow-2xl text-center outline-2 max-w-1/3 outline-sky-orange-500  rounded-2xl bg-sky-orange-100">
          <h1>Sten</h1>
          <h2>Oskused & Tehnoloogiad:</h2>
          <h3>Frontend Arendus:</h3>
          <h4>
            Next.js (põhitasemel), React (põhitasemel), Tailwind CSS
            (põhitasemel), HTML, CSS, JavaScript (põhioskused)
          </h4>
          <br></br>
          <h2>Linux:</h2>
          <h4>
            Põhilised käsurea oskused (navigeerimine, failihaldus, skriptimise
            alused), Lihtsate serveriülesannete haldamine
          </h4>
          <br></br>
          <h2>Kogemus</h2>
          <h4>
            Väike- ja keskmise suurusega frontend projektid (nt isiklikud
            veebilehed, väikeettevõtete lehed), Lihtsate Next.js rakenduste
            loomine ja haldamine, Tailwind CSS kasutamine disainis
            kiirendamiseks
          </h4>
          <br></br>
          <h2>Haridus</h2>
          <h4>Tallinna Polütehnikum</h4>
          <br></br>
          <h3>
            Mind iseloomustab: õpihimu, soov areneda tehnilistes oskustes,
            töökus, oskus teha koostööd meeskonnas, väga hea inglise keel,
            tähelepanelikkus detailidel koodis
          </h3>
        </div>
      </div>
    </div>
  );
}
