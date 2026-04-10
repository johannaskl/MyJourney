import { useEffect } from "react";
import profileImg from '/images/837111666.jpg'

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <>      
      <img src={profileImg} alt="Min profilbild" className="rounded-full w-96 h-96 object-cover mb-9 md:mb-0" />
      <section className="max-w-md w-full">
        <h2 className="text-xl font-medium mb-6">Student | Blivande Frontendutvecklare</h2>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10 text-pink-400">Utvecklar min framtid, en rad åt gången.</p>
      </section>            
    </>
  );
}

export default Home;
