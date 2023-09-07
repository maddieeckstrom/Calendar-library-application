// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

  const saveBtnEl = $('.saveBtn');

  saveBtnEl.on('click', function() {

    //this references the specific button we are clicking, now we can call jQuery methods on it
    const $thisBtn = $(this);
    console.log($thisBtn.attr('id'));

    const $relatedTextArea = $thisBtn.siblings("textarea");
    console.log($relatedTextArea.val());

    const $parentHour = $thisBtn.parent();
    const hourId = $parentHour.attr('id');

    console.log(hourId);

    localStorage.setItem(hourId, $relatedTextArea.val());

  })

  const $timeBlocks = $('.time-block');

  $timeBlocks.each(function() {
    const $thisTimeBlock = $(this);

    const $timeBlockText = localStorage.getItem($thisTimeBlock.attr('id'));

    $thisTimeBlock.children("textarea").text($timeBlockText);


    //assign that getItem value to a variable, set it as a value of the text area of the time box

  })


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
