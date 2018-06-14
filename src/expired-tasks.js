import { getExpiredTasks, removeTask as removeTaskApi } from './api'
import { handleApiCall } from './utils'
import tasksBlock from './tasks-list'

export default function timeOverTask() {
    let currentOpenExpiredTaskModal = 0;

    let overlay = document.querySelector('.expired-tasks-overlay');
    let descrEl = document.querySelector('.expired-tasks-overlay .description');
    let number = document.querySelector('.expired-tasks-overlay .number');
    
    let nextBtn = document.querySelector('.expired-tasks-modal .next');
    let prevBtn = document.querySelector('.expired-tasks-modal .prev');
    let removeBtn = document.querySelector('.remove-task');
    let expiredTasksList = [];
    let isRemoveListenerAdded = false;

    function init() {
        controlBtns()
        
    }
    function render() {
        currentOpenExpiredTaskModal = 0;
        handleApiCall(getExpiredTasks, tasks => {
            if (!tasks) {
                overlay.classList.remove('visible');
                return;
            }

            listenerOnRemoveTask()
            renderExpiredTasks(tasks) 
        })
    }

    function renderExpiredTasks(tasks) {
        if (!tasks.length) {
            return
        }

        expiredTasksList = tasks;
        overlay.classList.add('visible');
        renderCurrent()
    }

    const getCurrentOpenedTaskId = () => expiredTasksList[currentOpenExpiredTaskModal].id
    const removeTask = () => removeTaskApi(getCurrentOpenedTaskId())

    function removeButtonClickHandler() {
        handleApiCall(removeTask, () => {
            render()
            tasksBlock().init()
        })
    }

    function listenerOnRemoveTask() {
        if (!expiredTasksList || isRemoveListenerAdded) {
            return
        }

        isRemoveListenerAdded = true;
        removeBtn.addEventListener('click', removeButtonClickHandler)
    }
    function controlBtns(){
        nextBtn.addEventListener('click', () => {
    
            if( currentOpenExpiredTaskModal < expiredTasksList.length - 1 ){
                currentOpenExpiredTaskModal++;
                console.log(currentOpenExpiredTaskModal)
                renderCurrent()
                // nextBtn.classList.remove('hidden')
                // prevBtn.classList.remove('hidden')

            }
            // else if (i = expiredTasksList.length-1){
            //     nextBtn.classList.add('hidden')
            // }
        })
        prevBtn.addEventListener('click', () => {

            if( currentOpenExpiredTaskModal > 0 ){
                currentOpenExpiredTaskModal--;
                renderCurrent()
                // prevBtn.classList.remove('hidden')
                // nextBtn.classList.remove('hidden')
            }
            // else if (i = 0){
            //     prevBtn.classList.add('hidden')
            // }
        })
    }
    
    function renderCurrent(){

        descrEl.innerHTML = expiredTasksList[currentOpenExpiredTaskModal].description;
        number.innerHTML = `${currentOpenExpiredTaskModal +1}`
    }
 
    return {
        init,
        render
    }

}
