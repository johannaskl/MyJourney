import { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "Johanna Larsson";
  }, []);

  return (
    <>
      <h1>Home page</h1>
    </>
  );
}

export default Home;
