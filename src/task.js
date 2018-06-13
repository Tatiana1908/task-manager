import request from './serverRequest'
import { getTasks } from './api'
import { handleApiCall } from './utils'
// import getTasks 

// components/card

// export default function createTask() {
//     let desc = task.description,
//             time = Date.parse(task.date);
    
//     const card = document.createElement('div');
//     card.classList.add('task-item');

//     card.id = task.id;
//     card.innerHTML = `<span class="task-desc">${desc}</span> <span class="time"></span>`;

//     return card
// }



// render() {
//     const task = createTask(data)
//     setTask(task)
// }

const msInHour = 3600000;
const msInMinute = 60000;
const msInSecond = 1000;

export default class Task{
    constructor(){
        this.taskWrap = document.querySelector('.task-wrapper');
    }
    init(){
        // let options = { method: 'get' }
        // let req = request('http://localhost:3000/tasks', options, (tasks) => {
        //     this.taskWrap.innerHTML = '';
        //     tasks.forEach(task => this.render(task))
        // }, () => {
        //     this.taskWrap.innerHTML = '';
        // })
        // req()
        // getTasks()
        //     .then(tasks => tasks.json())
        //     .then(tasks => tasks.forEach(task => this.render(task)))
        handleApiCall(getTasks, tasks => tasks.forEach(task => this.render(task)))
        // const tasks = getTasks()
        // tasks.forEach(this.render)
       
    }
    render(task){
        let desc = task.description,
            time = Date.parse(task.date);
           
        let card = document.createElement('div');
        card.classList.add('task-item');
        card.id = task.id;
        card.innerHTML = `<span class="task-desc">${desc}</span> <span class="time"></span>`;
        let busket = document.createElement('span');
        busket.classList.add('remove-item-btn');
        busket.innerHTML = '<i class="fas fa-trash"></i>';

        card.appendChild(busket)
        this.taskWrap.appendChild(card);

        this.timer(card, time);
        this.listenersOnRemove(busket, card);
    }
    timer(card, time) {
        let timerDOM = card.querySelector('.time');
        timerDOM.innerHTML = 'wait';
    
        setInterval(() => {
            let hours = (time - Date.now()) /  msInHour;
            let minutes = ((time - Date.now()) % msInHour) / msInMinute;
            let seconds = (((time - Date.now()) % msInHour) % msInMinute) / msInSecond;
            timerDOM.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`
        }, 1000)
    }
    listenersOnRemove(btn){
        btn.addEventListener('click', () => {
            let id = btn.closest('.task-item').id;
            let options = { method: 'delete'}
            let req = request(`http://localhost:3000/tasks/${id}`, options, 
            (req) => {
                this.init()
            }, () => {
                console.log('ERR')
            })
            req()
        })
    }
}