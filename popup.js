document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener('click', function(e) {
    let target = e.target;
    if (target.nodeName === 'BUTTON') {
      jumpTo({song: target.id}); 
    }
    e.stopPropagation()
  });

  function jumpTo({ song = 'waitForIt'}) {
    const songs = {
      alexanderHamilton: 65,
      aaronBurrSir: 307,
      myShot: 462,
      theStoryOfTonight: 824,
      theSchuylerSisters: 913,
      farmerRefuted: 1104,
      youllBeBack: 1202,
      rightHandMan: 1451,
      aWintersBall: 1773,
      helpless: 1843,
      satisfied: 2100,
      theStoryOfTonightReprise: 2433,
      waitForIt: 2555,
      stayAlive: 2758,
      tenDuelCommandments: 2917,
      meetMeInside: 3023,
      thatWouldBeEnough: 3113,
      gunsAndShips: 3288,
      historyHasItsEyesOnYou: 3421,
      yorktown: 3524,
      whatComesNext: 3777,
      dearTheodosia: 3901,
      nonStop: 4138,
    }

    const mark = songs[song] || 2555;
    console.log(`jumping to ${mark}`);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { mark }, function(response) {
        console.log(response);
      });
    });
  }
});

