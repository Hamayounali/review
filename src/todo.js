class Todos {
    todoArr = [];

    input = () => {
      const description = document.getElementById('description').value;
      const completed = false;
      this.todoArr.push({ description, completed });
      localStorage.setItem('todoLocal', JSON.stringify(this.todoArr));
      window.location.reload();
    };
}

export default Todos;