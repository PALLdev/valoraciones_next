"use client";

import React, { useState } from "react";
import data from "@/data.json";

const questions: Question[] = data.preguntas;

export default function Home() {
  const [answers, setAnswers] = useState<Answer[]>([]);

  // comienza vacio (length 0), por lo que muestra la primera pregunta
  const currentQuestion = questions[answers.length];

  function handleRate(rating: Answer["valoracion"]) {
    setAnswers((currentAnswers) =>
      currentAnswers.concat({ ...currentQuestion, valoracion: rating })
    );
  }

  return (
    <>
      {answers.length > questions.length - 1 && !currentQuestion ? (
        <div className="rounded-md border p-4">
          <h2 className="text-3xl pb-4 text-center">Tus Respuestas</h2>
          <ul>
            {answers.map((answer) => (
              <li
                className="flex items-center justify-between text-2xl p-2"
                key={answer.id}
              >
                <span className="">{answer.texto}</span>
                <span>
                  <Rating
                    value={answer.valoracion}
                    isReadOnly={true}
                    onChange={() => {}}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center text-2xl">
          <h1 className="pb-2">{currentQuestion.texto}</h1>
          <Rating value={1} onChange={handleRate} isReadOnly={false} />
        </div>
      )}
    </>
  );
}

// ☆ ★
function Rating({ value, onChange, isReadOnly }: RatingProps) {
  const [hoverValue, setHoverValue] = useState(value);
  const pointerClass = !isReadOnly ? "cursor-pointer" : "cursor-default";

  return "★"
    .repeat(hoverValue)
    .padEnd(5, "☆")
    .split("")
    .map((star, index) => (
      <span
        key={index}
        onClick={() =>
          !isReadOnly && onChange((index + 1) as Answer["valoracion"])
        }
        onMouseOver={() =>
          !isReadOnly && setHoverValue((index + 1) as Answer["valoracion"])
        }
        onMouseLeave={() => !isReadOnly && setHoverValue(value)}
        className={`text-amber-300 ${pointerClass}`}
      >
        {star}
      </span>
    ));
}
