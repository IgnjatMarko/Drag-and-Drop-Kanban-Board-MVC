let control = function (model, view) {

  let raiseHtml = function () {
    view.baseHTML();
  };

  let dragItems = function () {
    
    const draggables = document.querySelectorAll('.taskItems');

    draggables.forEach((task) => {
      task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
      });
      task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
      });
    });
  }

  let dropItems = function () {

    const droppables = document.querySelectorAll('.taskZones');

    droppables.forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const currentTask = document.querySelector('.dragging');

        if (!bottomTask) {
          zone.appendChild(currentTask);
        } else {
          zone.insertBefore(currentTask, bottomTask);
        }
      });
    });

    const insertAboveTask = (zone, mouseY) => {
      const el = zone.querySelectorAll(".taskItems:not(.dragging)");

      let closestTask = null;
      let closestOffset = Number.NEGATIVE_INFINITY;

      el.forEach((task) => {
        const {top} = task.getBoundingClientRect();

        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
          closestOffset = offset;
          closestTask = task;
        }

      });

      return closestTask;
    }
  }

  let addButton = function () {
    model.todoTask();
  }
  

  return {
    init: function () {
      
      raiseHtml();
      dragItems();
      dropItems();
      addButton();

    },
  };
};

export default control;
