---
title: "Onboard an M5Stack Board With One Claude Command"
seoTitle: "Onboard an M5Stack ESP32 Board With One Claude Command"
description: "One Claude command detects, identifies, flashes and installs an M5Stack ESP32 board, with one manual button step on native USB boards."
summary: "The video walks through the m5-onboard skill, which provisions an M5Stack ESP32 board in about two to three minutes through four stages. It explains why one physical button sequence cannot be automated on native-USB boards but is skipped on bridge-chip boards."
keywords: ["onboard m5stack esp32 with claude", "m5stack firmware flash usb steps", "esp32 native usb reset button sequence", "usb to serial bridge versus native usb", "detect identify flash install workflow", "claude code plugin for hardware setup", "esp32 boot loop wrong firmware variant", "run long scripts in background log"]
generated: "article"
---

One Claude command can provision a whole M5Stack ESP32 board, taking it through detect, identify, flash and install in about two to three minutes. The video, narrated by Liam for Humanitarians AI, looks at the m5-onboard Claude Code plugin and asks whether the process really has zero exceptions. Its answer is that there is one: on boards that connect over native USB, a person has to do a short button sequence by hand.

## One command, four stages

The whole workflow runs through a single command, and underneath it are four stages:

- Detect finds the board over USB and then confirms the actual chip. The port name differs by system: usbmodem on macOS, ttyACM or ttyUSB on Linux, and COM on Windows.
- Identify checks hardware signatures for a likely firmware match, but the final choice is always stated explicitly, never guessed.
- Flash writes the firmware itself.
- Install copies the real program files onto the board and restarts it.

Two smaller tools cover narrower jobs: pushing just the app bundle to a board that is already flashed, and running a hardware check afterwards.

## Three things that matter when running it

First, two boards share the exact same USB signature, so the script cannot tell them apart on its own. Guess the variant wrong and the device boot-loops, which is why the choice is stated explicitly.

Second, a full run takes two to three minutes, so it goes in the background with its output streamed to a log file. The video notes that a silent terminal for three minutes looks exactly like a crash.

Third, the flash step on native-USB boards needs a person.

## The button sequence

On native-USB boards there is no software line the script can pulse to put the chip into flashing mode, so the reset is physical. You hold one button, tap reset while still holding it, hold for one more second, then let go. The script waits for the person to actually do that.

## Native USB versus a bridge chip

The video stresses that this step is not universal. It is needed only because native-USB boards have no control line to force a reset, so the standard software trick of toggling two control lines does nothing there. Boards that connect through a separate USB-to-serial bridge chip skip the button sequence entirely. The same software trick works normally and the whole flash step runs without anyone touching the board.

It is the same script and the same command each time. Which path it takes depends on which USB hardware is inside the board.

## Key takeaways

- One command runs four stages: detect, identify, flash and install.
- Port names differ by operating system: usbmodem on macOS, ttyACM or ttyUSB on Linux, COM on Windows.
- The firmware variant is always stated explicitly because two boards share one USB signature, and a wrong guess causes a boot loop.
- A run takes two to three minutes, so it runs in the background with a log file.
- Native-USB boards need a manual sequence: hold a button, tap reset, hold a second longer, release.
- Boards with a separate USB-to-serial bridge chip flash hands-off.
- Every stage but one can be automated; the button press stays a human's job.

## Try it yourself

The video suggests pasting a prompt into Claude: say you are using the m5-onboard skill to set up a new M5Stack board, and ask it to tell you, before running anything, which stage needs you to touch the device and what the button sequence is. Then watch whether Claude names the sequence before starting, or just launches the script and waits.
