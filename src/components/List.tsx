import { Dispatch, FC, SetStateAction } from "react";
import { IPeople } from "../App";
import { AiOutlineUserDelete } from "react-icons/ai";
import "../assets/css/style.css";
import Edit from "./Edit";

interface IProps {
  peoples: IPeople[];
  setPeoples: Dispatch<SetStateAction<IPeople[]>>;
}
const List: FC<IProps> = ({ peoples, setPeoples }) => {
  const handelDelete = (id: number): void => {
    const person: IPeople[] = [...peoples];
    const filter: IPeople[] = person.filter((p) => p.id !== id);
    setPeoples(filter);
  };

  return (
    <div className="flex flex-wrap ">
      {peoples.map((people) => (
        <div className="lg:w-1/2 h-28 mb-2 mt-3" key={people.id}>
          <div className="card">
            <div className="flex flex-row border-2 border-inherit gap-x-8  ">
              <img className="w-20 " src={people.imag} alt={people.fullName} />
              <div>
                <p>
                  <span>{people.fullName}</span>
                </p>
                <p>
                  <span>{people.age}</span>
                </p>
                <p>{people.bio}</p>
              </div>
              <div className="">
                <Edit
                  people={people}
                  peoples={peoples}
                  setPeoples={setPeoples}
                />
                <AiOutlineUserDelete
                  size={30}
                  className="mx-80"
                  onClick={() => handelDelete(people.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
