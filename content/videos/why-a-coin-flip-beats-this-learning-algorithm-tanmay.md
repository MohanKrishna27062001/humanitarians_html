---
title: "Why a Coin Flip Beats This Learning Algorithm | Tanmay"
seoTitle: "Why a Fair Coin Flip Beats Sarsa in the Short Corridor"
description: "Tanmay Kulkarni uses the short-corridor puzzle from Sutton and Barto to show why Sarsa fails, why a coin flip wins, and how REINFORCE finds the best bias."
summary: "A Humanitarians AI fellow works through the short-corridor puzzle from Sutton and Barto's reinforcement learning textbook. A fair coin scores -12 against Sarsa's -44, and REINFORCE learns the best bias of about 58.6 percent right."
keywords: ["why random policy beats sarsa", "short corridor reinforcement learning example", "sutton and barto short corridor puzzle", "policy gradient vs action value methods", "reinforce algorithm learns coin bias", "why optimal policy can be random", "sarsa fails with aliased states", "when is the best move random"]
generated: "article"
---

Some problems have a best answer that is not any single choice but a random one. The video presents one such case from Sutton and Barto's textbook on reinforcement learning, a book about machines that learn by trial and error. Tanmay Kulkarni presents it for Humanitarians AI and reports his own runs.

## The blindfolded corridor puzzle

The puzzle is four squares in a row. You start on the left, the goal is on the right, and every step costs a point. You have two buttons, left and right. The catch is that in the second square the buttons are swapped, and you are blindfolded: every square gives the same reading, and you cannot count your steps. Whatever you do in one square, you therefore do in all of them. The video's central observation is that any rule you could pick is really a coin, defined by how often it presses right, from never to always.

## Why fixed rules fail

The two extremes are both disasters. Always pressing right moves you to square two, where the swap slides you back to square one, and the loop never ends, so the score never stops counting. Always pressing left walks you into the wall, and you stand there forever. No fixed button works.

## Sarsa lands on minus 44

The video then hands the problem to Sarsa, a classic algorithm from the earlier chapters of the book. It learns one score per button, since every square reads the same, and mostly presses the higher-scoring one. One time in ten it presses a random button to keep exploring, which is what gets it out of the loops. The presenter ran it 30 times and all 30 runs settled on the same behavior: mostly right, worth about minus 44, the same number the book reports. The only other place it can land, mostly left, is worse at about minus 82. It is built to find a best button, and this corridor has none.

## A fair coin scores minus 12

The next test was almost insulting: no learning at all, just a fair coin flipped at every step. That scores minus 12, which beats Sarsa by more than three and a half times, and it is the exact value rather than a lucky run. The reason is that the swapped square punishes commitment. Leaning hard on either button costs you through bouncing or getting stuck, and the coin never commits.

## The best coin is biased

Is 50/50 the best possible coin? Plotting the score for every setting between never right and always right shows both ends never finish, the learner's two options sit far down, and the fair coin sits near the top but not at it. The best setting leans a little toward right: 2 minus the square root of 2, about 58.6 percent right, for a score of about minus 11.66. The book rounds it to 59 percent and leaves the exact form as an exercise. That form is irrational, so the best coin could never be minted exactly.

## Learning the probabilities directly

Chapter 13 of the book introduces learners that do not score buttons at all. They learn the coin's bias directly, shifting the odds toward whatever the runs reward. The simplest is called REINFORCE. Starting from the worst setting, mostly left at minus 82, it averaged about minus 3 within 400 episodes in the video's run, and across 30 runs the average setting it settled on was 58.6 percent, so it found the irrational answer on its own. The book's point is that methods that score actions have no natural way of finding the best random policy, while methods that learn probabilities do.

## When is randomness necessary?

The video closes with a test. Take off the blindfold and the same Sarsa learner, now keeping a separate score per square, learned right, left, right in all 30 runs for a score of minus 3. When the player knows exactly where it is, a fixed rule is always best, so the coin was covering for what it could not see. Randomness can also survive: in rock, paper, scissors against an opponent that learns your habits, always rock lost nearly every round and an even three-way split broke even, whereas against a random opponent always rock does as well as anything.

## Key takeaways

- Any rule in the corridor is a coin, defined by how often it presses right.
- Sarsa settled on mostly right in all 30 runs, worth about minus 44.
- A fair coin scores minus 12, beating Sarsa by more than three and a half times.
- The best coin presses right about 58.6 percent of the time, for roughly minus 11.66.
- REINFORCE learns the bias directly and found that value on its own.
- If giving the player more information makes the randomness vanish, it was covering for hidden state.
- If the randomness survives, look for someone who would exploit a pattern.

## Try it yourself

Apply the video's test to a goalkeeper facing a penalty and choosing which way to dive: does more information make the randomness disappear, or does it survive? A strong answer names the missing information or the person who would exploit the pattern. If you code, the video links the corridor script, so you can run it and watch the blindfold come off.
