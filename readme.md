## Simple TMI Emote Parse

Whis this package, you can transform the Twitch plain-text emote representation to html with images using the `emote` object provided inside TMI.js messages.


    import { parse } from 'twitch-emotes'

    const msg = 'loeyaFLOWER loeyaFLOWER loeyaH loeyaRAID loeyaRAID loe1 loe1 loeyaHAPPY loeyaHAPPY loeyaHAPPY loeyaYAY'
    const emotes = {"302718264":["51-54","56-59"],"305147530":["61-70","72-81","83-92"],"305147589":["31-39","41-49"],"305147697":["94-101"],"305698546":["24-29"],"305698571":["0-10","12-22"]}

    const html = parse(msg, emotes)
    


    
      