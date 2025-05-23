import { useEffect } from "react";
import profileImg from '/images/837111666.jpg'

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 ">
      <div className="my-11 md:flex items-center sm:space-x-6 text-nowrap">
        <img src={profileImg} alt="Min profilbild" className="rounded-full w-96 mb-9 md:mb-0" />
        <section>
          <h2 className="text-xl font-medium mb-6">Student | Blivande Frontendutvecklare</h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10 text-pink-400">Utvecklar min framtid, en rad åt gången.</p>
        </section>
      </div>      
    </div>
  );
}

export default Home;
