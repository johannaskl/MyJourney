import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    document.title = "Yrkesbakgrund";
  }, []);

  return (
    <>
      <h1>Experience page</h1>
    </>
  );
}

export default Experience;
