const view = (function () {

  return {

    baseHTML: function () {
      let html = `<div class="inputBox">
          <input type="text" placeholder="Type task" id="typetask">
          <select id="list">
            <option value="green">Low Priority</option>
            <option value="yellow">Medium Priority</option>
            <option value="red">Urgent Priority</option>
          </select>
          <button id="addtask">Add</button>
      </div>
      <div class="board">
      <div id="todo" class="column">
          <h2>To Do</h2>
          <div class="taskZones" id="todotasks">
            
          </div>
      </div>
      <div id="progress" class="column">
          <h2>In Progress</h2>
          <div class="taskZones" id="inprogress"></div>
      </div>
      <div id="done" class="column">
          <h2>Done</h2>
          <div class="taskZones" id="donetasks">

          </div>
      </div>
  </div>
  <div id="trash" class="column">
          <h2>Drop Tasks</h2><br>
          <div class="taskZones" id="bin" style="background-image: url(../img/recycle-bin.png);">

          </div>
      </div>`;

      document.querySelector("#container").innerHTML = html;
      
    },
  };

})();

export default view;
