'use client'

import { useEffect } from 'react'

export function ConsoleEasterEgg() {
  useEffect(() => {
    // Prevent duplicate execution in development (React StrictMode)
    if (typeof window !== 'undefined' && (window as any).__consoleEasterEggShown) {
      return
    }
    (window as any).__consoleEasterEggShown = true

    // ASCII art content (from /docs/ascii-art.md)
    const asciiArt = `
##      ##    ###     ######   ######  ##     ## ########  
##  ##  ##   ## ##   ##    ## ##    ## ##     ## ##     ## 
##  ##  ##  ##   ##  ##       ##       ##     ## ##     ## 
##  ##  ## ##     ##  ######   ######  ##     ## ########  
##  ##  ## #########       ##       ## ##     ## ##        
##  ##  ## ##     ## ##    ## ##    ## ##     ## ##        
 ###  ###  ##     ##  ######   ######   #######  ##        

      `

    // Console styling
    console.log(
      '%c' + asciiArt,
      'color: #FF8C42; font-family: monospace; font-size: 10px; line-height: 1.2;'
    )

    // console.log(
    //   '%cHey there! 👋',
    //   'color: #FF8C42; font-size: 16px; font-weight: bold;'
    // )

    console.log(
      '\n%cLike my site? Check out the source at https://github.com/jaredtheclark/v0-portfolio \n',
      'color: #949494; font-size: 20px; font-family: Courier New;'
    )
  }, [])

  return null
}
