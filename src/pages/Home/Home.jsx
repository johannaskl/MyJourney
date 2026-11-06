import { useEffect } from "react";
import profileImg from "/images/13_40_29_2.png";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6">

      <img src={profileImg} alt="Porträtt av Johanna Larsson" className="rounded-full aspect-square w-full max-w-72 md:max-w-96 object-cover"/>

      <section className="max-w-md w-full text-center md:text-left">

        <p className="text-pink-600 font-medium mb-3">
          Hej, vad kul att du hittat hit!
        </p>

        <h2 className="text-2xl font-medium mb-5">
          Välkommen till min portfolio
        </h2>

        <p className="text-base leading-relaxed mb-6">
          Jag heter Johanna och arbetar idag som webbutvecklare. Här kan du lära känna mig lite bättre, ta del av min yrkesbakgrund, utbildning och erfarenheter samt se några av de projekt jag har arbetat med.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link to="/portfolio" className="bg-pink-600 text-white rounded-full px-6 py-2 hover:bg-pink-700 transition">
            Se min portfolio
          </Link>

          <Link to="/om-mig" className="border border-slate-700 rounded-full px-6 py-2 hover:bg-pink-50 transition">
            Om mig
          </Link>
        </div>

      </section>
    </div>
  );
}

export default Home;
