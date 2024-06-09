/**
 * Конструктор для создания задач
 * @constructor
 * @param {string} name - Заголовок задачи
 * @param {object|boolean} params               - Дополнительные параметры для задачи
 * @param {string|boolean} [params.project]     - Название проекта задачи
 * @param {string|boolean} [params.tag]         - Название метки задачи
 * @param {Date} [params.dateCreate]            - Дата создания задачи
 * @param {Date|boolean} [params.deadline]      - Срок выполнения задачи
 * @param {number} [params.importance]          - Важность задачи
 * @param {string|boolean} [params.description] - Описание задачи
 * @param {object|boolean} [params.subTask]     - Подзадачи
 * */
class Task {
    constructor(name, {
        project = false,
        tag = false,
        dateCreate = new Date,
        deadline = false,
        importance = 0,
        description = false,
        subTask = false
    } = false) {
        /**
         * @type {string}
         * */
        this.name = name;

        /**
         * @type {string|boolean}
         * */
        this.project = project;

        /**
         * @type {string|boolean}
         * */
        this.tag = tag;

        /**
         * @type {Date}
         * */
        this.dateCreate = dateCreate;

        /**
         * @type {Date}
         * */
        this.deadline = deadline;

        /**
         * @type {number}
         * */
        this.importance = importance;

        /**
         * @type {string|boolean}
         * */
        this.description = description;

        /**
         * @type {object|boolean}
         * */
        this.subTask = subTask;
    }
}


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
     * @type {Array}
     * @private
     * */
    _projectList = [];

    /**
     * Массив для хранения меток
     *
     * @type {Array}
     * @private
     * */
    _tagList = [];

    constructor(name) {
        this.name = name;
    }

    /**
     * Добавляет задачу в список задач
     * @param {object} task - Объект задачи ( Экземпляр класса Task )
     * */
    addTaskList(task) {

    }

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

    /**
     * Добавляет проект в список проектов
     * @param {string} project - Название проекта
     * */
    addProjectList(project) {

    }

    /**
     * Удаляет проект из списка проектов
     * @param {string} project - Название проекта
     * */
    deleteProject(project) {}

    /**
     * Изменятет проект
     * @param {string} project - Название проекта
     * @param {object} params - Объект с парамметрами проекта
     * @param {string} [params.name] - Новое название проекта
     * */
    editProject(project, params) {}

    /**
     * Создате проект
     * @param {string} name - Название проекта
     * */
    createProject(name) {}

    /**
     * Возвращает проект
     * @param {string} project - Название проекта
     * */
    getProject(project) {}


    /**
     * Добавляет метку в список меток
     * @param {string} project - Название метки
     * */
    addTagList(project) {

    }

    /**
     * Удаляет метку из списка меток
     * @param {string} project - Название метки
     * */
    deleteTag(project) {}

    /**
     * Изменятет метку
     * @param {string} project - Название метки
     * @param {object} params - Объект с парамметрами метки
     * @param {string} [params.name] - Новое название метки
     * */
    editTag(project, params) {}

    /**
     * Создате метку
     * @param {string} name - Название метки
     * */
    createTag(name) {}

    /**
     * Возвращает метку
     * @param {string} project - Название метки
     * */
    getTag(project) {}
}
