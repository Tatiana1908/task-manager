
import {Modal} from './modal'
import tasksList from './tasks-list'

import './style.css'

let modal = new Modal;
modal.init();

tasksList().init();
