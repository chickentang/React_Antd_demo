import {combineReducers} from 'redux';
import visible from './search/setVisible';
import todos from './search/todos';
import newTaskName from './search/newTaskName';
import doHeader from './header/doHeader';
import thisModal from './header/thisModal';
import isVisible from './header/isVisible';
import isLoading from './header/isLoading';

const todoApp = combineReducers({
    todos,
    visible,
    thisModal,
    isVisible,
    isLoading,
    newTaskName,
    doHeader
});

export default todoApp;