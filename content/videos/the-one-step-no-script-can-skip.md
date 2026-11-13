---
title: "The One Step No Script Can Skip."
seoTitle: "Flash an M5Stack ESP32 Board with a Claude Code Skill"
description: "A Claude Code skill runs M5Stack board setup through one command, but native USB boards still need a human to press a button sequence."
summary: "The m5-onboard skill detects, identifies, flashes and installs an M5Stack ESP32 board with one command. The video explains why one step, the button sequence on native USB boards, always stays with a person."
keywords: ["m5stack esp32 onboarding with claude code", "flash m5stack board with one command", "esp32 native usb reset button sequence", "usb bridge vs native usb esp32", "esp32 boot loop wrong firmware variant", "claude code skill hardware provisioning", "detect identify flash install steps", "esp32 flashing needs button press"]
generated: "article"
---

Someone might assume one script can flash a board with zero exceptions. This video, about the m5-onboard skill for Claude Code, shows why that is not quite true. A single command handles the whole cold-start provisioning of an M5Stack ESP32 board, with one step that stays a human job: the button dance.

## One command, four stages

The whole workflow runs through one command, onboard.py with the apps option set to buddy. Underneath are four stages.

- Detect finds the board over USB. The port name differs by system: usbmodem on macOS, ttyACM or ttyUSB on Linux, and COM on Windows. It then confirms the actual chip.
- Identify checks hardware signatures for a likely firmware match, but the final choice is always stated explicitly, never guessed.
- Flash writes the firmware itself.
- Install copies the real program files onto the board and restarts it.

Two smaller tools cover narrower jobs: pushing just the app bundle to a board that is already flashed, and running a hardware check afterward.

## Three things that matter in practice

First, two boards share the exact same USB signature, so the script cannot tell them apart on its own. Guessing the variant wrong makes the device boot-loop. Second, a full run takes two to three minutes, so it goes in the background with its output streamed to a log file, since a silent terminal for three minutes looks exactly like a crash. Third is the flash step itself on boards that connect over native USB.

## The button dance

On native USB boards there is no software line the script can pulse to reset the chip into flashing mode, so the reset is physical. You hold one button, tap reset while still holding it, hold for one more second, then let go. The script waits for the person to actually do that.

## Native USB versus a bridge chip

The physical step is not universal. It is needed only because native USB boards have no control line to pulse, so the standard software trick of toggling two control lines does nothing there. Boards that connect through a separate USB-to-serial bridge chip skip the button dance entirely, because the same software trick works normally and the flash runs without anyone touching the board. The command is the same; the path depends on which USB hardware is inside.

## Key takeaways

- One command, onboard.py with the buddy app, runs detect, identify, flash and install.
- Identify never guesses the firmware variant, because two boards share a USB signature and a wrong guess causes a boot loop.
- A full run takes two to three minutes, so it runs in the background with a log file.
- Native USB boards need a manual button sequence to enter flashing mode.
- Boards with a USB-to-serial bridge chip flash hands-off.
- The script can do every stage but one; no flag replaces a thumb.

## Try it yourself

Paste this into Claude: you are using the m5-onboard skill to set up a new M5Stack board, and before running anything it should tell you exactly which stage needs you to physically touch the device and what the button sequence is. Then watch whether Claude names the button dance before it starts, or just launches the script and waits.
