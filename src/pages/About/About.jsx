import { useEffect } from "react";
import aboutImg from '/images/273847997_2.jpg'

function About() {
  useEffect(() => {
    document.title = "Om mig";
  }, []);

  return (
    <>
      <img src={aboutImg} alt="Om mig bild" className="rounded-full w-96 h-96 object-cover mb-9 md:mb-0" />
      <section className="max-w-md w-full">
        <h2 className="text-xl font-medium mb-6">Om mig</h2>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">Jag är en 33-åring från Eskilstuna som alltid är nyfiken på att lära mig nya saker. Jag älskar att utmana mig själv och växa, både som person och i min yrkesroll. Just nu fokuserar jag på att utvecklas inom webbutveckling och ser fram emot att ta mig an nya utmaningar.</p>
      </section>
    </>
  );
}

export default About;
