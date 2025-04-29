import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Kontakt";
  }, []);

  return (
    <>
      <h1>Contact page</h1>
    </>
  );
}

export default Contact;
