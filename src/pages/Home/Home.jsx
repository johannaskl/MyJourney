import { useEffect } from "react";
import profileImg from '/images/13_40_29_2.png'

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <>      
      <img src={profileImg} alt="Min profilbild" className="rounded-full aspect-square w-full max-w-96 object-cover mb-9 md:mb-0" />
      <section className="max-w-md w-full">
        <h2 className="text-2xl font-medium mb-5 ">Frontendutvecklare</h2>
      </section>            
    </>
  );
}

export default Home;
