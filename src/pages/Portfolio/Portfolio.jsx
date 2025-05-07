import { useEffect } from "react";
import TicTacToe from "../../components/TicTacToe/TicTacToe";

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="my-11 flex flex-col lg:flex-row items-center justify-center md:space-x-10 lg:space-x-28">
        <h2 className="text-xl font-medium mb-6 lg:mb-0 text-nowrap">Portfolio</h2>

        <TicTacToe />
      </div>
    </div>
  );
}

export default Portfolio;
