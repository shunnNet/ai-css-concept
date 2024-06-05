# AICSS concept
> [!WARNING] 
> This is a  repository for demo.

How about write CSS class like this ?

```vue
<template>
  <div
    :class="`
  ai-a_box_at_horizontal_center_max800width_height500_with_border
  ai-order_child_vertically_and_put_them_center_center
  `"
  >
    <h1>aicss demo</h1>
    <div class="ai-red-triangle-rotate-1-round-per-second"></div>
  </div>
</template>
```

[![aicss-demo](https://i.ytimg.com/vi/YPJQwJ8JnBE/maxresdefault.jpg)](https://www.youtube.com/watch?v=YPJQwJ8JnBE) 

This demo use [UnoCSS](https://unocss.dev/) + [OpenAI](https://openai.com/index/openai-api/) to dynamically generate css rules by natural language class name.

The class name `ai-[description]` is kind of prompt. You can just describe your visaul requirements, then AI will generate css style for you.

## Try it
> [!WARNING] 
> Will use many token. Consider turn off `VSCode UnoCSS plugin` and `Auto Save`, or it will generate new CSS every time you type a class name

1. Clone this repository

2. At project root, run `pnpm install`

3. Add your OpenAI API key to `uno.config.ts`

4. Start the demo by: `pnpm dev`

5. Go to `http://localhost:5173` to check results.

## How to write the class ?
Write a class name start with `ai-` then write a graphic description.

e.g: `ai-a-red-circle-blinking-per-1s` or `ai-aRedCircleBlinkingPerSecond`

You can write anything you want, you can also combine with `UnoCSS` utility class.