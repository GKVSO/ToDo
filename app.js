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
        dateCreate = new Date, //TODO: Если дата не задана вручную, сделать это автоматически
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

const test = new Task('Task one', {
    project: 'Name project',
    tag: 'Name tag',
    dateCreate: new Date(),
    importance: 1,
    description: 'Description description',
})