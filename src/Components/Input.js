import React, {useEffect, useRef} from 'react';
const Input = ({updateList, hideInput, addNewInput}) => {
    const inputRef = useRef();

    function add(e) {
        if (e.keyCode === 13) {
            addNewItem();
            addNewInput();
        }
    }
useEffect(()=>{
    inputRef.current.focus();
},[]);
    function addNewItem() {
        let title = inputRef.current.value;
        if (!title.length) return;
        let data = [];
        let items = JSON.parse(localStorage.getItem("todos"));
        let text = {id: Date.now(), title};
        if (items) {

            items.map(g => {
                data.push(g);
            });
            data.push(text);
        } else {
            data.push(text);
        }

        localStorage.setItem("todos", JSON.stringify(data));
        inputRef.current.value = null;
        updateList();
        hideInput();
    }

    return (
        <div className="marginTop10">
            <div className="inline-block">
                <span className="fas fa-circle circles"></span>
            </div>
            <div className="inline-block marginLeft6">
                <input onBlur={addNewItem} type="text" className="border-less" ref={inputRef} onKeyDown={add}/>
            </div>
        </div>
    );
};

export default Input;