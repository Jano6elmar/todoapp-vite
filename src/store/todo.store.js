import { Todo } from '../todos/models/todo.models';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending : 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore')
}

const loadStore = () => {
    throw new Error ('Not implemented');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description) =>{ 
    throw new Error ('Not implemented');
};

/**
 * 
 * @param {String} todoID 
 */
const toggleTodo = ( todoID ) => {
    throw new Error ('Not implemented');
};

const deleteTodo = ( todoID ) => {
    throw new Error ('Not implemented');
};

const deleteCompleted = ( todoID ) => {
    throw new Error ('Not implemented');
};

const setFilter = (newFilter = Filters.All ) => {
    throw new Error ('Not implemented');

}



export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter
}