let todosArray = [];
let nextId = 1;

// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }


function getAll() {
    return todosArray;
}

function addOne(task, completed, dueDate) {
    if (!task || completed === undefined || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId ++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

function findById(id) {
    const numId = Number(id)
    // function matchesId(item) {
    //     return item.id === numId;
    // }
    // const todo = todosArray.find(matchesId)
    const todo = todosArray.find(item => item.id === numId)
    return todo || false;
}


function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        if (updatedData.task) {
            todo.task = updatedData.task;
        }
        if (updatedData.completed !== undefined) {
            todo.completed = updatedData.completed;
        }
        if (updatedData.dueDate) {
            todo.dueDate = updatedData.dueDate;
        }
        return todo;
    }
    return false;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(todo => todo.id !== Number(id));
        return todosArray.length < initialLength;
    }
    return false;
}

if (require.main === module) {
    // Add cars
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Buy grocerie 2", false, "2025-08-30");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(2, { task: 4, dueDate: "Black" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));

    console.log("HOOHOOHEEEHAHU")
    console.log(getAll())
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;