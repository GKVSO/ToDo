/** @module ToDo */
export {ToDo as default};

import workProjects from "./ToDo/workProjects.js";
import workTasks from "./ToDo/workTasks.js";
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
     * @type {Map}
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
}

Object.assign(ToDo.prototype, workTasks, workProjects, workTags)