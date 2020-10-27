console.log('Hoi! Wil je ook gave dingen maken? \n https://enrise.com');

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);

    if (document.getElementById(id) === null) {
      return;
    }

    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

var opening = new Date(Date.parse('2022-07-18'));
var inschrijving = new Date(Date.parse('2021-01-05'));
initializeClock('countdown-opening', opening);
initializeClock('countdown-inschrijving', inschrijving);

function randomGiphy(id) {
  var canvas = document.getElementById(id);

  if (document.getElementById(id) === null) {
    return;
  }

  var myArray = [
    'https://media.giphy.com/media/tXL4FHPSnVJ0A/source.gif',
    'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/source.gif',
    'https://media.giphy.com/media/L1Wmga4CDCKKpT8jAJ/source.gif',
    'https://media.giphy.com/media/o5oLImoQgGsKY/source.gif',
    'https://media.giphy.com/media/VtUrqIbEU2tuo/giphy.gif',
    'https://media.giphy.com/media/oT7ATDykMidsk/source.gif',
    'https://media.giphy.com/media/26ufoOsmvqB64u4h2/source.gif',
    'https://media.giphy.com/media/26uf1gRfKr51v7F8k/source.gif',
    'https://media.giphy.com/media/hiu4RJvbEBUVq/source.gif',
    'https://media.giphy.com/media/SWVzkIlHdEckF81gnA/source.gif',
  ];
  var random = Math.floor(Math.random() * myArray.length);
  canvas.src = myArray[random];
}

randomGiphy("random-giphy");