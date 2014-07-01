Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Title 1',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Title 2',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Title 3',
        isCompleted: false
    }
];
