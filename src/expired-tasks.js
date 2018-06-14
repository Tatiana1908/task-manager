import { removeTimeOverTask, getTimeOverTasks , postTimeOverTasks} from './api'
import { handleApiCall } from './utils'
import tasksBlock from './tasks-list'

export default function timeOverTask() {
    let i;

    let overlay = document.querySelector('.expired-tasks-overlay');
    let descrEl = document.querySelector('.expired-tasks-overlay .description');
    let number = document.querySelector('.expired-tasks-overlay .number');
    
    let nextBtn = document.querySelector('.expired-tasks-modal .next');
    let prevBtn = document.querySelector('.expired-tasks-modal .prev');
    let removeBtn = document.querySelector('.remove-task');
    let tasksList = [];

    const addExpiredTask = (task) => {
        handleApiCall( () => postTimeOverTasks(task), renderExpiredTasks)
    };
    function renderExpiredTasks() {
        i = 0;

        handleApiCall(getTimeOverTasks, tasks => {
            console.log(tasks)

            if(tasks.length){
                tasksList = tasks;
                overlay.classList.add('visible');
                controlBtns()
                renderCurent()
                listenerOnRemoveTask()
            }
            
        })
     
    }
    function listenerOnRemoveTask() {
        removeBtn.addEventListener('click', () => {
            handleApiCall(() => removeTimeOverTask(tasksList[i].id), (e) => {
                e.preventDefault()
                console.log('remove')
                debugger
                tasksList = tasksList.filter(task => task.id != tasksList[i].id);
                console.log(tasksList)
                i = 0;
                if(tasksList.length){
                    renderCurent()
                }else{
                    overlay.classList.remove('visible');
                }
                // 
                // tasksBlock().renderTasks()
            } )
        })
    }
    function controlBtns(){
        nextBtn.addEventListener('click', () => {
               // debugger
            if( i < tasksList.length ){
                i++;
                renderCurent()
                // nextBtn.classList.remove('hidden')
                // prevBtn.classList.remove('hidden')

            }
            // else if (i = tasksList.length-1){
            //     nextBtn.classList.add('hidden')
            // }
        })
        prevBtn.addEventListener('click', () => {
            if( i > 0 ){
                i--;
                renderCurent()
                // prevBtn.classList.remove('hidden')
                // nextBtn.classList.remove('hidden')
            }
            // else if (i = 0){
            //     prevBtn.classList.add('hidden')
            // }
        })
    }
    
    function renderCurent(){

        descrEl.innerHTML = tasksList[i].description;
        number.innerHTML = `${++i}`
    }
 
    return {
        addExpiredTask,
        renderExpiredTasks
    }

}
