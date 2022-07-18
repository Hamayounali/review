import Todos from './todo';

const todo = new Todos();
document.querySelector('#newBook').addEventListener('click', todo.input);

const display = () => {
  let html = '<div>';
  html += '<table class="center">';
  const st = JSON.parse(localStorage.getItem('todoLocal'));
  for (let i = 0; i < st.length; i += 1) {
    todo.todoArr.push({ description: st[i].description, completed: st[i].completed });
    html += '<tr>';
    html += `<td class='test3'> 
    <form>
      <input class='myCheck' type='checkbox' onchange="changed(${i}, '${todo.todoArr[i].description}')" name='todoForm' value='true'>
      </form>
    </td>`;
    html += `<td class='test2'> ${todo.todoArr[i].description} </td>`;
    html += `<td class="test"><button class="btn" onclick="editTodo(${i}, '${todo.todoArr[i].description}')"> <i class="fa fa-edit" style="font-size:20px"></i> </button> </td>`;
    html += `<td class="test"><button onclick="deleteTodo(${i})" class="btn"> <i class="fa fa-trash" style="font-size:20px"></i> </button> </td>`;
    html += '</tr>';
  }
  html += '<tr>';
  html += '<td colspan="4" class="clearButton" onclick="clearCompleted()"> <b> Clear all completed </b> </td>';
  html += '</tr>';
  html += '</table>';
  document.getElementById('data').innerHTML = html;

  for (let i = 0; i < st.length; i += 1) {
    if (todo.todoArr[i].completed === true) {
      const check = document.getElementsByClassName('myCheck');
      const collection = document.getElementsByClassName('test2');
      collection[i].style.textDecoration = 'line-through';
      check[i].checked = true;
    }
  }
};

export default display;

window.deleteTodo = (i) => {
  todo.todoArr.splice(i, 1);
  localStorage.setItem('todoLocal', JSON.stringify(todo.todoArr));
  window.location.reload();
};

function myFunction(i, data) {
  const updated = prompt('You can update the to do:', data);
  todo.todoArr[i].description = updated;
  localStorage.setItem('todoLocal', JSON.stringify(todo.todoArr));
  return true;
}

window.editTodo = (i, b) => {
  const toUpdate = JSON.parse(localStorage.getItem('todoLocal'));
  for (let i = 0; i < toUpdate.length; i += 1) {
    if (todo.todoArr[i].description === b) {
      const data = todo.todoArr[i].description;
      myFunction(i, data);
    }
  }
  window.location.reload();
};

window.changed = (i, b) => {
  const change = JSON.parse(localStorage.getItem('todoLocal'));
  for (let i = 0; i < change.length; i += 1) {
    if (todo.todoArr[i].description === b) {
      todo.todoArr[i].completed = true;
      localStorage.setItem('todoLocal', JSON.stringify(todo.todoArr));
    }
  }
  window.location.reload();
};

window.clearCompleted = () => {
  const st2 = JSON.parse(localStorage.getItem('todoLocal'));
  const len = st2.length;
  for (let j = 0; j < len; j += 1) {
    if (todo.todoArr[j].completed === true) {
      todo.todoArr.splice(j, 1);
      j -= 1;
      localStorage.setItem('todoLocal', JSON.stringify(todo.todoArr));
      window.location.reload();
    }
  }
};