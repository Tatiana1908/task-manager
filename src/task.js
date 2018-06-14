
import { removeTask, updateTask } from './api'
import { handleApiCall,handleApiCallEnhancer } from './utils'
import tasksList from './tasks-list'
import expiredTaskModal from './expired-tasks'

const msInHour = 3600000;
const msInMinute = 60000;
const msInSecond = 1000;

export default class Task{

    constructor(task) {
        this.taskWrap = document.querySelector('.task-wrapper');
        this.task = task;
        this.desc = this.task.description,
        this.time = Date.parse(this.task.date);
        this.id = this.task.id;

    }

    renderTask(){
        let card = document.createElement('div');
        card.classList.add('task-item');
        card.id = this.task.id;
        card.innerHTML = `<span class="task-desc">${this.desc}</span> <span class="time"></span>`;
        let basket = document.createElement('span');
        basket.classList.add('remove-item-btn');
        basket.innerHTML = '+';

        card.appendChild(basket);
        this.taskWrap.appendChild(card);

        this.timer(card);
        this.listenerOnRemove(basket);
    }

    timer(card) {
        let timerDOM = card.querySelector('.time');
        timerDOM.innerHTML = 'wait';
    
       let interval =  setInterval(() => {
            if ((this.time - Date.now()) > 0){
                let hours = (this.time - Date.now()) /  msInHour;
                let minutes = ((this.time - Date.now()) % msInHour) / msInMinute;
                let seconds = (((this.time - Date.now()) % msInHour) % msInMinute) / msInSecond;
                return timerDOM.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`;
            }else{
                timerDOM.innerHTML = `00 : 00 : 00`;
                handleOnTimeOver(this.id)
            }
       }, 1000);

        function handleOnTimeOver(id) {
            clearInterval(interval);

            const apiCall = handleApiCallEnhancer(() => expiredTaskModal().init())

            apiCall(() => updateTask( {
                field: {expired: true},
                id: id
            }))
        }
    }

    listenerOnRemove(btn){
        btn.addEventListener('click', () => {
            let id = btn.closest('.task-item').id;
            handleApiCall(() => removeTask(id), () => tasksList().init());
        })
    }
}