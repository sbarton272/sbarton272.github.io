---
layout: post
title:  Building a Hiring Plan
description: Treating team composition as a constrained optimization problem.
tags: management hiring
toc:
  beginning: true
---

Hiring plans are a complex optimization problem with constraints ranging from team makeup, expected attrition, budget, product roadmap and expertise needs. Here's how I work through it.

#### Start from the product roadmap

- I usually start from the product roadmap to get an ideal upper bound. I'll estimate project sizes in people-months to get a rough idea.
- I'll also account for maintenance of existing systems. At a recent role I proposed two additional SWE hires based on building and deploying a new algorithm (taking up a person's full time for a quarter) plus an additional hire to help maintain the algorithms we already had deployed.

#### Pick skills based on the roadmap

- The types of skills for the new hires can be based on the roadmap.
- In the example above I needed SWEs because the team already had ML people who weren't spending all of their time doing ML work. We had bandwidth on ML effort but needed more support on coding for the upcoming projects.

#### Level for the longer term

- Leveling of candidates can be a bit longer term. An ideal team has the ability to support current projects and develop new efforts. It has a mix of experience levels and someone who can act as a tech lead (or is on track to become one).
- An aside: a tech lead to me is an engineer who's taking on more team planning and project management.
- If the team is lacking in senior folks then aim for more experience. A team of all senior people may be effective, but if everyone wants a leadership role and won't be a follower you're in trouble.

#### Layer in the constraints

- In tech, assume possible attrition starting after a year on the job.
- The team can't onboard too many people at a time. Ideally you're growing by no more than a third a quarter in my experience.
- Try to concentrate growth as much as possible, so hiring a bit ahead is great if possible. This lets the team have larger chunks of product focus time.
- Budget will likely be the big limiting factor.

#### A few more thoughts

- If your team spends a large chunk of its time maintaining systems and fixing bugs, that could be a sign you're stretched thin and need to grow the team (or you need to spend time paying down debt). Conversely, if working on new stuff means degraded performance on other responsibilities that could be a sign too. Measure it in bugs created/completed versus other tickets.
- Budget is more fungible than it sometimes appears. If you can connect the dots on product wins with hires it is an easier sell.
- Hiring for ML teams is a bit different as there are more specializations. I aim for ML folks who are competent coders as they can still get their models deployed. That said, a project may demand ML expertise, particularly if it's one where optimizing things really matters. That'll be a specific skill set you'll need to hire for.
- ML and data science folks should be tested on additional dimensions like data storytelling, stats, ML and data munging.
- ML folks usually need ~3 support engineers (data, product, backend engineers) because ML requires so much solid data, deployment and experimentation infrastructure. Internal transfers and pushing for hires on key support teams (like a data engineering team that supports ML) can be alternatives to new hires.
