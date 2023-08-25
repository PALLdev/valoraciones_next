'use client'

import React, { useState } from "react"
import data from "@/data.json"

const questions: Question[] = data.preguntas;

export default function Home() {

  const [answers, setAnswers] = useState<Answer[]>([])

  // comienza vacio (length 0), por lo que muestra la primera pregunta
  const currentQuestion = questions[answers.length]

  function handleRate(event: React.ChangeEvent<HTMLSelectElement>) {
    const answerRate = Number(event.target.value) as Answer['valoracion']

    setAnswers((currentAnswers) =>
      currentAnswers.concat({ ...currentQuestion, valoracion: answerRate })
    )
  }

  return (
    <main>
      {
        answers.length > questions.length - 1 && !currentQuestion
          ? <>
            <div>Encuesta Completada</div>
            <ul>
              {
                answers.map(answer => (
                  <li key={answer.id}>{answer.texto} - <span>{answer.valoracion}</span></li>
                ))
              }
            </ul>
          </>
          : <>
            <h1>{currentQuestion.texto}</h1>
            <select name="" id="" onChange={handleRate}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </>
      }
    </main>
  )
}

