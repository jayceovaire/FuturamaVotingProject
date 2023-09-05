import {FunctionComponent} from "https://esm.sh/v118/preact@10.15.1/src/index.d.ts";

interface IslandButtonProps {
  label: string;
  color: string;
  handleClick: () => void;
}

const SetterButton: FunctionComponent<IslandButtonProps> = ({ label, color, handleClick }) => {

  return (
    <button className={`w-[8rem] min-size-md hover:border-white text-center m-1 rounded-lg bg-red-200 px-2 py-1 border-gray-600 border-4 ${color}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default SetterButton;




