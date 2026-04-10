import { useEffect } from "react";
import contactImg from "/images/20250430_190711_2.jpg";

function Contact() {
  useEffect(() => {
    document.title = "Kontakt";
  }, []);

  return (
    <>
      <img src={contactImg} alt="Min kontaktbild" className="rounded-full w-96 h-96 object-cover mb-9 md:mb-0" />
      <section className="max-w-md w-full">
        <h2 className="text-xl font-medium mb-6">Kontakta mig</h2>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">Har du frågor eller vill nätverka? Kontakta mig gärna via 
          <a href="https://www.linkedin.com/in/larsson-johanna" target="_blank" rel="noopener noreferrer" className="text-pink-400"> LinkedIn</a>!
        </p>          
      </section>
    </>    
  );
}

export default Contact;
