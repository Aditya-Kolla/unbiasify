import $ from 'jquery'

import { angellistUpdater } from './networks/angellist'
import { facebookUpdater } from './networks/facebook'
import { githubUpdater } from './networks/github'
import { greenhouseUpdater } from './networks/greenhouse'
import { meetupUpdater } from './networks/meetup'
import { leverUpdater } from './networks/lever'
import { linkedinUpdater } from './networks/linkedin'
import { replitUpdater } from './networks/replit'
import { twitterUpdater } from './networks/twitter'

export const changeAll = (isSet = false, val = true) => {
  linkedinUpdater('photos', isSet, val)
  linkedinUpdater('names', isSet, val)
  angellistUpdater('photos', isSet, val)
  angellistUpdater('names', isSet, val)
  twitterUpdater('photos', isSet, val)
  twitterUpdater('names', isSet, val)
  replitUpdater('photos', isSet, val)
  replitUpdater('names', isSet, val)
  greenhouseUpdater('photos', isSet, val)
  greenhouseUpdater('names', isSet, val)
  leverUpdater('photos', isSet, val)
  leverUpdater('names', isSet, val)
  facebookUpdater('photos', isSet, val)
  facebookUpdater('names', isSet, val)
  githubUpdater('photos', isSet, val)
  githubUpdater('names', isSet, val)
  meetupUpdater('photos', isSet, val)
  meetupUpdater('names', isSet, val)
}

export const toggleAll = (function() {
  const toggleAll = false
  return () => {
    toggleAll = !toggleAll
    chrome.storage.sync.set({ toggleAll: toggleAll })
  }
})()

changeAll()

$(document).keydown(function(e) {
  const ctrlKey = e.ctrlKey || e.metaKey
  const shiftKey = e.shiftKey
  const semiColon = e.which === 186

  if (ctrlKey && shiftKey && semiColon) {
    toggleAll()
  }
})

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (const key in changes) {
    const storageChange = changes[key]
    if (key === 'toggleAll') {
      const isTrue = storageChange.newValue
      changeAll(true, isTrue)
    }
  }
})

export const messageListener = chrome.runtime.onMessage.addListener(function(
  request
) {
  switch (true) {
    case request.toggleNames:
      linkedinUpdater('names', true)
      break
    case request.togglePhotos:
      linkedinUpdater('photos', true)
      break
    case request.toggleAlNames:
      angellistUpdater('names', true)
      break
    case request.toggleAlPhotos:
      angellistUpdater('photos', true)
      break
    case request.toggleTwitterNames:
      twitterUpdater('names', true)
      break
    case request.toggleTwitterPhotos:
      twitterUpdater('photos', true)
      break
    case request.toggleReplitNames:
      replitUpdater('names', true)
      break
    case request.toggleReplitPhotos:
      replitUpdater('photos', true)
      break
    case request.toggleGreenhouseNames:
      greenhouseUpdater('names', true)
      break
    case request.toggleGreenhousePhotos:
      greenhouseUpdater('photos', true)
      break
    case request.toggleLeverNames:
      leverUpdater('names', true)
      break
    case request.toggleLeverPhotos:
      leverUpdater('photos', true)
    case request.toggleFacebookNames:
      facebookUpdater('names', true)
      break
    case request.toggleFacebookPhotos:
      facebookUpdater('photos', true)
      break
    case request.toggleGithubPhotos:
      githubUpdater('photos', true)
      break
    case request.toggleGithubNames:
      githubUpdater('names', true)
      break
    case request.toggleMeetupNames:
      meetupUpdater('names', true)
      break
    case request.toggleMeetupPhotos:
      meetupUpdater('photos', true)
      break
  }
})
