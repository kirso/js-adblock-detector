function adblockDetector() {
  // Set Interval to check for the ad blocker
  setInterval(function () {
    // Append HTML to detect body and make adblocker perceive the ad
    document.body.innerHTML += `<div id="test-ad" class='adsbygoogle'></div>`
    // Check the CSS of test-ad, if user is using adblocker, the CSS will change
    const testAd = document.getElementById('test-ad')
    const testAdStyles = getComputedStyle(testAd)
    // Query testAdStyle object to determine whether the CSS has changed and therefore the user is using adblocker
    if (testAdStyles.display === 'none') {
      const myImg = document.createElement('img')
      myImg.src = 'https://unsplash.it/600/100'
      document.body.prepend(myImg)
    }
  }, 1000)
}
// end of adblockDetector

adblockDetector()
