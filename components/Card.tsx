import SetterButton from "../islands/SetterButton.tsx";


interface CardProps {
    name: string;
    key: number;
    setState: (state: string) => void;
    image: string;
}

export default function Card(props: CardProps){

    const { name, setState } = props
    const handleClick = () => {
        setState(name)
    }

     return (
        <>
            <div className="hover:scale-110 transform transition duration-300 ease-in-out w-[20rem] h-[12rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="grid grid-rows-2 h-full">
  <div className="row-span-1"> {/* Take up one row */}
    <h5 className="text-center mb-2 mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.key}{props.name}
    </h5>
  </div>
  <div className="row-span-1 flex justify-center items-center"> {/* Take up one row */}
    <SetterButton color={'bg-green-300'} label={"Favorite"} handleClick={handleClick} />
    <SetterButton color={'bg-red-500'} label={"Hate it"} handleClick={handleClick} />
  </div>
</div>

            </div>
        </>
    )
}