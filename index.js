;(function(){
    // let addTaskBtn = document.querySelector('.add-task-btn'),
    //     overlay = document.querySelector('.add-task-overlay'),
    //     modal = document.querySelector('.add-task-modal'),
    //     cancelBtn = document.querySelector('.cancel-create-task'),
    //     addNewData = document.querySelector('.conf-create-task'),
    //     inputs = document.querySelectorAll('.new-task-data'),
    //     errorBlock = document.querySelector('.error');
    // addTaskBtn.addEventListener('click', () => {
    //     toggleModal()
    // });
    // overlay.addEventListener('click', () => {
    //     toggleModal()
    // });
    // cancelBtn.addEventListener('click', () => {
    //     toggleModal()
    // });
    // modal.addEventListener('click', (e) => {
    //     e.stopPropagation()
    // });
    // addNewData.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     let correct = true;
    //     inputs.forEach( input => {
    //         if(!input.value){
    //             error('All fields must be fill');
    //             correct = false
    //         }else if(input.name === 'date'){
    //             let date = new Date(input.value);
    //             console.log(Date.now()> Date.parse(date));
    //             if (!Date.parse(date) || (Date.now() < Date.parse(date))){
    //                 console.log(Date.now(), correct);
    //                 error('Incorrect format of date')
    //                 correct = false
    //             }
    //         }
    //     });
    //     if(correct){
    //         toggleModal();
    //         errorBlock.textContent = '';
    //     }
    // });
    // function error(errorText){
    //     errorBlock.textContent = errorText;
    // }
    // function toggleModal(){
    //     overlay.classList.toggle('visible')
    // }

}());
class Modal {
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
        })
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
            correct = false
        }
        if (correct) {
            this.toggleModal();
            this.errorBlock.textContent = '';
            let newTask = new Task(taskDesc, Date.parse(date));
            newTask.render();
        }
    }
    toggleModal(){
        this.overlay.classList.toggle('visible')
    }
    error(errorText){
        this.errorBlock.textContent = errorText;
    }
}
let modal = new Modal;
modal.init();

class Task{
    constructor( desc, time){
        this.desc = desc;
        this.time = time;
        this.taskWrap = document.querySelector('.task-wrapper')

    }
    render(){
        let card = document.createElement('div');
        card.classList.add('task-item');
        card.innerHTML = `<span class="task-desc">${this.desc} </span> <span class="time"></span><span class="remove-item-btn"><i class="fas fa-trash"></i></span>`;
        this.taskWrap.appendChild(card);
        this.timer(card)
    }

    timer(card) {
        let time = card.querySelector('.time');
        setInterval(() => {
            let hours = (this.time - Date.now()) / 3600000 ;
            let minutes = ((this.time - Date.now()) % 3600000) / 60000;
            let seconds = (((this.time - Date.now()) % 3600000) % 60000) / 1000;
            time.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`
        }, 500)
    }
}