localStorage.tasks = JSON.stringify([]);

function addEvent() {
  let input = document.getElementById("task_input");
  let inputValue = input.value;

  if (!inputValue) {
    // alert("sdwds");
    // add error text in span error tag
    document.getElementById("error").innerHTML = "Enter name of new Task";
  } else {
    if (inputValue.length < 3) {
      // add error text in span error tag
      document.getElementById("error").innerHTML =
        "Name contain must 3 letters";
    } else {
      //   console.log(inputValue.length, "length");
      let taskArr = JSON.parse(localStorage.tasks);

      taskArr.push(inputValue);

      localStorage.tasks = JSON.stringify(taskArr);

      // Empty the Input field for taking text to add new items
      input.value = "";

      updateArray();
      // remove error line of span tag
      document.getElementById("error").innerHTML = "";
    }
  }
}

function updateArray() {
  let ul = document.getElementById("tasks");

  let taskArr = JSON.parse(localStorage.tasks);
  taskArr.reverse();
  html = "";

  taskArr.map((value) => {
    html +=
      '  <li class="list-group-item"> ' +
      value +
      ' <SPan class="btn btn-danger btn-sm float-right remove_btn"  >Remove</SPan></li>';
  });

  ul.innerHTML = html;

  //   for (let i = taskArr.length - 1; i >= 0; i--) {
  //     // console.log(item);

  //     html +=
  //       '  <li class="list-group-item"> ' +
  //       taskArr[i] +
  //       ' <SPan class="btn btn-danger btn-sm float-right remove_btn">Remove</SPan></li>';
  //   }
  //   ul.innerHTML = html;
}

// // Function to handle the click event on the remove buttons
// function handleRemoveButtonClick(event) {
//   const clickedButton = event.target;
//   if (clickedButton.classList.contains("remove_btn")) {
//     // Get the parent list item and remove it from the DOM
//     const listItem = clickedButton.parentElement;
//     listItem.remove();
//   }
// }

// // JavaScript function to handle the click event
// function findItem(event) {
//   const target = event.target;

//   // Check if the clicked element has the class "remove_btn"
//   if (target.classList.contains("remove_btn")) {
//     // Get the name of the outer li when the span delete button is clicked
//     const liElement = target.parentElement;
//     const itemName = liElement.textContent;
//     console.log(`Clicked on: ${itemName}`);
//   }
// }

// // Add event listener to the ul element to listen for click events
// document.getElementById("tasks").addEventListener("click", findItem);

// // // Add event listener to the parent element with id "tasks"
// // const tasksList = document.getElementById("tasks");
// // tasksList.addEventListener("click", handleRemoveButtonClick);

// JavaScript function to handle the click event
// JavaScript function to handle the click event
function handleRemoveBtnClick(event) {
  const target = event.target;

  // Check if the clicked element has the class "remove_btn"
  if (target.classList.contains("remove_btn")) {
    // Traverse up the DOM tree to find the parent li element
    const liElement = target.closest("li");

    // Extract only the text content of the parent li
    const itemName = liElement.childNodes[0].textContent.trim();

    // Return the text of the li (excluding the span text)
    return itemName;
  }
}

// Add event listener to the ul element to listen for click events
document.getElementById("tasks").addEventListener("click", function (event) {
  const itemName = handleRemoveBtnClick(event);
  if (itemName) {
    console.log(`Clicked on: ${itemName}`);

    let taskArr = JSON.parse(localStorage.tasks);

    const index = taskArr.findIndex((element) => element === itemName);

    taskArr.splice(index, 1);
    localStorage.tasks = JSON.stringify(taskArr);
    updateArray();

    if (index !== -1) {
      console.log(`Target value  found at index ${index}`);
    } else {
      console.log(`Target value  not found in the array`);
    }
  }
});
