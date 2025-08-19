import Image from "next/image";
import stenimg from "/public/images/sten.png";

export default function Home() {
  return (
    <div className="bg-[url(/images/sunny_day.jpg)] bg-cover bg-scroll w-screen h-auto">
      <div className="max-w-screen max-h-fit rounded-b-4xl bg-gradient-to-r from-sky-blue-100 from-10% to-50% bg-repeat-x  flex justify-start">
        <Image
          src={stenimg}
          width={150}
          height={75}
          alt="Sten"
          className="p-2"
        ></Image>
      </div>
      <div className="p-16">
        <div className="p-4 shadow-2xl text-center outline-4 sm:w-1/2 outline-sky-green-500 rounded-2xl bg-sky-green-100 md:w-1/3">
          <h1>Sten</h1>
          <h2>Oskused & tehnoloogiad:</h2>
          <h3>Frontend arendus:</h3>
          <h4>
            Next.js (põhitasemel), React (põhitasemel), Tailwind CSS
            (põhitasemel), HTML, CSS, JavaScript (põhioskused)
          </h4>
          <br></br>
          <h2>Linux:</h2>
          <h4>
            Põhilised käsurea oskused (navigeerimine, failihaldus, skriptimise
            alused), lihtsate serveriülesannete haldamine
          </h4>
          <br></br>
          <h2>Kogemus</h2>
          <h4>
            Väike- ja keskmise suurusega frontend projektid (nt isiklikud
            veebilehed, väikeettevõtete lehed), lihtsate Next.js rakenduste
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
