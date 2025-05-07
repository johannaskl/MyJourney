import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    document.title = "Yrkesbakgrund";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="my-11 flex flex-col md:flex-row items-center justify-center md:space-x-10 lg:space-x-28">
        <h2 className="text-xl font-medium mb-6 md:mb-0 text-nowrap">Min Yrkesbakgrund</h2>

        <section className="text-base max-w-xl mx-auto text-left sm:text-justify space-y-3">
          <div>
            <h3 className="font-semibold">Dataadministratör – IDEMIA Sweden AB</h3>
            <p className="italic text-sm text-pink-400">2016 – nuvarande (tjänstledig pga studier)</p>
          </div>

          <p className="text-base mx-auto">IDEMIA är ett multinationellt teknikföretag som tillhandahåller säkerhetstjänster, biometriska identifieringsprodukter samt produkter som används inom bank- och finanssektor.</p>

          <p className="text-base mx-auto mb-10">
            I min nuvarande roll som dataadministratör ansvarar jag för att säkerställa produktionens dagliga arbete genom planering och hantering av underlag, samt besvarar produktionsrelaterade frågor från kunder och säljare. Jag har även inblick i
            lager- och logistiksystem där jag bland annat hanterar olika typer av materialbrister. Jag sammanställer även produktionsrelaterad statistik i Excel. En del av arbetet sker inom högsäkerhetsklassade områden. Jag har också genomgått en Lean
            Kaizen-utbildning för att utveckla mina färdigheter inom processförbättring.
          </p>

          <section className="mt-8 space-y-2">
            <h4 className="font-semibold">Övriga ströjobb</h4>
            <p className="text-base mx-auto">
              Innan min anställning på IDEMIA har jag haft flera kortare anställningar och ströjobb. Dessa erfarenheter har gett mig insikter i olika branscher och arbetsmiljöer, och bidragit till min flexibilitet och anpassningsförmåga i nya sammanhang.
            </p>
          </section>          
        </section>
        
      </div>
    </div>
  );
}

export default Experience;
