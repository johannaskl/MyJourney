import { useEffect } from "react";

function Education() {
  useEffect(() => {
    document.title = "Utbildning";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-xl font-medium my-8">Utbildning & kurser</h2>
      <div className="my-5">        

        <section className="text-base max-w-3xl mx-auto text-left space-y-3">
          <div>
            <h3 className="font-semibold">Frontendutveckling – EC Utbildning (distans)</h3>
            <p className="italic text-sm text-pink-400">Augusti 2024 – Juni 2026</p>
            <a href="https://ecutbildning.se/utbildningar/frontendutvecklare/" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-pink-400">
              Genväg till utbildningen
            </a>
          </div>

          <p>
            Under min utbildning har jag fått möjlighet att bygga webbapplikationer med HTML, CSS, JavaScript, React, Angular och TypeScript. Jag har även arbetat med backend-utveckling med fokus på SQL och databashantering, samt fullstack-utveckling med C#, ASP.NET Core, Entity Framework Corre och Web API. Jag har arbetat både självständigt och i team för att skapa responsiva och användarvänliga gränssnitt, där jag lärt mig att balansera funktionalitet och design för att ge bästa möjliga användarupplevelse. Under min LIA-period har jag även arbetat med WordPress och PHP och fått erfarenhet om WCAG.
          </p>

          <div>
            <h3 className="font-semibold mt-6">Introduktion till programmering & C# – Luleå Tekniska Universitet</h3>
            <p className="italic text-sm text-pink-400">2024</p>
            <p>7,5 hp – Kurskod L0002B</p>
          </div>

          <div>
            <h3 className="font-semibold mt-6">Medieprogrammet – Nti-gymnasiet, Eskilstuna</h3>
            <p className="italic text-sm text-pink-400">2009 – 2012</p>
            <p>Inriktning: Grafisk kommunikation. Utbildningen innefattade kunskaper inom fotografering, grafisk design, medieproduktion och multimedia.</p>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Education;
