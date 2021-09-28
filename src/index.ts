export interface EmoteOptions {
  format?: 'static' | 'animated' | 'default',
  themeMode: 'light' | 'dark',
  scale: '1.0' | '2.0' | '3.0'
}

/**
 * Return the image element for the provided emote id and options
 * 
 * @param id Emote ID
 * @param options  Emote Options
 * @returns Emote image HTML
 */
const idToImage = (id: string, options?: EmoteOptions) => {
  return `<img src ='https://static-cdn.jtvnw.net/emoticons/v2/${id}/${options?.format || 'default'}/${options?.themeMode || 'light'}/${options?.scale || '1.0'}' class='twitch-emote'/>`
}

/**
 * Bring back emotes in a chat message
 * 
 * @param msg Message where the emotes will be added
 * @param emotes Emote object provided by twitch (throught TMI.js)
 * @param options Options to apply when rendering objects. More information: https://dev.twitch.tv/docs/irc/emotes/
 * @returns Message with emotes as IMG elements
 */
const parse = (msg: string, emotes: { [x: string | number]: string[] }, options?: EmoteOptions): string => {
  const charVariants: any[] = []
  let intermediateString = msg
  if (!emotes) {
    return msg
  }
  Object.keys(emotes)
    .forEach(
      id => {
        // Each emote instance
        const ranges = emotes[id].map(stringRange => {
          const [start, end] = stringRange.split('-').map(n => parseInt(n, 10))
          return { start, end }
        })

        ranges.forEach(range => {
          const charReduction = charVariants.filter(cv => cv[0] < range.end).reduce((sum, cv) => { sum += cv[1]; return sum }, 0)
          const initialLength = intermediateString.length
          intermediateString = intermediateString.substr(0, range.start - charReduction) + idToImage(id, options) + intermediateString.substr(range.end + 1 - charReduction)
          const finalLength = intermediateString.length
          charVariants.push([range.end, initialLength - finalLength])
        })
      }
      , {})

  return intermediateString
}

export {
  parse,
  idToImage
}