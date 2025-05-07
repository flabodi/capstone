import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionItems = [
    {
      title: "AUTENTICITÀ ARTIGIANALE",
      content:
        "Ogni nostro drink è un omaggio alla vera arte della miscelazione, creato con passione e precisione, proprio come faremmo dietro al bancone del tuo cocktail bar preferito. Non usiamo scorciatoie, solo ricette autentiche e ingredienti di alta qualità",
    },
    {
      title: "SELEZIONE PREMIUM",
      content:
        "Utilizziamo solo ingredienti selezionati con cura, provenienti da fornitori di fiducia che condividono la nostra passione per la qualità. La differenza si sente in ogni sorso.",
    },
    {
      title: "GUSTO INCONFONDIBILE",
      content:
        "I nostri cocktail offrono un'esperienza sensoriale unica, con sapori bilanciati e profili aromatici complessi che soddisfano anche i palati più esigenti.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" accordeon-container d-flex flex-column justify-content-center  ">
      <div>
        {accordionItems.map((item, index) => (
          <div key={index}>
            <div>
              <div
                className=" border-bottom border-dark  mx-5"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="w-100">
                  {item.title}
                  <span
                    className={`float-end chevron ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    &gt;
                  </span>
                </h2>
              </div>
            </div>

            {activeIndex === index && (
              <div className="ms-5 imb-font w-50  accordeon-txt ">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
