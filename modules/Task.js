/** @module Task */

export {Task as default};

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
         * @type {string|boolean}
         * */
        this.description = description;

        /**
         * @type {object|boolean}
         * */
        this.subTask = subTask;

        /**
         * @type {string}
         * */
        this.id = this.generateId(this.name);

        /**
         * @type {number}
         * */
        this._importance = [0, 1, 2, 3].includes(importance) ? importance : 0;
        this._importance = importance;
    }

    /**
     * Создает уникальный идентификатор для задачи
     * */
    generateId(name) {
        const dateKey = Date.now();

        const randomNumberList = this.random(0, name.length-1, 3);
        const nameKey = randomNumberList.reduce((acc, value) => {
            return acc += name[value];
        }, 0);

        const resultId = dateKey + nameKey;
        return resultId;
    }

    /**
     * Возращает рандомные числа, указанное число раз
     * @param {string} min - Минимальное число
     * @param {string} max - Максимальное число
     * @param {string} count - Кол-во рандомных чисел
     * @return {string|array}
     * */
    random(min, max, count = 1) {
        let randomNumberList = [];

        for(let i = 0; i < count; i++) {
            const randomNumber = Math.round(Math.random() * (max - min) + min);
            randomNumberList.push(randomNumber);
        }

        if(randomNumberList.length == 1) return randomNumberList[0];
        return randomNumberList;
    }

    /**
     * Устанавливает свойству _importance значение
     * @param {number} value - Значение приоритета от 0 до 3
     * */
    set importance(value) {
        if(![0, 1, 2, 3].includes(value)) return false;

        this._importance = value;
    }

    /**
     * Получает значение свойства _importance
     * */
    get importance() {
        return this._importance;
    }
}
