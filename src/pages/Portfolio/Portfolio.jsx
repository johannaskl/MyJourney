import { useEffect } from "react"

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

    return (
      <>
        <h1>Portfolio page</h1>
      </>
    )
  }
  
  export default Portfolio;