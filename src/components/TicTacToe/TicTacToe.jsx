import React, { useState } from "react";
import light from "/images/tic-tac-light.png";
import lightWin from "/images/tic-tac-light-win.png";
import dark from "/images/tic-tac-dark.png";
import darkWin from "/images/tic-tac-dark-win.png";

function TicTacToe() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="text-base max-w-xl mx-auto text-left sm:text-justify space-y-3">
      <div>
        <h3 className="font-semibold">Tre i rad</h3>
        <a href="https://johannaskl.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline text-sm">
          Spela Tic-Tac-Toe
        </a>
        <p className="text-base mx-auto">
          Tic-Tac-Toe är ett klassiskt, interaktivt spel där användaren kan spela mot en dator. Datorn gör smarta drag baserat på strategiska överväganden, såsom att försöka vinna, blockera spelarens drag eller välja slumpmässiga drag om det inte finns
          någon omedelbar hotbild.
        </p>
      </div>

      <h5 className="font-semibold mt-4">Funktioner:</h5>
      <ul className="list-disc ml-6 text-base mx-auto">
        <li>Spela mot datorn: Du spelar som X, medan datorn spelar som O.</li>
        <li>Smart dator AI: Datorn analyserar spelet och gör strategiska drag för att vinna eller blockera spelarens framsteg.</li>
        <li>Tema: Möjlighet att växla mellan ett mörkt och ljust tema för bättre användarupplevelse.</li>
        <li>Automatisk vinstkontroll: Spelplanen övervakas automatiskt för att upptäcka vinnande kombinationer och avsluta spelet när någon vinner.</li>
        <li>Oavgjort: Om ingen av spelarna vinner, hanteras oavgjort korrekt.</li>
        <li>"Börja om"-knapp: Starta ett nytt spel med ett enkelt knapptryck för att återställa spelet och börja om.</li>
      </ul>

      <h5 className="font-semibold mt-4">Teknologier:</h5>
      <p className="text-base mx-auto">JavaScript för spel-logik och interaktivitet. CSS för design och responsiv layout. HTML5 för strukturen.</p>

      {/* Bilder-galleri */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2">
        <img src={light} alt="Tic-tac-toe ljus tema" className="w-96 md:mb-0 cursor-pointer" onClick={() => handleClick(light)} />
        <img src={lightWin} alt="Tic-tac-toe vinst ljus tema" className="w-96 md:mb-0 cursor-pointer" onClick={() => handleClick(lightWin)} />
        <img src={dark} alt="Tic-tac-toe mörkt tema" className="w-96 md:mb-0 cursor-pointer" onClick={() => handleClick(dark)} />
        <img src={darkWin} alt="Tic-tac-toe vinst mörkt tema" className="w-96 md:mb-0 cursor-pointer" onClick={() => handleClick(darkWin)} />
      </div>

      {/* Om en bild är vald, visa den i större format */}
      {selectedImage && (
        <div className="fixed inset-0 bg-neutral-50/60 flex justify-center items-center" onClick={handleClose}>
           <div className="relative">
            {/* Stäng-knapp */}
            <button className="absolute top-2 right-4 text-white text-md cursor-pointer hover:text-pink-400"
              onClick={handleClose}>
              × stäng
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-80 lg:w-auto object-contain cursor-pointer shadow-2xl rounded-xl"
              onClick={(e) => e.stopPropagation()} // Hindra att man stänger bilden om man klickar på den
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default TicTacToe;
