---
title: "Deepa Shenoy explains: Brutalist Film-as-Code Setup"
seoTitle: "Set Up the Brutalist Film-as-Code Workflow on a Mac"
description: "Deepa Shenoy's week two update on getting the Brutalist film-as-code workflow running locally on a Mac, from Python setup to the builders check."
summary: "In her week two progress update, Deepa Shenoy describes getting the existing Brutalist workflow running on her Mac. She covers the repository, the Python 3.12 environment, the Manim fix and the final check that lists the available builders."
keywords: ["set up brutalist workflow on mac", "python 3.12 virtual environment setup", "manim pango pkg-config install fix", "film as code local setup", "check python git node installed", "install openai codex coding agent", "list available video builders", "volunteer progress update film as code"]
generated: "article"
---

This is Deepa Shenoy's week two progress update with Humanitarians AI, narrated by Liam on her behalf. Her focus for the week was getting the existing Brutalist workflow running locally on her Mac, so she could move from setting up tools to making videos. The video is a short, first-person account of what she did and in what order.

## Getting the repository

The first step was to download and extract the Brutalist.art repository. Once it was on her machine, she reviewed its folders and the video builders it makes available. Looking through the project before installing anything gave her a picture of what the workflow includes, which made the later setup steps easier to follow.

## Checking the base tools

Before building anything, she checked that Python, Git and Node were present. These are the three tools the setup depends on, and confirming them first avoids chasing errors later that really come from a missing tool.

## A Python 3.12 environment

Next she created a Python 3.12 virtual environment and installed the required Python dependencies into it. Using a virtual environment keeps the project's packages separate from the rest of the system, which suits a repeatable setup. The video does not go into the individual packages. It names the environment and the step, and then moves on to the one part that did not work the first time.

## Fixing the Manim dependencies

The Manim setup needed additional dependencies. She resolved that by installing Pango and Package Config. This is the one problem the update calls out, and it is a useful pointer for anyone following the same path: if Manim will not set up cleanly, the missing pieces may be system libraries rather than Python packages.

## Installing a coding agent

She also installed and configured OpenAI Codex as the coding agent she would use with the project. The video states this as part of the setup and does not describe how it is used yet.

## Checking that it works

To check the setup, she ran the project's list command, written in the narration as dot slash art, dash dash list, and confirmed the available builders. That result told her the local environment was working and ready for production. With the environment working, she was ready to move from setup into creating and reviewing her first Brutalist videos.

## Key takeaways

- Start by downloading and extracting the Brutalist.art repository, then review its folders and the available video builders.
- Check that Python, Git and Node are installed before going further.
- Create a Python 3.12 virtual environment and install the required Python dependencies.
- If the Manim setup needs more dependencies, installing Pango and Package Config resolved it here.
- Install and configure a coding agent for the project, which was OpenAI Codex in this case.
- Verify the setup by running the list command and confirming that the builders appear.
- A working local environment is the point where you can move from setup to making videos.

## Try it yourself

If you are setting up the same workflow, follow the order in the video: get the repository, check Python, Git and Node, build the Python 3.12 environment, and install the dependencies. Treat the list command as your finish line. When it shows the available builders, your environment is ready, and you can start on a first video.
