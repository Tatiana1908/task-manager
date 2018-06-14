
import {Modal} from './modal'
import tasksList from './tasks-list'
import timeOverTask from './expired-tasks'

import './css/fontawesome.css'

import './css/style.css'


let modal = new Modal;
modal.init();

tasksList().init();
// timeOverTask().renderExpiredTasks();
