
# kmc[ng] Infrastructure [![Build Status](https://travis-ci.com/kaltura/KMCng-infra.svg?token=FN6e4V4SxtqFru4gcq6E&branch=dev)](https://travis-ci.com/kaltura/KMCng-infra) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
The *'Kaltura Console Management - next generation' solution* (a.k.a KMC[ng] solution) is a rich-media management system that enables you to ingest, manage, publish, distribute, monetize and analyze your media – all in one intuitive interface.

The KMC[ng] solution is based on three areas:
- **KMC[ng] Infrastructure Libraries** (this repository)
- [KMC[ng] Shell](https://github.com/kaltura/KMCng)
- [KMC[ng] Applications](https://github.com/kaltura/KMCng)


The KMC[ng] Infrastructure libraries are a set of services, ui-components, pipes and directives used inside KMC[ng] Shell and KMC[ng] Applications.

> Important: This is an initial version and as such it misses important elements:
> - it doesn't contain unit-testing.
> - it doesn't follow KMC[ng] styleguide

## Quick start

KMC[ng] libraries can be used only by KMC[ng] Shell or KMC[ng] Applications. They are consumed directly using NPM.

## Versioning
KMC[ng] will follow the MAJOR.MINOR.PATCH scheme as described by [semver](http://semver.org/spec/v2.0.0.html):

1. the MAJOR version gets incremented when incompatible API changes are made to stable APIs,
1. the MINOR version gets incremented when backwards-compatible functionality are added,
1. the PATCH version gets incremented when backwards-compatible bug are fixed.

Using semver ensures rapid access to the newest features for our component and tooling ecosystem, while preserving a consistent and reliable development environment for production applications that depend on stability between major releases, but still benefit from bug fixes and new APIs.

## Want to help?
Want to contribute some code?
- Read [CONTRIBUTING.md](CONTRIBUTING.md) to learn more about the contribution process.
- Read [DEVELOPER.md](DEVELOPER.md) for development instructions.

## License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.

Copyright © Kaltura Inc. All rights reserved.
