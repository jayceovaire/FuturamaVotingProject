import Card from "./Card.tsx";

interface CharListProps {
    characters: string[]
    setCharacter: (character: string) => void
}

export default function CharacterListComponent(props: CharListProps){

    const {characters, setCharacter} = props

    return (
        <>
            {characters.map((character) => (
                <Card key={NaN} name={character} setState={setCharacter}  />
            ))}
        </>
    )
}