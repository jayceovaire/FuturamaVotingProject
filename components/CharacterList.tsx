import Card from "../islands/Card.tsx";
import {CharacterList} from "../static/characterList.ts";

interface CharListProps {
    characters: CharacterList
    setCharacter: (character: string) => void
    setHoverState: (state: number) => void

}

export default function CharacterListComponent(props: CharListProps){

    const {characters, setCharacter, setHoverState} = props

    return (
        <div className={"grid grid-cols-4 gap-2"}>
            {characters.map((character) => (
                <Card key={NaN} name={character.name} setState={setCharacter} setHoverState={setHoverState} image={character.imageUrl}  />
            ))}
        </div>
    )
}