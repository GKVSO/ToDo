/** @module WorkTags */

export {WorkTags as default};

/**
 * Класс с методами для работы с метками в классе ToDo
 * */
class WorkTags {
    constructor() {

    }

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