window.numberofWord = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.numberofWord[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.htm'})
})