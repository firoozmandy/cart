import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IPeople } from "../App";

interface IProps {
  peoples: IPeople[];
  setPeoples: Dispatch<SetStateAction<IPeople[]>>;
}

const AddPeoples: FC<IProps> = ({ peoples, setPeoples }) => {
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [imag, setImag] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handelReset = (): void => {
    setFullName("");
    setAge("");
    setImag("");
    setBio("");
  };

  const handelSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setPeoples([
      ...peoples,
      {
        id: Math.floor(Math.random() * 1000000),
        fullName,
        age: Number(age),
        imag,
        bio,
      },
    ]);
    handelReset();
  };

  return (
    <div className="mx-auto w-2/3">
      <form className="max-w-lg mx-auto" onSubmit={(e) => handelSubmit(e)}>
        <div className="mb-2">
          <input
            type="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name & LastName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="age"
          />
        </div>
        <div className="mb-2">
          <input
            type="img"
            id="img"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={imag}
            onChange={(e) => setImag(e.target.value)}
            placeholder="ImageUrl"
          />
        </div>
        <div className="mb-2">
          <input
            type="yourself"
            id="yourself"
            className="h-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="about yourself"
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to list
        </button>
      </form>
    </div>
  );
};

export { AddPeoples };
