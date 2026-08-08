---
name: spencer-writing-voice
description: Use when drafting or editing blog posts, manager-readme-style pages, or other prose meant to sound like Spencer Barton for the sbarton272.github.io site — captures tone, structure, and formatting conventions from his existing writing.
---

# Spencer Writing Voice

## When to use

Any time you're producing prose that will be published under Spencer's name on `sbarton272.github.io` — blog posts in `_posts/`, pages in `_pages/`, drafts in `_drafts/`, or content that mirrors that style.

## Voice principles

- **Talk to the reader.** Direct second person ("you've got", "guard your most productive hours"). Avoid third-person corporate framing.
- **Modest and humane.** Light self-disclosure ("I find", "I sometimes", "I've taught"), but sparing. Never preachy. Acknowledge that the reader is smart.
- **Practical and concrete.** Name actual tools, link to real resources (Clockwise, Atlassian playbooks, books, articles). No abstract jargon.
- **Acknowledge nuance.** Avoid absolutes. "Sometimes this is unavoidable however it's rarely sustainable" is the shape — state the rule, then the honest exception.
- **Conversational contractions.** "you're", "don't", "it's".
- **Generous whitespace.** Short paragraphs, blank lines between bullets, easy to skim.
- **No buzzwords or hype.** "Synergy", "leverage", "stakeholder alignment" — out. Plain language.

## Structural conventions

- **Question-headed sections.** Most section headers are questions: "Why try to improve your time management?", "What are the constraints on your time?", "How to make the best of the available time".
- **Bold lead-in + bullets.** Each idea inside a section starts with a bold sentence stating the point, followed by 2–4 supporting bullets that unpack it. Example: `**Don't let meetings control your life.**` → bullets with concrete tactics.
- **TLDR for longer pieces.** Open with three quick bullets summarizing the stance (see Manager Readme).
- **"Further reading" closer.** End longer pieces with a short list of external links.
- **Emoji section markers are optional flavor.** Used on the Manager Readme (🥖 📐 ♻️), skipped on the time-management post. Use them when the piece is personal/reflective; skip on tactical how-tos.

## Jekyll frontmatter template

```yaml
---
layout: post
title:  Your Title Here
description: One-sentence summary that would fit on a card.
tags: management
toc:
  beginning: true   # only for longer pieces with multiple sections
---
```

For pages in `_pages/`, use `layout: page`, add `permalink:` and `nav:` / `nav_order:`.

## Before / after

**Generic / corporate:**
> Effective time management is a critical competency for high-performing professionals. By leveraging best-in-class productivity frameworks, individuals can optimize their workflow and maximize output.

**In voice:**
> **You probably don't know where your time goes.**
>
> - Periodically it can be really informative to perform a time study. This will let you see in detail where your time goes.
> - I recommend recording your time every 30 min for a typical week.
> - Tools like [TogglTrack](https://toggl.com/track/) or a simple spreadsheet can help.

## Anti-patterns

- Third-person passive ("it is recommended that teams should…")
- Buzzwords (synergy, leverage, ideate, circle back, stakeholder alignment)
- Lecturing tone or absolutes ("you must always", "never")
- Walls of text — break into bullets with bold lead-ins
- Inventing tools, books, or quotes — only link to things that actually exist
- Heavy emoji use on tactical posts (save them for personal/reflective pages)
