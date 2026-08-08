---
layout: post
title:  How to Approach Writing Technical Strategy
description: A practical, bottom-up way to start writing technical strategy without staring at a blank page.
tags: management
toc:
  beginning: true
---

#### Why is technical strategy so hard to start?

Someone asks you for "the engineering strategy" and your stomach drops a little. It sounds like you're supposed to sit down and produce a grand document that answers everything at once: how the teams are organized, what technology is approved, how you'll evaluate new tools, and what this particular project should build. That's a lot to hold in your head, and it's why so many strategy docs never get written.

The trick I've found is to stop treating strategy as one big thing. It's really three smaller things, and you don't have to write them in the order you might expect. Most of this framing comes from [Will Larson's writing on engineering strategy](https://lethain.com/engineering-strategy/), which is worth reading in full.

#### What actually makes up a technical strategy?

There are three documents doing three different jobs. Keeping them separate is most of the battle.

**A vision describes where you're headed.**

- It sketches how you want the technology and the organization to work in two to three years.
- It should be vivid enough to align people but loose enough that it doesn't box in every future decision.
- This is the document people *think* they want first. It's usually the one you should write last.

**A strategy guides the tradeoffs you make along the way.**

- It's the diagnosis of your current situation plus the guiding policy that follows from it.
- Its real value is explaining the *why* behind your guidance so people can apply it to situations you didn't anticipate.
- A good one is honestly a little boring. It states what's true and what you're going to do about it, without much drama.

**A specification records a single decision.**

- You might call it an RFC, a tech spec, or a design doc. Same idea.
- It captures the decision and the tradeoffs for one specific project.
- Think of it as legal precedent: a concrete ruling others can point back to when a similar question comes up.

#### Where should you actually start?

Bottom-up, with the specs. This is the part that surprised me.

**Start with the specifications you're probably already writing.**

- You don't need permission or a mandate to write down why you chose a particular approach for a particular problem.
- If your team already writes design docs, you've started. If not, this is the cheapest possible place to begin.

**Synthesize strategies once you see a pattern repeat.**

- After you've got a handful of specs, you'll notice the same tradeoff showing up again and again. That repetition is the raw material for a strategy.
- Wait for the pattern before you generalize. One example is an anecdote; several are a trend worth writing a guiding policy around.

**Extrapolate the vision last.**

- Once you have a few strategies pointing in a consistent direction, you can reason about where they'll take you in a couple of years.
- Trying to do this first is how you end up with a vision doc that sounds impressive and changes nothing.

#### What makes the difference between real and fake strategy?

**Start wherever you are, and start now.**

- Waiting for perfect information or executive sign-off is the most common way strategy never happens.
- A rough spec written this week beats a perfect vision you'll get to eventually.

**Write specifically.**

- Vague statements create the *feeling* of alignment without any of the substance. Everyone nods and then does whatever they were going to do anyway.
- Name the technologies, the teams, the tradeoffs. Specifics are what people can actually act on or push back against.

**Show your work.**

- Strategy shifts as context shifts. If you've written down your reasoning, the next person can update it instead of starting over.

#### Further reading

- [Will Larson — Engineering strategy](https://lethain.com/engineering-strategy/)
- [Will Larson — Good engineering strategy is boring](https://lethain.com/good-engineering-strategy-is-boring/)
- [Will Larson — Writing an engineering strategy](https://lethain.com/eng-strategies/)
