import { useSelector } from 'react-redux';

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case 'active':
            return tasks.filter((task) => !task.completed);
        case 'completed':
            return tasks.filter((task) => task.completed);
        default:
            return tasks;
    }
}


const TaskList = () => {

    // Tasks Listesini Al
    const tasks = useSelector((state) => state.tasks.items)
    console.log("TaskList rendered with tasks:", tasks);

    const statusFilter = useSelector((state) => state.filters.status);
    console.log("TaskList rendered with statusFilter:", statusFilter);

    const visibleTasks = getVisibleTasks(tasks, statusFilter)

    return (
        <ul>
            {visibleTasks.map((task, index) => {
                return (
                    <li key={index} style={{ width: '100%' }}>
                        <b style={{ display: 'inline', marginInline: 10 }}>{task.id}</b>
                        <p style={{ display: 'inline', marginInline: 10 }}>{task.text}</p>
                    </li >
                )
            })}
        </ul >
    )
}

export default TaskList;