import { useEffect } from "react";
import TicTacToe from "../../components/TicTacToe/TicTacToe";

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-xl font-medium my-8">Portfolio</h2>
      <div className="my-5">       
        <TicTacToe />
      </div>
    </div>
  );
}

export default Portfolio;
