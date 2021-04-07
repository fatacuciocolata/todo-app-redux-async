import React, {useState, FormEvent } from "react"
import { useTodo } from "../hooks/useTodo"
import { Form } from "./common/Form"
import { InputText } from "./common/InputText"

export const AddTodo = () => {

    const [title, setTitle] = useState("")
    const { addTodo } = useTodo()
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodo(title)
        setTitle("")
    }

    return (
        <>
            <Form dataTestId="addtodo-form" handleSubmit={handleSubmit}>
                <InputText dataTestId="addtodo-input" onChange={setTitle} value={title} />
            </Form>
        </>
    )
}