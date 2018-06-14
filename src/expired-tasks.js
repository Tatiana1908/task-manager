import { getExpiredTasks, removeTask as removeTaskApi } from './api'
import { handleApiCall } from './utils'
import tasksBlock from './tasks-list'

export default function expiredTasks() {
    let currentOpenExpiredTaskModal = 0;
    let expiredTasksList = [];
    let overlay = document.querySelector('.expired-tasks-overlay');

    function init() {
        handleApiCall(getExpiredTasks, tasks => {
            if (!tasks.length) {
                overlay.classList.remove('visible');
                return;
            }
            overlay.classList.add('visible');
            expiredTasksList = tasks;

            renderCurrent(tasks)
        })
    }

    function renderCurrent() {
        overlay.innerHTML= '';
        let modal = document.createElement('div');
        modal.classList.add('expired-tasks-modal');
        modal.innerHTML = `<span class="number">${currentOpenExpiredTaskModal + 1}</span>
                <span class="prev">Prev</span>
                <span class="next">Next</span>
                <span class="description">${expiredTasksList[currentOpenExpiredTaskModal].description}</span>
                <button class="remove-task">Remove</button>`

        overlay.appendChild(modal)
        controlBtnsListeners();
        listenerOnRemoveTask();
    }

    function controlBtnsListeners(){
        let nextBtn = document.querySelector('.expired-tasks-modal .next');
        if(expiredTasksList.length == 1){
            nextBtn.classList.add('hidden')
        }
        let prevBtn = document.querySelector('.expired-tasks-modal .prev');
        prevBtn.classList.add('hidden');

        prevBtn.addEventListener('click', () => {
            if( currentOpenExpiredTaskModal > 0 ){
                currentOpenExpiredTaskModal--;
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
                if (currentOpenExpiredTaskModal == 0){
                    prevBtn.classList.add('hidden')
                }
                renderCurrent();
            }
        });

        nextBtn.addEventListener('click', () => {
            if( currentOpenExpiredTaskModal < expiredTasksList.length - 1 ){
                currentOpenExpiredTaskModal++;
                nextBtn.classList.remove('hidden');
                prevBtn.classList.remove('hidden');

                if (currentOpenExpiredTaskModal == expiredTasksList.length - 1){
                    nextBtn.classList.add('hidden')
                }

                renderCurrent();
            }
        });
    }

    const getCurrentOpenedTaskId = () => expiredTasksList[currentOpenExpiredTaskModal].id;
    const removeTask = () => removeTaskApi(getCurrentOpenedTaskId());

    function removeButtonClickHandler() {
        handleApiCall(removeTask, () => {
            init();
            tasksBlock().init()
        })
    }

    function listenerOnRemoveTask() {
        let removeBtn = document.querySelector('.remove-task');
        removeBtn.addEventListener('click', removeButtonClickHandler)
    }

    return {
        init
    }
}
