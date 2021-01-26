import React, {useState, useEffect} from 'react';
import Input from "./Components/Input";
import List from "./Components/List";
import Plus from "./Components/Plus";
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [addNewInput, setAddNewInput] = useState(false);
    useEffect(() => {
        getData();
    }, []);


    function getData() {
        let items = JSON.parse(localStorage.getItem("todos"));
        if (items) {
            setItems(items);
        }
    }



    return (
        <div className="container">
            <div>
                    <h3>ToDoList</h3>
            </div>
            <div className="marginTop10">
            {items.map(item => <List
                item={item}
                updateList={getData}
            />
            )}
            </div>

            {addNewInput && <Input
                updateList={getData}
                addNewInput={() => {setAddNewInput(true)}}
                hideInput={() =>{setAddNewInput(false)}}
            />
            }

            <Plus click={() => setAddNewInput(true)}/>

            <br/>


        </div>
    );
}

export default App;
