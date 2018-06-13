import request from './serverRequest'
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



export default class Task{
    constructor(){
        this.taskWrap = document.querySelector('.task-wrapper');
    }
    init(){
        let options = { method: 'get' }
        let req = request('http://localhost:3000/tasks', options, (req) => {
            this.taskWrap.innerHTML = '';
            for(let i = 0; i < req.length; i++){
                this.render(req[i])
            }
        }, () => {
            this.taskWrap.innerHTML = '';
        })
        req()
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
    
        setInterval(() => {
            let hours = (time - Date.now()) / 3600000 ;
            let minutes = ((time - Date.now()) % 3600000) / 60000;
            let seconds = (((time - Date.now()) % 3600000) % 60000) / 1000;
            timerDOM.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`
        }, 500)
    }
    listenersOnRemove(btn){
        btn.addEventListener('click', () => {
            let id = btn.closest('.task-item').id;
            let options = { method: 'delete'}
            // let newTaskList = this.tasks.filter( task => task.id != card.id);

            // sessionStorage.setItem('tasks', JSON.stringify(newTaskList));

            let req = request(`http://localhost:3000/tasks/${id}`, options, 
            (req) => {
                this.init()
            }, () => {
                this.taskWrap.innerHTML = 'Error';
            })
            req()
        })
    }
}