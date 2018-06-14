
import { handleApiCall } from "./utils";
import { postTask } from "./api";
import tasksList from './tasks-list'

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

    }
    init(){
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
            e.preventDefault();
            this.inputValidate()
        });
    }
    inputValidate() {
        let correct = true,
            date = this.taskDate.value,
            taskDesc = this.taskDescr.value;

        if (!taskDesc || !date) {
            this.errorRender('All fields must be fill');
            correct = false;
        } else if (!Date.parse(date) || (Date.now() > Date.parse(date))) {
            this.errorRender('Incorrect format of date');
            correct = false;
        }
        if (correct) {
            let newTaskData = {
                description: taskDesc,
                date: date,
                id: Math.random()
            };

            this.errorBlock.textContent = '';

            handleApiCall(() => postTask(newTaskData), () => {
                tasksList().init();
                this.toggleModal();
            })
        }
    }
    toggleModal(){
        this.overlay.classList.toggle('visible')
    }
    errorRender(errorText){
        this.errorBlock.textContent = errorText;
    }
}