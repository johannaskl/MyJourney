import { useEffect } from "react";
import contactImg from "/images/20250430_190711_2.jpg";

function Contact() {
  useEffect(() => {
    document.title = "Kontakt";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 ">
      <div className="my-11 flex flex-col sm:flex-row items-center justify-center sm:space-x-6">
        <img src={contactImg} alt="Min kontaktbild" className="rounded-full w-96 mb-9 md:mb-0" />
        <section>
          <h2 className="text-xl font-medium mb-6">Kontakta mig</h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10">Har du frågor eller vill nätverka? Kontakta mig gärna via 
            <a href="https://www.linkedin.com/in/larsson-johanna" target="_blank" rel="noopener noreferrer" className="text-pink-400"> LinkedIn</a>!
          </p>          
        </section>
      </div>
      
    </div>
    
  );
}

export default Contact;
