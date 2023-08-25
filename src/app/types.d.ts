type Question = {
    id: number
    texto: string
}

type Answer = Question & {
    valoracion: 1 | 2 | 3 | 4 | 5
}

type RatingProps = {
    value: Answer['valoracion'],
    onChange: (value: Answer['valoracion']) => void
    isReadOnly: boolean
}