/** @module workProjects */
export {workProjects as default};

/**
 * Примесь с методами для работы с проектами
 * */
const workProjects = {
    /**
     * Массив для хранения проектов
     *
     * @type {Set}
     * @private
     * */
    _projectList: new Set(),

    /**
     * Добавляет проект в список проектов
     * @param {string} project - Название проекта
     * */
    addProjectList(project) {
        this._projectList.add(project);
    },

    /**
     * Удаляет проект из списка проектов
     * @param {string} project - Название проекта
     * */
    deleteProject(project) {
        this._projectList.delete(project);
    },

    /**
     * Изменятет проект
     * @param {string} project - Название проекта
     * @param {object} newName - Новое название
     * */
    editProject(project, newName) {
        this._projectList.delete(project);
        this._projectList.add(newName);
    },

    /**
     * Создате проект
     * @param {string} name - Название проекта
     * */
    createProject(name) {
        this._projectList.add(name);
    },

    /**
     * Возвращает проект
     * @param {string} project - Название проекта
     * */
    getProjects(project) {
        return this._projectList;
    },
}