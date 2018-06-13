import request from './serverRequest'
import Task from './task'

export class Modal {
    constructor(){
        this.addTaskBtn = document.querySelector('.add-task-btn');
        this.overlay = document.querySelector('.add-task-overlay');
        this.modal = document.querySelector('.add-task-modal');
        this.cancelBtn = document.querySelector('.cancel-create-task');
        this.addNewData = document.querySelector('.conf-create-task');
        this.taskDescr = document.querySelector('.new-task-desc');
        this.taskDate = document.querySelector('.new-task-date');
        this.errorBlock = document.querySelector('.error');
        
        this.tasksArr = [];
    }
    init(){

        let req = request('http://localhost:3000/tasks', {method: 'get'}, 
        (req) => {
            this.tasksArr = req;
        }, () => {
            this.taskWrap.innerHTML = '';
        })
        req()

        this.addTaskBtn.addEventListener('click', () => {
            this.toggleModal()
        });
        this.overlay.addEventListener('click', () => {
            this.toggleModal()
        });
        this.modal.addEventListener('click', (e) => {
            e.stopPropagation()
        });
        this.cancelBtn.addEventListener('click', () => {
            this.toggleModal()
        });
        this.addNewData.addEventListener('click', (e) => {
            e.preventDefault()
            this.inputValidate()
        });
    }
    inputValidate() {
        let correct = true,
            date = this.taskDate.value,
            taskDesc = this.taskDescr.value;

        if (!taskDesc || !date) {
            this.error('All fields must be fill');
            correct = false;
        } else if (!Date.parse(date) || (Date.now() > Date.parse(date))) {
            this.error('Incorrect format of date');
            correct = false;
        }
        if (correct) {
            let newTaskData = {
                description: taskDesc,
                date: date,
                id: Math.random()
            };
    
            this.errorBlock.textContent = '';
            
            let req = request('http://localhost:3000/tasks', 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'post',
                    body: JSON.stringify(newTaskData)
                }, 
                (req) => {
                   
                    let newTask = new Task();
                    newTask.init();
                    this.toggleModal();
                
                }, () => {
                    console.log('err')
                }) 

            req();
    
        }
    }
    toggleModal(){
        this.overlay.classList.toggle('visible')
    }
    error(errorText){
        this.errorBlock.textContent = errorText;
    }
}