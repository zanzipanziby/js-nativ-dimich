import {ChangeEvent} from "react";

const User = () => {

    const deleteUser = () => {
        alert('User deleted')
    }
    const saveUser = () => {
        alert('User deleted')
    }
    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }
    const focusLOstHandler = () => {
        console.log("focus lost")
    }
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLOstHandler}>Dimych</textarea>
            <input type="number" onChange={onAgeChanged}/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}