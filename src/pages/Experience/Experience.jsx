
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    document.title = "Yrkesbakgrund";
  }, []);

  return (
    <main className="flex flex-col items-center px-4 text-center">
      <h2 className="text-xl font-medium my-8">
        Min Yrkesbakgrund
      </h2>

      <section className="w-full max-w-3xl text-left space-y-8 mb-8">

        {/* Columbird */}
        <article className="space-y-3">
          <div>
            <h3 className="font-semibold">
              Webbutvecklare – Columbird
            </h3>
            <p className="italic text-pink-600">
              2026 - Nuvarande
            </p>
          </div>

          <p>
            Columbird är en kommunikationsbyrå som arbetar med webbutveckling, design, content och marknadsföring med fokus på användarvänlighet och varumärkesbyggande.
          </p>

          <p>
             Som webbutvecklare arbetar jag med att utveckla och vidareutveckla webbplatser och digitala lösningar, främst med PHP och WordPress. 
          </p>
        </article>

        {/* IDEMIA */}
        <article className="space-y-3">
          <div>
            <h3 className="font-semibold">
              Dataadministratör – IDEMIA Sweden AB
            </h3>
            <p className="italic text-pink-600">
              2016 – 2026
            </p>
          </div>

          <p>
            IDEMIA är ett multinationellt teknikföretag som tillhandahåller säkerhetstjänster, biometriska identifieringsprodukter samt produkter som används inom bank- och finanssektorn.
          </p>

          <p>
            I min roll som dataadministratör ansvarar jag för att säkerställa produktionens dagliga arbete genom planering och hantering av underlag, samt besvarar produktionsrelaterade frågor från kunder och säljare. Jag har även inblick i lager- och logistiksystem där jag bland annat hanterar olika typer av materialbrister. Jag sammanställer produktionsrelaterad statistik i Excel. En del av arbetet sker inom högsäkerhetsklassade områden. Jag har också genomgått en Lean Kaizen-utbildning för att utveckla mina färdigheter inom processförbättring.
          </p>
        </article>

        {/* Övriga erfarenheter */}
        <article className="space-y-3">
          <h3 className="font-semibold">
            Övriga ströjobb
          </h3>

          <p>
            Innan min anställning på IDEMIA har jag haft flera kortare anställningar och ströjobb. Dessa erfarenheter har gett mig insikter i olika branscher och arbetsmiljöer, och bidragit till min flexibilitet och anpassningsförmåga i nya sammanhang.
          </p>
        </article>

      </section>
    </main>
  );
}

export default Experience;
