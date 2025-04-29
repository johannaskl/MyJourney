import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Om mig";
  }, []);

  return (
    <>
      <h1>About page</h1>
    </>
  );
}

export default About;
