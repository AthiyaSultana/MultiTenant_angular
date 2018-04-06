# Multi-app Angular project based on sample Hero app

This is a multi-app Angular project to demonstrate how code can be reused with base components when you want to have shared logic, but different HTML and CSS.

This is based on the [Tutorial: Tour of Heroes][2] that has been extended to two apps, one named **Brand 1** and one named **Brand 2** that has differnt styling. See `package.json` for all the npm scripts, but here are some of them:

* `npm run build:brand1` - builds Brand 1 app
* `npm run build:brand2` - builds Brand 2 app
* `npm run start:brand1` - runs Brand 1 app
* `npm run start:brand2` - runs Brand 2 app
* `npm run test` - runs tests. Contains only a few, but at least I fixed the broken ones from the sample project.
* `npm run e2e` - runs end-to-end tests. As created by the original Hero app (will run against **Brand 1**)
[2]: https://angular.io/tutorial
