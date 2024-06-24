/** @module ToDo */
export {ToDo as default};

import workProjects from "./ToDo/workProjects.js";
import workTags from "./ToDo/workTags.js";
import Task from "./Task.js";

/**
 * Конструктор для создания ToDo
 *
 * @param {string} name - Название todo
 * */
class ToDo {
    /**
     * Объект для хранения задач
     *
     * @type {Object}
     * @private
     * */
    _taskList = {};

    constructor(name) {
        this.name = name;
    }

    /**
     * Добавляет задачу в список задач
     * @param {object} task - Объект задачи ( Экземпляр класса Task )
     * @param {String} idTask - Уникальный идентификатор
     * */
    addTaskList(task, idTask) {
        this._taskList[idTask] = task;
    }

    /**
     * Создате задачу
     * @param {string} name - Имя задачи
     * @param {object} params - Парраметры задачи
     * */
    createTask(name, params) {
        const task = new Task(name, params)
        this.addTaskList(task, task.id)
    }

    /**
     * Удаляет задачу из списка задач
     * @param {string} idTask - Идентификатор задачи
     * */
    deleteTask(idTask) {
        delete this._taskList[idTask];
    }

    /**
     * Изменятет парамметры задачи
     * @param {string} idTask - Идентификатор задачи
     * @param {object} params - Объект с парамметрами задачи
     * */
    editTask(idTask, params) {
        Object.assign(this._taskList[idTask], params);
    }

    /**
     * Возвращает объект задачи
     * @param {string} idTask - Идентификатор задачи
     * @return {object} - Возращает объект задачи
     * */
    getTask(idTask) {
        return this._taskList[idTask];
    }

    /**
     * Возращает массив с объектами задач
     * @return {array} - Массив с объектами задач
     * */
    getTaskList() {
        return Object.values(this._taskList);
    }

    /**
     * Возращает массив с объектами задач c указанными парамметрами
     * @param {object} filters - Объект с ключами по которым будут искаться задачи
     * @param {object} params - Объект с парамметрами поиска
     * @param {string} params.strong - and | or | andNot | andOr
     * */
    getTasks(filters = false, {
        strong = 'or'
    }) {
        if(filters === false) return this.getTaskList();

        function or() {
            const result = arrTasks.filter((task) => {
                const arrFilters = Object.entries(filters);

                return arrFilters.some((el) => {
                    const [key, value] = el;

                    return task[key] == value;
                })
            })

            return result;
        }

        function and() {
            const result = arrTasks.filter((task) => {
                const arrFilters = Object.entries(filters);

                return arrFilters.every((el) => {
                    const [key, value] = el;

                    return task[key] == value;
                })
            })

            return result;
        }

        function orNot() {
            const result = arrTasks.filter((task) => {
                const arrFilters = Object.entries(filters);

                return arrFilters.some((el) => {
                    const [key, value] = el;

                    return task[key] !== value;
                })
            })

            return result;
        }

        function andNot() {
            const result = arrTasks.filter((task) => {
                const arrFilters = Object.entries(filters);

                return arrFilters.every((el) => {
                    const [key, value] = el;

                    return task[key] !== value;
                })
            })

            return result;
        }

        const arrTasks = Object.values(this._taskList);
        let resultTasks;

        switch (strong) {
            case 'or':
                resultTasks = or();
                break;
            case 'and':
                resultTasks = and();
                break;
            case 'orNot':
                resultTasks = orNot();
                break;
            case 'andNot':
                resultTasks = andNot();
                break;
            default:
                resultTasks = or();
                break;
        }

        return resultTasks;
    }

    getTask(filters, {
        strong = 'or'
    }) {
        function or() {
            for(const task of arrTasks) {
                const isMatch = arrFilters.some((el) => {
                    const [key, value] = el;

                    return task[key] == value;
                })

                if(isMatch) return task;
            }

            return undefined;
        }

        function and() {
            for(const task of arrTasks) {
                const isMatch = arrFilters.every((el) => {
                    const [key, value] = el;

                    return task[key] == value;
                })

                if(isMatch) return task;
            }

            return undefined;
        }

        function orNot() {
            for(const task of arrTasks) {
                const isMatch = arrFilters.some((el) => {
                    const [key, value] = el;

                    return task[key] !== value;
                })

                if(isMatch) return task;
            }

            return undefined;
        }

        function andNot() {
            for(const task of arrTasks) {
                const isMatch = arrFilters.every((el) => {
                    const [key, value] = el;

                    return task[key] !== value;
                })

                if(isMatch) return task;
            }

            return undefined;
        }

        const arrTasks = Object.values(this._taskList);
        const arrFilters = Object.entries(filters);
        let resultTask;

        switch (strong) {
            case 'or':
                resultTask = or();
                break;
            case 'and':
                resultTask = and();
                break;
            case 'orNot':
                resultTask = orNot();
                break;
            case 'andNot':
                resultTask = andNot();
                break;
            default:
                resultTask = or();
                break;
        }

        return resultTask;
    }
}

Object.assign(ToDo.prototype, workProjects, workTags)