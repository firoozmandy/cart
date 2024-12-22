import { useState } from "react";
import List from "./components/List";
import { AddPeoples } from "./components/AddPeoples";

export interface IPeople {
  id: number;
  fullName: string;
  age: number;
  imag: string;
  bio?: string;
}

function App() {
  const [peoples, setPeoples] = useState<IPeople[]>([
    {
      id: 1,
      fullName: "Mariam Firoozmandi",
      age: 23,
      imag: "../public/۲۰۲۴۰۲۲۸_۱۵۴۵۱۸.jpg",
      bio: "frontendDeveloper",
    },
  ]);

  return (
    <div className="mx-auto ">
      <h4 className="alert bg-pink-500 alert-info">مدیریت اشخاص</h4>
      <List peoples={peoples} setPeoples={setPeoples} />
      <AddPeoples peoples={peoples} setPeoples={setPeoples} />
    </div>
  );
}

export default App;
