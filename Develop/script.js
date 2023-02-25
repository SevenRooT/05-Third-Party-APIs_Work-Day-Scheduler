// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // variables to initialize when page loads
  const currentDay = $("#currentDay");

  /*const hour9 = $("#hour-9");
  const hour10 = $("#hour-10");
  const hour11 = $("#hour-11");
  const hour12 = $("#hour-12");
  const hour13 = $("#hour-13");
  const hour14 = $("#hour-14");
  const hour15 = $("#hour-15");
  const hour16 = $("#hour-16");
  const hour17 = $("#hour-17");*/

  /*const row = {
    $("#hour-9"): 9,
      $("#hour-10"): 10,
        $("#hour-11"): 11,
          $("#hour-12"): 12,
            $(#hour - 13): 13,
              $(#hour - 14): 14,
                $(#hour - 15): 15,
                  $(#hour - 16): 16,
                    $(#hour - 17): 17
  }*/
  // creating an oject

  const compareHours = {
    hour: 9,
    hour: 10,
    hour: 11,
    hour: 12,
    hour: 13,
    hour: 14,
    hour: 15,
    hour: 16,
    hour: 17
  }

  // empty array for individual events by hour of day
  let storedEvent_ = [];


  // set the current time/day/month at top of the page
  function currentTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // get element by ID -- save buttons and text boxes
  const saveBtn = $(".saveBtn");
  const description = $(".description");
  const row = $(".row");

  // function to capture value of text box and place in local storage
  saveBtn.click(function () {
    let rowNumber = row[index];

    let newEvent = "storedEvent_" + rowNumber;
    const descriptionValue = description.val(); //text box value
    localStorage.setItem(storedEvent, JSON.stringify(descriptionValue));
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // logs the current hour as a single digit for comparison to calendar row
  // to be used as reference point when determining the proper color of row item
  function format24() {
    let hour24 = dayjs().format("H");
    console.log("24 hour time:", hour24);
  }

  // early non-functional frame work of comparison module for row colors
  function pastPresentFuture() {
    //look at the value of each id associated with a particular time block

    //compare that value with the current value of hour24

    //if less than hour24, assign "past"
    //if equal to hour24, assign "present"
    //if greater than hour24, assign "future"
    for (let key in value) {

      if (compareHours.value[key] < hour24) {
        someThing = #past; //toggle css style
      } else if (compareHours.value[key] == hour24) {
        someThing = #present;
      } else {
        someThing = #future;
      }
    }
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  currentTime();
  setInterval(currentTime, 1000);
  format24();
});
