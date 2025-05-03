import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 ">
      <div className="my-11 md:flex items-center space-x-6 text-nowrap">
        <img src="images/837111666.jpg" alt="Min bild" className="rounded-full w-96 mb-9 md:mb-0" />
        <section>
          <h2 className="text-xl mb-6 text-neutral-800 ">Student | Blivande Frontendutvecklare</h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10 text-pink-400">Utvecklar min framtid, en rad åt gången.</p>
        </section>
      </div>      
    </div>
  );
}

export default Home;
