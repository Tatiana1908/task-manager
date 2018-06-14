
import { getTasksApi } from './api';
import { handleApiCall } from './utils';
import Task from './task';


export default function tasksList() {
    const init = () => {
        handleApiCall(getTasksApi, tasks => renderTasks(tasks))
    };
    function renderTasks(tasks) {
        const taskWrap = document.querySelector('.task-wrapper');
        taskWrap.innerHTML = '';
        console.log(tasks)

        tasks.forEach(task => {
            let newTask = new Task(task);
            newTask.renderTask();
        })
    }
    return {
        init,
    }

}
