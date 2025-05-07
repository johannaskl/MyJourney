import { useEffect } from "react";

function Education() {
  useEffect(() => {
    document.title = "Utbildning";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="my-11 flex flex-col md:flex-row items-center justify-center md:space-x-10 lg:space-x-28">
        <h2 className="text-xl font-medium mb-6 md:mb-0 text-nowrap">Utbildning & kurser</h2>

        <section className="text-base max-w-xl mx-auto text-left sm:text-justify space-y-4">
          <div>
            <h3 className="font-semibold">Frontendutveckling – EC Utbildning (distans)</h3>
            <p className="italic text-sm text-pink-400">2024 – pågående</p>
            <a href="https://ecutbildning.se/utbildningar/frontendutvecklare/" target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-pink-400">
              Genväg till utbildningen
            </a>
          </div>

          <p>
            Under min utbildning har jag fått möjlighet att bygga webbapplikationer med HTML, CSS, JavaScript, React, Angular och TypeScript. Jag har arbetat både självständigt och i team för att skapa responsiva och användarvänliga gränssnitt, där jag
            lärt mig att balansera funktionalitet och design för att ge bästa möjliga användarupplevelse.
          </p>

          <div>
            <h4 className="font-semibold mt-6">Kommande kurser (HT-25, VT-26)</h4>
            <ul className="list-disc list-inside pl-4">
              <li>Backend-utveckling med SQL och databashantering.</li>
              <li>Fullstack-fokus med C#, ASP.NET Core och EF Core.</li>
              <li>LIA (Lärande i arbete)</li>
              <li>Examensarbete</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mt-6">Introduktion till programmering & C# – Luleå Tekniska Universitet</h3>
            <p className="italic text-sm text-pink-400">2024</p>
            <p>7,5 hp – Kurskod L0002B</p>
          </div>

          <div>
            <h3 className="font-semibold mt-6">Medieprogrammet – Nti-gymnasiet, Eskilstuna</h3>
            <p className="italic text-sm text-pink-400">2009 – 2013</p>
            <p>Inriktning: Grafisk kommunikation. Utbildningen innefattade kunskaper inom fotografering, grafisk design, medieproduktion och multimedia.</p>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Education;
