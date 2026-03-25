import React, { useRef } from 'react'
import Input from './Input'

const NewProject = ({ AddNewProject }) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()
    const fields = [
        {
            label: "Title",
            required: true,
            ref: titleRef,
        },
        {
            label: "Description",
            textarea: true,
            required: true,
            ref: descriptionRef,

        },
        {
            label: "Due Date",
            ref: dueDateRef,
            required: true,
            type: "date",
        }
    ]

    const handleSave = () => {
        
        const projectData = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: descriptionRef.current.value
        }
        AddNewProject(projectData)

        titleRef.current.value = "",
        descriptionRef.current.value = "",
        dueDateRef.current.value = ""
    }
    return (
        <div className='w-140 mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950 cursor-pointer'>Cancel</button></li>
                <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 cursor-pointer' onClick={handleSave}> Save</button></li>
            </menu>

            <div>
                {fields.map((items, index) => (
                    <Input key={index} {...items} ref={items.ref} />
                ))}
            </div>
        </div>
    )
}

export default NewProject