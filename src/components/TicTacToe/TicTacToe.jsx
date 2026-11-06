import { useState } from "react";
import light from "/images/tic-tac-light.png";
import lightWin from "/images/tic-tac-light-win.png";
import dark from "/images/tic-tac-dark.png";
import darkWin from "/images/tic-tac-dark-win.png";

function TicTacToe() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageGroups = [
    {
      title: "Ljust tema",
      images: [
        { src: light, alt: "Tic-tac-toe ljust tema" },
        { src: lightWin, alt: "Tic-tac-toe vinst i ljust tema" },
      ],
    },
    {
      title: "Mörkt tema",
      images: [
        { src: dark, alt: "Tic-tac-toe mörkt tema" },
        { src: darkWin, alt: "Tic-tac-toe vinst i mörkt tema" },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageGroups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageGroups.length) % imageGroups.length);
  };

  return (
    <section className="text-base max-w-3xl mx-auto text-left space-y-3">

      {/* Beskrivning */}
      <div>
        <h3 className="font-semibold">Tre i rad</h3>
        <p className="text-base mt-2">
          Tic-Tac-Toe är ett klassiskt, interaktivt spel där användaren kan spela mot en dator. Datorn gör smarta drag baserat på strategiska överväganden, såsom att försöka vinna, blockera spelarens drag eller välja slumpmässiga drag om det inte finns
          någon omedelbar hotbild.
        </p>
      </div>

      {/* Funktioner */}
      <h4 className="font-semibold mt-4">Funktioner:</h4>
      <ul className="list-disc ml-6 text-base">
        <li>Spela mot datorn: Du spelar som X, medan datorn spelar som O.</li>
        <li>Smart dator: Datorn analyserar spelet och gör strategiska drag för att vinna eller blockera spelarens framsteg.</li>
        <li>Tema: Möjlighet att växla mellan mörkt och ljust tema.</li>
        <li>Automatisk vinstkontroll: Spelplanen övervakas automatiskt för att upptäcka vinnande kombinationer och avsluta spelet när någon vinner.</li>
        <li>Oavgjort: Om ingen vinner hanteras oavgjort korrekt.</li>
        <li>"Börja om"-knapp: Starta ett nytt spel enkelt.</li>
      </ul>

      {/* Teknologier */}
      <h4 className="font-semibold mt-4">Teknologier:</h4>
      <p className="text-base">JavaScript för spel-logik och interaktivitet. CSS för design och responsiv layout. HTML5 för strukturen.</p>

      {/* Bildspel */}
      <p className="mt-8">
        Bläddra bland skärmbilderna eller testa spelet här:{" "}
        <a href="https://johannaskl.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-xl">
          Spela Tic-Tac-Toe
        </a>
      </p>

      <div className="mt-4 rounded-xl p-4">

        {/* Bildspelets rubrik */}
        <h4 className="font-semibold text-center mb-4">
          {imageGroups[currentSlide].title}
        </h4>

        {/* Två bilder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {imageGroups[currentSlide].images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-[400px] w-auto h-auto
                  object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
        
        {/* Navigeringsknappar */}
        <div className="grid grid-cols-3 items-center mt-6">

          <div className="flex justify-start">
            <button onClick={prevSlide} aria-label="Föregående bilder" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z" />
              </svg>
            </button>
          </div>

          {/* Prickar */}
          <div className="flex justify-center gap-2">
            {imageGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Visa ${imageGroups[index].title}`}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                  currentSlide === index
                    ? "bg-pink-600"
                    : "bg-slate-50 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-end">
            <button onClick={nextSlide} aria-label="Nästa bilder" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z" />
              </svg>
            </button>
          </div>

        </div>      
      </div>
    </section>
  );
}

export default TicTacToe;
