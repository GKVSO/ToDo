/** @module workTags */
export {workTags as default};

/**
 * Примесь с методами для работы с метками
 * */
const workTags =  {

    /**
     * Массив для хранения меток
     *
     * @type {Set}
     * @private
     * */
    _tagList: new Set(),

    /**
     * Добавляет метку в список меток
     * @param {string} project - Название метки
     * */
    addTagList(project) {
        this._tagList.add(project);
    },

    /**
     * Удаляет метку из списка меток
     * @param {string} project - Название метки
     * */
    deleteTag(project) {
        this._tagList.delete(project);
    },

    /**
     * Изменятет метку
     * @param {string} project - Название метки
     * @param {object} params - Объект с парамметрами метки
     * @param {string} [params.name] - Новое название метки
     * */
    editTag(project, params) {
        this._tagList.delete(project);
        this._tagList.add(newName);
    },

    /**
     * Создате метку
     * @param {string} name - Название метки
     * */
    createTag(name) {
        this._tagList.add(name);
    },

    /**
     * Возвращает метку
     * @param {string} project - Название метки
     * */
    getTag(project) {
        return this._tagList;
    },
}
/** @module WorkTags */


