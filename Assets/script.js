$(function () {

  const saveBtnEl = $('.saveBtn');

  saveBtnEl.on('click', function() {

    const $thisBtn = $(this).parent().attr('id');
    console.log($thisBtn);


    var $relatedTextArea = $(this).siblings('.description').val();

    console.log($relatedTextArea);

    localStorage.setItem($thisBtn, $relatedTextArea);
  })

  const $timeBlocks = $('.time-block');

  $timeBlocks.each(function() {
    const $thisTimeBlock = $(this);

    const $timeBlockText = localStorage.getItem($thisTimeBlock.attr('id'));

    $thisTimeBlock.children("textarea").text($timeBlockText);
  })

  function updater() {

  var hour = dayjs().hour();

  $('.time-block').each(function() {

  var blockHour = parseInt($(this).attr('id').split('-')[1]);

  console.log(hour);

  if (blockHour < hour) {
    $(this).addClass('past')
  } else if (blockHour == hour) {
    $(this).addClass('present')
  } else if (blockHour > hour) {
    $(this).addClass('future')
  }
  });

  }

  updater();
  //
  setInterval(updater, 10000);

});
