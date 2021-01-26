import React, {useRef} from 'react';
import './style.css';

const List = ({item, updateList}) => {
    const inputRef = useRef();

    function doIt(e, item) {
        if (e.keyCode === 13) {
            update(item);
        }
        if (e.keyCode === 46 && e.shiftKey && e.ctrlKey) {
            remove(item);
        }
    }

    function update(item) {
        let items = JSON.parse(localStorage.getItem("todos"));
        let indexItem = items.findIndex(i => {
            return i.id === item.id;
        });
        if (indexItem > -1) {
            items[indexItem] = {id: item.id, title: inputRef.current.value};
            let data = [];
            data.push(...items);
            localStorage.setItem("todos", JSON.stringify(data));
            updateList();
        }
    }

    function remove(item) {
        let items = JSON.parse(localStorage.getItem("todos"));
        let data = items.filter(todo => {
            return todo.id !== item.id;
        });
        localStorage.setItem("todos", JSON.stringify(data));
        updateList();
    }

    return (
        <div className="marginTop10">
            <div className="inline-block">
                <span className="fas fa-circle circles"></span>
            </div>
            <div  className="inline-block marginLeft6" style={{position: "relative"}}>
                <input onBlur={()=>update(item)} className="border-less" type="text" defaultValue={item ? item.title : null} ref={inputRef}
                       key={item ? item.id : null} onKeyDown={(e) => doIt(e, item)}/>
            </div>
        </div>
    );
};

export default List;