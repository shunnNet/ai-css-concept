// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

/** Replace with your API Key */
const OPENAI_API_KEY = ""

const generateCSSByClassName = (className) => {
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        // { role: 'system', content: `` },
        {
          role: 'user',
          content: `I will give you css class name, you must answer by only css rule body with no other words.

class name: a50pxSquare
rule: {width:50px; height:50px;},

class name: ${className}
rule: 

`,
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.choices[0].message.content
    })
}


export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno()
  ],
  rules: [
    [
      /ai-(.*)/,
      async ([, className]) => {
        const response = await generateCSSByClassName(className)
        console.log(`.${className}${response}`);
        return `.ai-${className}${response}`
      },
    ]
  ]
})