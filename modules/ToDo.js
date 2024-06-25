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

    static taskArrayToObject(taskArray) {
        const resultObject = {};

        for(const task of taskArray) {
            resultObject[task.id] = task;
        }

        return resultObject;
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
     * @param {Object} params - Объект с парамметрами поиска задач
     * @param {Object} params.filter - Объект с парамметрами фильтра
     * @param {Object|Boolean} params.filter.keysFilter - Ключи по которым будут фильроваться задачи
     * @param {String} params.filter.strong - Тип поиска and | or | andNot | andOr
     * @param {Object} params.sort - Парамметры для сортировки
     * @param {String} params.sort.sortDirection - Тип сортировки ascending | descending
     * @return {Object} - Возращает объект с задачами по типу {idTask:task}
     * */
    getTasks({
         filter = {},
         sort = {}
    } = {}) {
        const {keysFilter, strong= 'or'} = filter;
        const {sortDirection = 'ascending', param = 'name'} = sort;

        const isSort = Object.keys(sort).length == 0 ? false : true;
        const isFilter = Object.keys(filter).length == 0 ? false : true;

        let resultTasks;

        if(isFilter) {
            function or() {
                const result = arrTasks.filter((task) => {
                    const arrFilters = Object.entries(keysFilter);

                    return arrFilters.some((el) => {
                        const [key, value] = el;

                        return task[key] == value;
                    })
                })

                return result;
            }

            function and() {
                const result = arrTasks.filter((task) => {
                    const arrFilters = Object.entries(keysFilter);

                    return arrFilters.every((el) => {
                        const [key, value] = el;

                        return task[key] == value;
                    })
                })

                return result;
            }

            function orNot() {
                const result = arrTasks.filter((task) => {
                    const arrFilters = Object.entries(keysFilter);

                    return arrFilters.some((el) => {
                        const [key, value] = el;

                        return task[key] !== value;
                    })
                })

                return result;
            }

            function andNot() {
                const result = arrTasks.filter((task) => {
                    const arrFilters = Object.entries(keysFilter);

                    return arrFilters.every((el) => {
                        const [key, value] = el;

                        return task[key] !== value;
                    })
                })

                return result;
            }

            const arrTasks = Object.values(this._taskList);


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
        } else {
            resultTasks = this.getTaskList()
        }

        if(isSort !== false) {
            resultTasks = this.sort(resultTasks, {sortDirection, param})
        }

        return ToDo.taskArrayToObject(resultTasks);
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

        return ToDO.taskArrayToObject(resultTask);
    }

    /**
     * Метод для сортировки
     * @param {Array} taskArray - Массив с задачами
     * @param {Object} paramsSort - Объект с парамметрами сортировки
     * @param {String} paramsSort.param - Парамметр по которому будет производиться сортировка
     * @param {String} paramsSort.sortDirection - Указывает сортировка должна быть восходящая или убывающая : ascending | descending
     * @return {Object} Возращает объект с задачами по типу {idTask:task}
     * */
    sort(taskArray, paramsSort) {
        function ascending(a, b) {
            if(a > b) {
                return 1;
            } else if(a <  b) {
                return -1;
            } else {
                return 0;
            }
        }

        function descending(a, b) {
            if(a > b) {
                return -1;
            } else if(a <  b) {
                return 1;
            } else {
                return 0;
            }
        }

        return taskArray.sort((a, b) => {
            switch (paramsSort.sortDirection) {
                case 'ascending':
                    return ascending(a[paramsSort.param], b[paramsSort.param]);
                    break;
                case 'descending':
                    return descending(a[paramsSort.param], b[paramsSort.param]);
                    break;
                default:
                    return ascending(a[paramsSort.param], b[paramsSort.param]);
                    break;

            }
        })
    }
}

Object.assign(ToDo.prototype, workProjects, workTags)