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

    getAllTasks() {
        return this._taskList;
    }
}

Object.assign(ToDo.prototype, workProjects, workTags)