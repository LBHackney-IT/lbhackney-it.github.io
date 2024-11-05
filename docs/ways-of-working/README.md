---
sidebar_position: 0
---
# Our Ways of Working

## Planning/Prioritisation

1. What are the  user and data needs
2. What about the other work streams - what impact on our planning/prioritisation. Are there any dependencies or crossovers?
3. What task can we pick up that adds the most value or has the most urgent dependencies - scoring
4. Add to project board Trello/Clickup/Jira - This is how we share what we are doing and our progress (specific to development).
5. What are our dependencies?
    1. Do we have what we need ie - common APIs
    2. If no API is there a specification (Swagger doc) we can use to stub until it is available?

![API](./img/ways1.png)

## Weekly task allocation/review

1. What’s outstanding from the previous sprint/week?
2. What’s next?
3. Who’s available?

## Development process

We use the [GitHub Flow branching strategy](../api-playbook/DevOps%20practices/branching_strategies/#gitflow) -
![API](./img/ways2.png)

1. Daily stand-ups  (5 - 10 minutes) - What is everyone doing, is anyone blocked?
2. TDD - Git Branch ➡ Test ➡ Code
3. Pull request/Peer Review - Frequent
4. Release
5. Rinse and repeat - start process on next task

## API development starting point

- API boilerplate - https://github.com/LBHackney-IT/lbh-base-api
