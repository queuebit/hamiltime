console.log("Welcome to Hamiltime");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(`Mark is ${request.mark}`);
    document.getElementsByTagName('video')[0].currentTime = request.mark;
    sendResponse({jumped: true});
  }
);
