/** @module ToDo */
export {ToDo as default};

import workProjects from "./ToDo/workProjects.js";
import workTags from "./ToDo/workTags.js";

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

    /**
     * Массив для хранения проектов
     *
     * @type {Set}
     * @private
     * */
    _projectList = new Set();

    /**
     * Массив для хранения меток
     *
     * @type {Set}
     * @private
     * */
    _tagList = new Set();

    constructor(name) {
        this.name = name;
    }

    /**
     * Добавляет задачу в список задач
     * @param {object} task - Объект задачи ( Экземпляр класса Task )
     * @param {String} idTask - Уникальный идентификатор
     * */
    addTaskList(task, idTask = undefined) {}

    /**
     * Удаляет задачу из списка задач
     * @param {string} idTask - Идентификатор задачи
     * */
    deleteTask(idTask) {}

    /**
     * Изменятет парамметры задачи
     * @param {string} idTask - Идентификатор задачи
     * @param {object} params - Объект с парамметрами задачи
     * */
    editTask(idTask, params) {}

    /**
     * Создате задачу
     * @param {string} name - Имя задачи
     * @param {object} params - Парраметры задачи
     * */
    createTask(name, params) {}

    /**
     * Возвращает объект задачи
     * @param {string} idTask - Идентификатор задачи
     * @return {object} - Возращает объект задачи
     * */
    getTask(idTask) {}
}

Object.assign(ToDo.prototype, workTasks, workProjects, workTags)