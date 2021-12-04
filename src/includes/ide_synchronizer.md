<h1>Synchronize Your Editors</h1>

_"My favorite part of development is resolving large and complex marge conflicts."_
--No one, ever

Developing software is a team effort, and yet our very basis of collaboration - version control systems such as git - offers a poor experience when it comes to working with our teammates.

Developers make countless decisions relying on numerous assumptions every day. No matter how well we coordinate our work or separate ourselves into silos, we're bound to contradict each other somewhere down the line.

Modern development methodologies teach us to shorten the feedback loop. To work in small chunks so as to minimize the size of the contradictions we make with our teammates and thus reduce the time we spend resolving those conflicts.

What if we could take it one step further? Have a Google-docs-like experience for writing software, in which we constantly see what our teammates are doing and are able to not only immediately notice when we step on each other's toes, but also to actively collaborate on the same feature?

This is the vision we would like to offer with Devsession.

## How will it work?

[Trunk based development](https://trunkbaseddevelopment.com/) teaches us that instead of having "feature branches" that are prone to accumulate conflict, we should instead opt to have ["feature flags"](https://trunkbaseddevelopment.com/feature-flags/). Break our work into small unfinished chunks that can live together inside the same code base without interfering with the main functionality of the code.

Devsession will make extensive use of these flags, assigning one to each developer in the system and giving other developers immediate visibility to them. Developers in the team will be working on the same code at the same time using their separate local environments. At any time, they would be able to see what their other teammates are up to (by following their cursor), and to switch their feature flag on and off. That way, they can make sure the feature their fellow developers are working on does not interfere with their own feature. Or in other words - that their assumptions are still in sync.

Devsession will be implemented as a plugin for every IDE that has a plugin system, meaning that whether you're using vim, VSCode, IntelliJ or something else - you will not need to compromise on your environment or tools.

## Git is not the enemy

We at Devsession don't dislike Git. We think it's a great tool for version control, but we feel it's time to re-examine it as a tool for collaboration.

## How do you change an infrastructure that many parts of the code base depend on?

What if you need to change a very central part of the code? One that lots of other parts of the code depend on? Doing so will surely ruin the work of all developers concurrently working on it, right?

Well, yes. But it doesn't have to. While Devsession itself will protect the other developers with its feature-flags system, a good practice in such cases would be to use the [branch by abstraction](https://trunkbaseddevelopment.com/branch-by-abstraction/) method. This method essentially means that the developer would be creating an abstraction around the piece of shared infrastructure, having its own feature-flag of sorts. This flag can be kept off for the rest of the team until the change is finished.

An added benefit is that multiple team members can collaborate on this infrastructure change - either directly or by checking their unfinished code against it to make sure nothing broke.

## What happens when two develoeprs change the same line of code at the same time?

Since all the state of the code is synchronized through the Devsession instance, the instance is not forced to represent conflicts with textual markers like git does in such cases. This means that Devsession will be able to alert the developers of the conflict and have them resolve it before they can switch on each other's feature flag.

This is a stop gap solution that is presented for the resilience of the system, but such cases are best resolved by the two developers communicating about their conflicting assumptions. This is something both of them would be able to notice immediately, rather than potentially days or even weeks down the line.

## Additional features

### Sharing servers

Combined with [Devsession's Terminal Sharing](/terminal-sharing.html), we feel a team can get a very powerful experience. Devsession also intends to offer a secure way to expose development (web) servers between users in order to facilitate development tasks.

### Code heat map

Often, in large code bases, it's not alway trivial to understand which parts of the code should be refactored to get the best result. Devsession will be able to provide a "heat map" of the code, giving insights into where developers spend most of their time.

## Interesting?

Sign up for early access.
