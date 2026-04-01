
const SelectedProject = ({project}) => {
    const {title,description,dueDate} = project
    console.log("date", dueDate)
    const formattedDate = new Date(dueDate).toLocaleDateString("en-US",{
        year: "numeric",
        month: "short",
        day: "2-digit"
    })
    return (
        <div className="w-160 mt-16 p-3">

            <header>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <button>Delete</button>
                </div>
                <p className="text-xl text-gray-400">{formattedDate}</p>
                <p>{description}</p>
                <hr className="text-gray-400 mt-2" />
            </header>
        </div>
    )
}

export default SelectedProject