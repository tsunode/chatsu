import { FormEvent, useState } from "react";
import { BsSend } from "react-icons/bs";

interface IInputSubmitProps {
  onSubmit: (value: string) => void;
  placeholder: string;
}

const InputSubmit = ({ onSubmit, placeholder }: IInputSubmitProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between rounded-xl bg-dark-2"
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="h-20 w-full rounded-2xl bg-dark-2 px-4 py-1 text-3xl text-white-1"
      />
      <button
        type="submit"
        className="rounded-bl-[64px] rounded-br-[9px] rounded-tr-[10px] bg-green-opacity-2 px-8 hover:bg-green-opacity-1"
      >
        <BsSend className="text-dark-2 hover:text-white-1" size={34} />
      </button>
    </form>
  );
};

export default InputSubmit;
