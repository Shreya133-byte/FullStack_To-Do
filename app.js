const taskForm = document.getElementById('taskForm');
        const taskInput = document.getElementById('taskInput');
        const todoList = document.getElementById('todoList');

        taskForm.addEventListener('submit', event => {
            event.preventDefault();
            const text = taskInput.value.trim();
            if (!text) return;
            addTask(text);
            taskInput.value = '';
            taskInput.focus();
        });

        function addTask(text) {
            const emptyNotice = todoList.querySelector('.empty-state');
            if (emptyNotice) emptyNotice.remove();

            const item = document.createElement('li');
            item.className = 'todo-item';

            const label = document.createElement('span');
            label.textContent = text;

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                item.remove();
                if (todoList.children.length === 0) showEmptyState();
            });

            item.appendChild(label);
            item.appendChild(removeButton);
            todoList.appendChild(item);
        }

        function showEmptyState() {
            const empty = document.createElement('li');
            empty.className = 'empty-state';
            empty.textContent = 'No tasks yet. Add your first task above.';
            todoList.appendChild(empty);
        }