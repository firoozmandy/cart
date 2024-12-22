import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IPeople } from "../App";

interface IProps {
  people: IPeople;
  peoples: IPeople[];
  setPeoples: Dispatch<SetStateAction<IPeople[]>>;
}

const Edit: FC<IProps> = ({ people, peoples, setPeoples }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>(people.fullName);
  const [age, setAge] = useState<string | number>(people.age);
  const [imag, setImag] = useState<string>(people.imag);
  const [bio, setBio] = useState<string | undefined>(people.bio);

  const handelSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const persons = [...peoples];
    const index: number = persons.findIndex((p) => p.id === people.id);
    persons[index] = {
      id: people.id,
      fullName,
      age: Number(age),
      imag,
      bio,
    };
    setPeoples(persons);
    setIsShowModal(false);
  };

  return (
    <>
      <FaUserEdit
        size={30}
        className="mx-80"
        onClick={() => setIsShowModal(true)}
      />

      {isShowModal && (
        <div className="mx-72 my-10 overflow-x-hidden overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-pink-500 rounded-lg shadow dark:bg-gray-700">
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {people.fullName}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <form
                    className="max-w-lg mx-auto"
                    onSubmit={(e) => handelSubmit(e)}
                  >
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

                    <button
                      type="submit"
                      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit person
                    </button>
                    <button
                      type="submit"
                      className="text-white mx-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => setIsShowModal(false)}
                    >
                      close
                    </button>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Edit;
