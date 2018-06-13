
import {Modal} from './modal'
import Task from './task'

import './style.css'

let modal = new Modal;
modal.init();

let tasks = new Task();
tasks.init()