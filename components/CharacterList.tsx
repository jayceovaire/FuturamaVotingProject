import Card from "./Card.tsx";
import {CharacterList} from "../static/characterList.ts";

interface CharListProps {
    characters: CharacterList
    setCharacter: (character: string) => void
}

export default function CharacterListComponent(props: CharListProps){

    const {characters, setCharacter} = props

    return (
        <div className={"grid grid-cols-4 gap-2"}>
            {characters.map((character) => (
                <Card key={NaN} name={character.name} setState={setCharacter} image={character.imageUrl}  />
            ))}
        </div>
    )
}