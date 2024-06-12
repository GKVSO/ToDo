/** @module workTasks */
export {workTasks as default};

/**
 * Примесь с методами для работы с метками
 * */
const workTasks = {
    /**
     * Добавляет задачу в список задач
     * @param {object} task - Объект задачи ( Экземпляр класса Task )
     * */
    addTaskList(task) {

    },

    /**
     * Удаляет задачу из списка задач
     * @param {string} idTask - Идентификатор задачи
     * */
    deleteTask(idTask) {},

    /**
     * Изменятет парамметры задачи
     * @param {string} idTask - Идентификатор задачи
     * @param {object} params - Объект с парамметрами задачи
     * */
    editTask(idTask, params) {},

    /**
     * Создате задачу
     * @param {string} name - Имя задачи
     * @param {object} params - Парраметры задачи
     * */
    createTask(name, params) {},

    /**
     * Возвращает объект задачи
     * @param {string} idTask - Идентификатор задачи
     * @return {object} - Возращает объект задачи
     * */
    getTask(idTask) {},
}