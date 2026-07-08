import { useEffect } from "react";
import profileImg from '/images/13_40_29_2.png'

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <>      
      <img src={profileImg} alt="Min profilbild" className="rounded-full w-96 h-96 object-cover mb-9 md:mb-0" />
      <section className="max-w-md w-full">
        <h2 className="text-2xl font-medium mb-6 ">Frontendutvecklare</h2>
      </section>            
    </>
  );
}

export default Home;
