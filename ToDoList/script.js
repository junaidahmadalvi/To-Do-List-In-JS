localStorage.tasks = JSON.stringify([]);

// function addEvent() {
//   let input = document.getElementById("task_input");
//   let inputValue = input.value;

//   if (!inputValue) {
//     // alert("sdwds");
//     // add error text in span error tag
//     document.getElementById("error").innerHTML = "Enter name of new Task";
//   } else {
//     if (inputValue.length < 3) {
//       // add error text in span error tag
//       document.getElementById("error").innerHTML =
//         "Name contain must 3 letters";
//     } else {
//       //   console.log(inputValue.length, "length");
//       let taskArr = JSON.parse(localStorage.tasks);

//       taskArr.push(inputValue);

//       localStorage.tasks = JSON.stringify(taskArr);

//       // Empty the Input field for taking text to add new items
//       input.value = "";

//       updateArray();
//       // remove error line of span tag
//       document.getElementById("error").innerHTML = "";
//     }
//   }
// }

// function updateArray() {
//   let ul = document.getElementById("tasks");

//   let taskArr = JSON.parse(localStorage.tasks);
//   taskArr.reverse();
//   html = "";

//   taskArr.map((value) => {
//     html +=
//       '  <li class="list-group-item"> ' +
//       value +
//       ' <SPan class="btn btn-danger btn-sm float-right remove_btn" onclick="handleRemoveBtnClick" >Remove</SPan></li>';
//   });

//   ul.innerHTML = html;
// }

// // Function to remove a task item from the array and update the list
// function removeTaskFromArray(itemName) {
//   let taskArr = JSON.parse(localStorage.tasks);
//   const index = taskArr.findIndex((element) => element === itemName);

//   if (index !== -1) {
//     taskArr.splice(index, 1);
//     localStorage.tasks = JSON.stringify(taskArr);
//     updateArray();
//     console.log(`Removed item: ${itemName}`);
//   } else {
//     console.log(`Item not found in the array.`);
//   }
// }

// // JavaScript function to handle the click event on "Remove" button
// function handleRemoveBtnClick(event) {
//   const target = event.target;

//   // Check if the clicked element has the class "remove_btn"
//   if (target.classList.contains("remove_btn")) {
//     // Traverse up the DOM tree to find the parent li element
//     const liElement = target.closest("li");

//     // Extract only the text content of the parent li
//     const itemName = liElement.childNodes[0].textContent.trim();

//     // Call the removeTaskFromArray function
//     removeTaskFromArray(itemName);
//   }
// }

// Function to remove a task item from the array and update the list

function addEvent() {
  let input = document.getElementById("task_input");
  let inputValue = input.value;

  if (!inputValue) {
    document.getElementById("error").innerHTML =
      "Enter the name of the new Task";
  } else {
    if (inputValue.length < 3) {
      document.getElementById("error").innerHTML =
        "Name must contain at least 3 letters";
    } else {
      let taskArr = JSON.parse(localStorage.tasks);
      let newObj = {
        name: inputValue,
        status: "undone",
      };

      taskArr.push(newObj);
      localStorage.tasks = JSON.stringify(taskArr);

      input.value = "";
      updateArray();
      document.getElementById("error").innerHTML = "";

      console.log(taskArr, "updated array");
    }
  }
}

function updateArray() {
  let ul = document.getElementById("tasks");

  let taskArr = JSON.parse(localStorage.tasks);
  // taskArr.reverse();
  html = "";

  taskArr.map((index) => {
    html +=
      '  <li class="list-group-item"> ' +
      index.name +
      ' <SPan class="btn btn-danger btn-sm float-right remove_btn" onclick="removeTaskFromArray" >Remove</SPan>        <SPan class="btn btn-primary btn-sm float-right done_btn" onclick="doneTask" >Done</SPan>       <SPan class="btn btn-primary btn-sm float-right undone_btn" onclick="undoneTask" >Undone</SPan>       <SPan class="btn btn-primary btn-sm float-right up_btn" onclick="upTask" >Up</SPan>     <SPan class="btn btn-primary btn-sm float-right down_btn" onclick="downTask" >Down</SPan>     </li>';
  });

  ul.innerHTML = html;

  // showUndoneItem();
  // console.log(showUndoneItem(), "undone");
  // showDoneItem();
  // console.log(showDoneItem(), "done");
  // Add event listeners to the "Remove" buttons for each list item
  const removeButtons = document.querySelectorAll(".remove_btn");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeTaskFromArray)
  );

  const doneButtons = document.querySelectorAll(".done_btn");
  doneButtons.forEach((button) => button.addEventListener("click", doneTask));

  const undoneButtons = document.querySelectorAll(".undone_btn");
  undoneButtons.forEach((button) =>
    button.addEventListener("click", undoneTask)
  );

  const upButtons = document.querySelectorAll(".up_btn");
  upButtons.forEach((button) => button.addEventListener("click", upTask));

  const downButtons = document.querySelectorAll(".down_btn");
  downButtons.forEach((button) => button.addEventListener("click", downTask));
}

function showDoneItem() {
  let ul = document.getElementById("tasks");

  let taskArr = JSON.parse(localStorage.tasks);
  console.log(taskArr, "original array");
  let doneItemArr = taskArr.filter((index) => {
    console.log(index, "index");
    return index.status == "done";
  });
  console.log(doneItemArr, "doneItem array");
  // <h2>Completed Tasks</h2>;
  // taskArr.reverse();
  html = "";

  doneItemArr.map((index) => {
    html +=
      '      <li class="list-group-item"> ' +
      index.name +
      ' <SPan class="btn btn-danger btn-sm float-right remove_btn" onclick="removeTaskFromArray" >Remove</SPan>        <SPan class="btn btn-primary btn-sm float-right done_btn" onclick="doneTask" >Done</SPan>       <SPan class="btn btn-primary btn-sm float-right undone_btn" onclick="undoneTask" >Undone</SPan>       <SPan class="btn btn-primary btn-sm float-right up_btn" onclick="upTask" >Up</SPan>     <SPan class="btn btn-primary btn-sm float-right down_btn" onclick="downTask" >Down</SPan>     </li>';
  });

  ul.innerHTML = html;

  // Add event listeners to the "Remove" buttons for each list item
  const removeButtons = document.querySelectorAll(".remove_btn");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeTaskFromArray)
  );

  const doneButtons = document.querySelectorAll(".done_btn");
  doneButtons.forEach((button) => button.addEventListener("click", doneTask));

  const undoneButtons = document.querySelectorAll(".undone_btn");
  undoneButtons.forEach((button) =>
    button.addEventListener("click", undoneTask)
  );

  const upButtons = document.querySelectorAll(".up_btn");
  upButtons.forEach((button) => button.addEventListener("click", upTask));

  const downButtons = document.querySelectorAll(".down_btn");
  downButtons.forEach((button) => button.addEventListener("click", downTask));
}

function showUndoneItem() {
  let ul = document.getElementById("tasks");

  let taskArr = JSON.parse(localStorage.tasks);
  console.log(taskArr, "original array");
  let undoneItemArr = taskArr.filter((index) => {
    console.log(index, "index");
    return index.status == "undone";
  });
  console.log(undoneItemArr, "undoneItem array");
  // <h2>Tasks you have to done</h2>;
  // taskArr.reverse();
  html = "";

  undoneItemArr.map((index) => {
    html +=
      '     <li class="list-group-item"> ' +
      index.name +
      ' <SPan class="btn btn-danger btn-sm float-right remove_btn" onclick="removeTaskFromArray" >Remove</SPan>        <SPan class="btn btn-primary btn-sm float-right done_btn" onclick="doneTask" >Done</SPan>       <SPan class="btn btn-primary btn-sm float-right undone_btn" onclick="undoneTask" >Undone</SPan>       <SPan class="btn btn-primary btn-sm float-right up_btn" onclick="upTask" >Up</SPan>     <SPan class="btn btn-primary btn-sm float-right down_btn" onclick="downTask" >Down</SPan>     </li>';
  });

  ul.innerHTML = html;

  // Add event listeners to the "Remove" buttons for each list item
  const removeButtons = document.querySelectorAll(".remove_btn");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeTaskFromArray)
  );

  const doneButtons = document.querySelectorAll(".done_btn");
  doneButtons.forEach((button) => button.addEventListener("click", doneTask));

  const undoneButtons = document.querySelectorAll(".undone_btn");
  undoneButtons.forEach((button) =>
    button.addEventListener("click", undoneTask)
  );

  const upButtons = document.querySelectorAll(".up_btn");
  upButtons.forEach((button) => button.addEventListener("click", upTask));

  const downButtons = document.querySelectorAll(".down_btn");
  downButtons.forEach((button) => button.addEventListener("click", downTask));
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add_btn").addEventListener("click", addEvent);
  console.log(document.getElementById("add_btn")); // Check if the element is found

  updateArray();
});

function removeTaskFromArray(event) {
  let itemName = handleBtnClick(event);
  let taskArr = JSON.parse(localStorage.tasks);
  const index = taskArr.findIndex((index) => index.name === itemName);

  if (index !== -1) {
    taskArr.splice(index, 1);
    localStorage.tasks = JSON.stringify(taskArr);
    updateArray();
    console.log(`Removed item: ${itemName}`);
  } else {
    console.log(`Item not found in the array.`);
  }
}

function doneTask(event) {
  // alert("removeBtn");
  let itemName = handleBtnClick(event);
  console.log(itemName, "itemname of doneBtn");
  let taskArr = JSON.parse(localStorage.tasks);
  const index = taskArr.findIndex((index) => index.name === itemName);

  if (index !== -1) {
    taskArr[index].status = "done";
    console.log(taskArr[index], "chnagedObject of done");
    localStorage.tasks = JSON.stringify(taskArr);

    updateArray();
  }
}

function undoneTask(event) {
  // alert("removeBtn");
  let itemName = handleBtnClick(event);
  console.log(itemName, "itemname of UndoneBtn");
  let taskArr = JSON.parse(localStorage.tasks);
  const index = taskArr.findIndex((index) => index.name === itemName);

  if (index !== -1) {
    taskArr[index].status = "undone";
    console.log(taskArr[index], "chnagedObject of undone");
    localStorage.tasks = JSON.stringify(taskArr);
    updateArray();
  }
}

function upTask(event) {
  // alert("removeBtn");
  let itemName = handleBtnClick(event);
  console.log(itemName, "itemname of doneBtn");
  let taskArr = JSON.parse(localStorage.tasks);
  const index = taskArr.findIndex((index) => index.name === itemName);

  if (index !== -1) {
    if (index == 0) {
      alert("this item is already on the Top");
    } else {
      let temp = taskArr[index];
      taskArr[index] = taskArr[index - 1];
      taskArr[index - 1] = temp;
    }

    // console.log(taskArr[index], "chnagedObject");
    localStorage.tasks = JSON.stringify(taskArr);

    updateArray();
  }
}

function downTask(event) {
  // alert("removeBtn");
  let itemName = handleBtnClick(event);
  console.log(itemName, "itemname of doneBtn");
  let taskArr = JSON.parse(localStorage.tasks);
  const index = taskArr.findIndex((index) => index.name === itemName);

  if (index !== -1) {
    if (index == taskArr.length - 1) {
      alert("this item is already on the end");
    } else {
      let temp = taskArr[index];
      taskArr[index] = taskArr[index + 1];
      taskArr[index + 1] = temp;
    }
  }
}

// JavaScript function to handle the click event on "Remove" button
function handleBtnClick(event) {
  // alert("hello");
  const target = event.target;

  // Check if the clicked element has the class "remove_btn"
  if (
    target.classList.contains("remove_btn") ||
    target.classList.contains("done_btn") ||
    target.classList.contains("undone_btn") ||
    target.classList.contains("up_btn") ||
    target.classList.contains("down_btn")
  ) {
    // Traverse up the DOM tree to find the parent li element
    const liElement = target.closest("li");

    // Extract only the text content of the parent li
    const itemName = liElement.childNodes[0].textContent.trim();

    // Return the text of the li (excluding the span text)
    // return itemName;

    console.log(itemName, "itemName");
    return itemName;
    // Call the removeTaskFromArray function
    // removeTaskFromArray(itemName);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.getElementsByClassName("dropdown-item");
  const dropdownButton = document.getElementById("fruitDropdown");

  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      const selectedValue = this.getAttribute("data-value");
      dropdownButton.innerText = this.innerText; // Update the button text with the selected option
      console.log("Selected Option:", selectedValue);

      if (selectedValue == "all") {
        updateArray();
      } else if (selectedValue == "done") {
        showDoneItem();
      } else if (selectedValue == "undone") {
        showUndoneItem();
        // console.log("pending");
      }
    });
  }
});

// Add event listener to the "Remove" buttons to handle click events
// const removeButtons = document.querySelectorAll(".remove_btn");
// removeButtons.forEach((button) =>
//   button.addEventListener("click", handleRemoveBtnClick)
// );

// JavaScript function to handle the click event
// function handleRemoveBtnClick(event) {
//   const target = event.target;

//   // Check if the clicked element has the class "remove_btn"
//   if (target.classList.contains("remove_btn")) {
//     // Traverse up the DOM tree to find the parent li element
//     const liElement = target.closest("li");

//     // Extract only the text content of the parent li
//     const itemName = liElement.childNodes[0].textContent.trim();

//     // Return the text of the li (excluding the span text)
//     return itemName;
//   }
// }

// // Add event listener to the ul element to listen for click events
// document.getElementById("tasks").addEventListener("click", function (event) {
//   const itemName = handleRemoveBtnClick(event);
//   if (itemName) {
//     console.log(`Clicked on: ${itemName}`);

//     let taskArr = JSON.parse(localStorage.tasks);

//     const index = taskArr.findIndex((element) => element === itemName);

//     taskArr.splice(index, 1);
//     localStorage.tasks = JSON.stringify(taskArr);
//     updateArray();

//     if (index !== -1) {
//       console.log(`Target value  found at index ${index}`);
//     } else {
//       console.log(`Target value  not found in the array`);
//     }
//   }
// });
