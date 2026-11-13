---
title: "Claude Skills Explained: Slack GIF Creator | Automated GIFs vs. Creative Judgment"
seoTitle: "Claude Slack GIF Creator Skill: What It Does and Doesn't"
description: "What the Claude slack-gif-creator skill really provides: Slack size limits, a GIF builder, easing curves, and a validator, while you still draw the frames."
summary: "The slack-gif-creator skill does not hand over finished animations. It supplies Slack's exact size rules, a GIF builder, easing curves, and validation, while the frame-by-frame drawing in PIL is still yours."
keywords: ["claude slack gif creator skill", "slack emoji gif size requirements", "make animated gif for slack", "gif builder easing module pil", "validate gif slack ready", "claude skill creates animation", "slack gif 128 by 128 limit", "why gif passes but looks bad"]
generated: "article"
---

You might picture asking Claude for a bouncing star GIF and having it produce the whole animation start to finish. The video says the skill does not work that way. The slack-gif-creator skill assembles what you actually draw, and it supplies the rules and tools around the drawing rather than the drawing itself.

## Slack's exact numbers

The video starts with the constraints. Slack enforces exact numbers for these GIFs. Emoji GIFs are 128 by 128 pixels and under 3 seconds, while message GIFs are 480 by 480. Frame rate and color range are also specified, and if you miss the numbers Slack will not take the file. The running example is a bouncing star emoji GIF for a team channel that has to land inside those limits.

## No ready-made animations

The natural guess is that the skill ships finished animations, so asking for a bounce yields a `bounce.gif`. The video says there is no bounce function to call. The easing module hands back a curve, and the GIF builder assembles the frames. The drawing of where the star sits on each frame is PIL code you write yourself.

## The toolkit

The GIF builder takes a width, height, and frame rate, accepts your PIL frames one at a time, and then saves with color quantization. For the emoji track that means 48 colors, optimized for emoji.

The easing module turns a progress value from zero to one into a smooth number, with seven curves including bounce out, elastic out, and ease in. That number then drives your drawing.

Two functions check the result before anything ships. `validate_gif` produces a full compliance report, and `is_slack_ready` gives a quick yes or no. Both automatically check the same numeric rules from the spec.

## Five documented limitations

The skill names five limitations up front: no complex shape helper, no text guidance, no dithering fix, no loop-matching helper, and you install the dependencies yourself. The video stresses that this is what is documented, not a guarantee of everything.

## Passing is not the same as looking good

For the star, the steps are to draw it frame by frame with PIL, drive the bounce with bounce-out easing, let the GIF builder assemble and quantize it, and not call it done until the Slack check says yes. When it passes, that is real: the file is the right size, under the time limit, and inside the color budget.

But passing does not mean it looks good. A heart or a snowflake still needs hand-drawn polygon math, dithering at 48 colors is not checked, and a seamless loop only happens if you match the first and last frame yourself.

## Key takeaways

- The skill does not ship ready-made animations; you write the PIL drawing code.
- Slack emoji GIFs must be 128 by 128 pixels and under 3 seconds, and message GIFs are 480 by 480.
- The GIF builder assembles frames and quantizes colors, using 48 colors for emoji.
- The easing module offers seven curves that turn progress from zero to one into a smooth value.
- `validate_gif` and `is_slack_ready` check the numeric rules before you call the GIF done.
- Passing the validator does not mean the animation looks good.
- A seamless loop requires you to match the first and last frame.

## Try it yourself

Paste this into Claude: make me a pulsing fire emoji GIF for Slack that loops smoothly, feels energetic, and stays under 3 seconds, using the Slack GIF Creator skill. Then watch three things. Does it look up the emoji spec before writing any code? Does it use the GIF builder and the easing module instead of reinventing frame assembly? And does it call `is_slack_ready` or `validate_gif` before calling the GIF done?
