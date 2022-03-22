import "./App.css";
import { useState } from "react";

export default function App() {

    const[name, setName] = useState("");
    const[printedName, setPrintedName] = useState("");
    const[flagShowName, setFlagShowName] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleShowName = () => {
        setFlagShowName(true);
        setPrintedName(name);
        setName("");
    }

    return (
        <div>
            <h1>React example</h1>
            <div>
                <h3>write your name here</h3>
                <input type="text" placeholder="name" value={name} onChange={handleNameChange} />
                {
                    name == "" ?
                    <button onClick={handleShowName} disabled>Show name</button>
                    :
                    <button onClick={handleShowName}>Show name</button>
                }
                <p>
                   {
                       flagShowName ? printedName : "here will be your name"
                   }
                </p>
            </div>
        </div>
    );
}
