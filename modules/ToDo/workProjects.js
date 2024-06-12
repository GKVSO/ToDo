/** @module workProjects */
export {workProjects as default};

/**
 * Примесь с методами для работы с проектами
 * */
const workProjects = {
    /**
     * Добавляет проект в список проектов
     * @param {string} project - Название проекта
     * */
    addProjectList(project) {

    },

    /**
     * Удаляет проект из списка проектов
     * @param {string} project - Название проекта
     * */
    deleteProject(project) {},

    /**
     * Изменятет проект
     * @param {string} project - Название проекта
     * @param {object} params - Объект с парамметрами проекта
     * @param {string} [params.name] - Новое название проекта
     * */
    editProject(project, params) {},

    /**
     * Создате проект
     * @param {string} name - Название проекта
     * */
    createProject(name) {},

    /**
     * Возвращает проект
     * @param {string} project - Название проекта
     * */
    getProject(project) {},
}