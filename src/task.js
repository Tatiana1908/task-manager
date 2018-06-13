
import { removeTask} from './api'
import { handleApiCall } from './utils'
import tasksList from './tasks-list'

const msInHour = 3600000;
const msInMinute = 60000;
const msInSecond = 1000;

export default class Task{
    constructor(task) {
        this.taskWrap = document.querySelector('.task-wrapper');
        this.task = task;
    }
    renderTask(){
        let desc = this.task.description,
            time = Date.parse(this.task.date);
           
        let card = document.createElement('div');
        card.classList.add('task-item');
        card.id = this.task.id;
        card.innerHTML = `<span class="task-desc">${desc}</span> <span class="time"></span>`;
        let basket = document.createElement('span');
        basket.classList.add('remove-item-btn');
        basket.innerHTML = '<i class="fas fa-trash"></i>';

        card.appendChild(basket);
        this.taskWrap.appendChild(card);

        this.timer(card, time);
        this.listenerOnRemove(basket, card);
    }
    timer(card, time) {
        let timerDOM = card.querySelector('.time');
        timerDOM.innerHTML = 'wait';
    
        let interval = setInterval(() => {
            if ((time - Date.now()) > 0){
                let hours = (time - Date.now()) /  msInHour;
                let minutes = ((time - Date.now()) % msInHour) / msInMinute;
                let seconds = (((time - Date.now()) % msInHour) % msInMinute) / msInSecond;
                timerDOM.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`;
            }else{
                handleOnTimeOver()
            }
        }, 1000);
        interval();

        function handleOnTimeOver() {
            alert('time is over')
            clearInterval(interval)
        }
    }

    listenerOnRemove(btn){
        btn.addEventListener('click', () => {
            let id = btn.closest('.task-item').id;
            handleApiCall(removeTask(id), () => tasksList().init());
        })
    }
}