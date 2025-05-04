import { useEffect } from "react";
import aboutImg from '/images/273847997_2.jpg'

function About() {
  useEffect(() => {
    document.title = "Om mig";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 ">
      <div className="my-11 flex flex-col sm:flex-row items-center justify-center sm:space-x-6">
        <img src={aboutImg} alt="Om mig bild" className="rounded-full w-96 mb-9 md:mb-0" />
        <section>
          <h2 className="text-xl font-medium mb-6">Om mig</h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10">Jag är en 32-åring från Eskilstuna som alltid är nyfiken på att lära mig nya saker. Jag älskar att utmana mig själv och växa, både som person och i min yrkesroll. Just nu fokuserar jag på att utvecklas inom webbutveckling och ser fram emot att ta mig an nya utmaningar.</p>
        </section>
      </div>
    </div>
  );
}

export default About;
