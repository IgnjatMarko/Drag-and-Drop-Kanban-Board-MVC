const model = (function () {

  let changePriority = function (e) {

    const numb = e.target.dataset.id;
    
    const prioritySelect = document.querySelector(`#prioritySelect${numb}`);
    const priorityClass = prioritySelect.value;
    const div = prioritySelect.parentElement;
    
    const colorsValue = ["green", "yellow", "red"];

    for (let i = 0; i < colorsValue.length; i++) {
      div.classList.remove(colorsValue[i]);
    }

    div.classList.add(priorityClass);
  }
  
    return {
    todoTask: function () {
      const addTask = document.querySelector("#addtask");
      const input = document.querySelector("#typetask");
      const select = document.querySelector("#list");
      const landingZone = document.querySelector("#todotasks");

      let count = 0;

      addTask.addEventListener("click", () => {
        
        
        const value = input.value;
        const type = select.value;
        
        if (!value) return;

        const newTask = document.createElement("div");
        const selectP = document.createElement("select");

        selectP.setAttribute("id", "prioritySelect"+count++);
        selectP.dataset.id = count-1;
        
        selectP.onchange = changePriority;

        newTask.classList.add(`taskItems`);
        newTask.classList.add(`${type}`);
        newTask.setAttribute("draggable", "true");
        newTask.innerText = value;

        newTask.addEventListener("dragstart", () => {
          newTask.classList.add("dragging");
        });
        newTask.addEventListener("dragend", () => {
          newTask.classList.remove("dragging");
        });

        const colors = ["Low Priority", "Medium Priority", "Urgent Priority"];
        const colorsValue = ["green", "yellow", "red"];

        for (let i = 0; i < colors.length; i++) {
          const option = document.createElement("option");
          option.value = colorsValue[i];
          option.text = colors[i];
          selectP.appendChild(option);
        }

        
        newTask.appendChild(selectP);
        landingZone.appendChild(newTask);

        input.value = "";
      });
    },
  };
})();

export default model;
