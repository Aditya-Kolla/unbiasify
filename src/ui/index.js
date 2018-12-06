import $ from 'jquery'

document.addEventListener('DOMContentLoaded', function() {
  var $clearLinkedInPhotos = $('#clear-photos')
  var $clearLinkedInNames = $('#clear-names')
  var $clearAlPhotos = $('#clear-al-photos')
  var $clearAlNames = $('#clear-al-names')
  var $clearTwitterPhotos = $('#clear-twitter-photos')
  var $clearTwitterNames = $('#clear-twitter-names')
  var $clearReplitPhotos = $('#clear-replit-photos')
  var $clearReplitNames = $('#clear-replit-names')
  var $clearGreenhousePhotos = $('#clear-greenhouse-photos')
  var $clearGreenhouseNames = $('#clear-greenhouse-names')
  var $clearLeverNames = $('#clear-lever-names')
  var $clearFacebookPhotos = $('#clear-facebook-photos')
  var $clearFacebookNames = $('#clear-facebook-names')
  var $clearGithubPhotos = $('#clear-github-photos')
  var $clearGithubNames = $('#clear-github-names')
  var $clearMeetupPhotos = $('#clear-meetup-photos')
  var $clearMeetupNames = $('#clear-meetup-names')

  const TOGGLE_LINKED_IN_PHOTOS = 'togglePhotos'
  const TOGGLE_LINKED_IN_NAMES = 'toggleNames'
  const TOGGLE_ANGELLIST_PHOTOS = 'toggleAlPhotos'
  const TOGGLE_ANGELLIST_NAMES = 'toggleAlNames'
  const TOGGLE_TWITTER_PHOTOS = 'toggleTwitterPhotos'
  const TOGGLE_TWITTER_NAMES = 'toggleTwitterNames'
  const TOGGLE_REPLIT_PHOTOS = 'toggleReplitPhotos'
  const TOGGLE_REPLIT_NAMES = 'toggleReplitNames'
  const TOGGLE_GREENHOUSE_PHOTOS = 'toggleGreenhousePhotos'
  const TOGGLE_GREENHOUSE_NAMES = 'toggleGreenhouseNames'
  const TOGGLE_LEVER_NAMES = 'toggleLeverNames'
  const TOGGLE_FACEBOOK_PHOTOS = 'toggleFacebookPhotos'
  const TOGGLE_FACEBOOK_NAMES = 'toggleFacebookNames'
  const TOGGLE_GITHUB_PHOTOS = 'toggleGithubPhotos'
  const TOGGLE_GITHUB_NAMES = 'toggleGithubNames'
  const TOGGLE_MEETUP_PHOTOS = 'toggleMeetupPhotos'
  const TOGGLE_MEETUP_NAMES = 'toggleMeetupNames'

  setInitialValues(TOGGLE_LINKED_IN_PHOTOS, $clearLinkedInPhotos)
  setInitialValues(TOGGLE_LINKED_IN_NAMES, $clearLinkedInNames)
  setInitialValues(TOGGLE_ANGELLIST_PHOTOS, $clearAlPhotos)
  setInitialValues(TOGGLE_ANGELLIST_NAMES, $clearAlNames)
  setInitialValues(TOGGLE_TWITTER_PHOTOS, $clearTwitterPhotos)
  setInitialValues(TOGGLE_TWITTER_NAMES, $clearTwitterNames)
  setInitialValues(TOGGLE_REPLIT_PHOTOS, $clearReplitPhotos)
  setInitialValues(TOGGLE_REPLIT_NAMES, $clearReplitNames)
  setInitialValues(TOGGLE_GREENHOUSE_PHOTOS, $clearGreenhousePhotos)
  setInitialValues(TOGGLE_GREENHOUSE_NAMES, $clearGreenhouseNames)
  setInitialValues(TOGGLE_LEVER_NAMES, $clearLeverNames)
  setInitialValues(TOGGLE_FACEBOOK_PHOTOS, $clearFacebookPhotos)
  setInitialValues(TOGGLE_FACEBOOK_NAMES, $clearFacebookNames)
  setInitialValues(TOGGLE_GITHUB_PHOTOS, $clearGithubPhotos)
  setInitialValues(TOGGLE_GITHUB_NAMES, $clearGithubNames)
  setInitialValues(TOGGLE_MEETUP_NAMES, $clearMeetupNames)
  setInitialValues(TOGGLE_MEETUP_PHOTOS, $clearMeetupPhotos)

  $clearLinkedInPhotos.off().on('change', function() {
    sendMessage({ togglePhotos: true })
  })

  $clearLinkedInNames.off().on('change', function() {
    sendMessage({ toggleNames: true })
  })

  $clearAlPhotos.off().on('change', function() {
    sendMessage({ toggleAlPhotos: true })
  })

  $clearAlNames.off().on('change', function() {
    sendMessage({ toggleAlNames: true })
  })

  $clearTwitterNames.off().on('change', function() {
    sendMessage({ toggleTwitterNames: true })
  })

  $clearTwitterPhotos.off().on('change', function() {
    sendMessage({ toggleTwitterPhotos: true })
  })

  $clearReplitPhotos.off().on('change', function() {
    sendMessage({ toggleReplitPhotos: true })
  })

  $clearReplitNames.off().on('change', function() {
    sendMessage({ toggleReplitNames: true })
  })

  $clearGreenhousePhotos.off().on('change', function() {
    sendMessage({ toggleGreenhousePhotos: true })
  })

  $clearGreenhouseNames.off().on('change', function() {
    sendMessage({ toggleGreenhouseNames: true })
  })

  $clearLeverNames.off().on('change', function() {
    sendMessage({ toggleLeverNames: true })
  })

  $clearFacebookPhotos.off().on('change', function() {
    sendMessage({ toggleFacebookPhotos: true })
  })

  $clearFacebookNames.off().on('change', function() {
    sendMessage({ toggleFacebookNames: true })
  })

  $clearGithubPhotos.off().on('change', function() {
    sendMessage({ toggleGithubPhotos: true })
  })

  $clearGithubNames.off().on('change', function() {
    sendMessage({ toggleGithubNames: true })
  })

  $clearMeetupNames.off().on('change', function() {
    sendMessage({ toggleMeetupNames: true })
  })

  $clearMeetupPhotos.off().on('change', function() {
    sendMessage({ toggleMeetupPhotos: true })
  })

  function sendMessage(message) {
    chrome.tabs.query({}, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, message)
      }
    })
  }
  function setInitialValues(identifier, toggleInput) {
    chrome.storage.sync.get(identifier, function(data) {
      const val = data[identifier]
      if (val) {
        toggleInput.prop('checked', true)
      } else {
        toggleInput.prop('checked', false)
      }
    })
  }

  function handleTabCreation(url) {
    chrome.tabs.create({ url }, function(tab) {
      setTimeout(function() {
        chrome.tabs.remove(tab.id)
      }, 500)
    })
  }

  $('#actionButton').click(function() {
    var action = $('#additional-options').val()

    switch (action) {
      case 'feedback':
        var emailUrl = 'mailto:martin.hauck@gmail.com'
        handleTabCreation(emailUrl)
        break

      case 'additionalResource':
        var url = 'https://www.unbiasify.com'
        handleTabCreation(url)
        break

      case 'tweetUs':
        var tweetUrl =
          "https://twitter.com/intent/tweet?text=I've been using @unbiasify to reduce my unconscious bias! You should check it out too!"
        handleTabCreation(tweetUrl)
        break
    }
  })
})
