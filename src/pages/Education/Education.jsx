import { useEffect } from "react";

function Education() {
  useEffect(() => {
    document.title = "Utbildning";
  }, []);

  return (
    <>
      <h1>Education page</h1>
    </>
  );
}

export default Education;
