import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form" autoComplete="off">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} 
                    className="form-input"
                    type="text" 
                    id="item"
                />
            </div>
            <button className="btn btn-add">Add</button>
        </form>
    )
}