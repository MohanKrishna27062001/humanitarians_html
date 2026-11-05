---
title: "I Changed One File on My Cardputer. Do I Reinstall It All?"
seoTitle: "Cardputer: Push One File Without Reinstalling Apps"
description: "Changed one file on your Cardputer? Learn the four helper scripts, and why push.py beats install_apps.py for a single edit."
summary: "The video answers a common Cardputer question: after changing one file, you do not reinstall everything. It explains the MicroPython launcher, the apps folder, four helper scripts, and which script fits a small edit."
keywords: ["cardputer micropython app development", "push one file to cardputer", "cardputer install apps script", "cardputer launcher apps folder", "cardputer serial logs while testing", "cardputer hello app template", "do i need to reinstall cardputer apps", "add a new app to cardputer"]
generated: "article"
---

Someone changes one file on their Cardputer and assumes that means reinstalling everything on the device. The video says it does not. There is a script for exactly that case, and the video explains which one to use, why it matters, and how the rest of the toolset fits together. It belongs to the Claude Basics playlist and covers a Cardputer buddy project.

## How the Cardputer finds your apps

The Cardputer runs MicroPython on a /flash/ file system. The file main.py is the launcher. At boot it scans the apps folder and lists every .py file it finds as a menu entry, automatically. To add an app, drop a new file into that folder and push it to the device, and it shows up on the next boot. No registration code is needed anywhere.

## The payload in three zones

The video divides what lives on the device into three zones:

- the launcher itself
- a shared library of BLE, UI, state and protocol code
- the apps folder, which holds whatever is installed

When you write a new app, you start from hello_cardputer.py. It is the smallest working example and covers keyboard polling, font rendering and the convention for exiting back to the launcher.

## Four scripts, one job each

Four scripts drive everyday changes:

- install_apps.py pushes the entire apps folder over USB serial. Use it when you have added or renamed files and need the whole directory back in sync.
- push.py pushes just the files you name. Use it when you have edited one existing file and want the fast loop.
- tail_serial.py streams the device's serial logs. Run it in a second terminal while you test.
- repl_run.py runs a single Python expression over the REPL, which is handy for a quick file system check without pushing anything.

All four need the PORT value that the provisioning step detected earlier. On a Mac it looks like /dev/cu.usbmodem, on Linux /dev/ttyACM, and on Windows COM.

## The overlap that bites

Both install_apps.py and push.py can push your one changed file. The difference is that install_apps.py syncs the complete apps folder every time, which takes longer than it needs to for a single edit. Given just that one filename, push.py does the same job in a fraction of the time. The video points out that nothing in either script's name tells you which is faster for the change in front of you. You have to remember it, because the tools will not remind you. The video adds that "takes longer" is a consequence of syncing a folder versus one named file, not a measured benchmark.

## Key takeaways

- A one-file change does not require reinstalling everything on the Cardputer.
- main.py scans /flash/apps/ at boot and lists every .py file as a menu entry, with no registration code.
- Start new apps from hello_cardputer.py, which shows keyboard polling, font rendering and the exit convention.
- Use push.py for a single edited file and install_apps.py when files were added or renamed.
- Run tail_serial.py in a second terminal to watch the device's logs while testing.
- repl_run.py runs one expression over the REPL for a quick check without pushing.
- All four scripts need the PORT value found during provisioning.
- Match the script to the size of the change, not to habit.

## Try it yourself

On your own Cardputer, paste this into Claude: "Add a timer app to the Cardputer that counts down from 60 seconds and returns to the launcher when done." Then check four things. Does it create the new file in buddy/device/apps/ following the hello_cardputer.py structure? Does it use push.py instead of install_apps.py? Does it poll the keyboard for a key back to the launcher, rather than looping with no way out? And after pushing, does it suggest tail_serial.py to watch the output?
