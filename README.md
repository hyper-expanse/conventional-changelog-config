# @hbetts/conventional-changelog-config

> Standard conventional-changelog configuration as used by projects maintained by Hutson Betts (@hbetts).

Configuration package for tools within the [`conventional-changelog`](https://www.npmjs.com/package/conventional-changelog) ecosystem, or those that leverage the ecosystem, such as `semantic-release-gitlab`, that support [loading `conventional-changelog` presets](https://www.npmjs.com/package/semantic-release-gitlab#preset).

## Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Debugging](#debugging)
- [Node Support Policy](#node-support-policy)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

* [x] If not specified below, this package defaults to [`conventional-changelog-angular`](https://www.npmjs.com/package/conventional-changelog-angular).

**Recommended Bump Options**

* [x] Returns level `2` for fixes, `1` for features, `0` for breaking changes and `null` for all other changes.

## Installation

To install the `@hbetts/conventional-changelog-config` configuration package for use in your project please run the following command:

```bash
yarn add --dev @hbetts/conventional-changelog-config
```

## Usage

Each tool capable of using a `conventional-changelog` configuration package has its own API for consuming the configuration. Please refer to those tools for the appropriate documentation.

However, as an example, if you are using `semantic-release-gitlab` or `semantic-release-github`, you can pass this configuration package to those tools like so:

```bash
$(yarn bin)/semantic-release-gitlab --preset @hbetts/config
```

## Debugging

To assist users of `@hbetts/conventional-changelog-config` with debugging the behavior of this module we use the [debug](https://www.npmjs.com/package/debug) utility package to print information to the console. To enable debug message printing, the environment variable `DEBUG`, which is the variable used by the `debug` package, must be set to a value configured by the package containing the debug messages to be printed.

To print debug messages on a unix system set the environment variable `DEBUG` with the name of this package prior to executing a tool that invokes this module:

```bash
DEBUG=@hbetts/conventional-changelog-config [CONSUMING TOOL]
```

On the Windows command line you may do:

```bash
set DEBUG=@hbetts/conventional-changelog-config
[CONSUMING TOOL]
```

## Node Support Policy

We only support [Long-Term Support](https://github.com/nodejs/LTS) versions of Node.

We specifically limit our support to LTS versions of Node, not because this package won't work on other versions, but because we have a limited amount of time, and supporting LTS offers the greatest return on that investment.

It's possible this package will work correctly on newer versions of Node. It may even be possible to use this package on older versions of Node, though that's more unlikely as we'll make every effort to take advantage of features available in the oldest LTS version we support.

As each Node LTS version reaches its end-of-life we will remove that version from the `node` `engines` property of our package's `package.json` file. Removing a Node version is considered a breaking change and will entail the publishing of a new major version of this package. We will not accept any requests to support an end-of-life version of Node. Any merge requests or issues supporting an end-of-life version of Node will be closed.

We will accept code that allows this package to run on newer, non-LTS, versions of Node. Furthermore, we will attempt to ensure our own changes work on the latest version of Node. To help in that commitment, our continuous integration setup runs against all LTS versions of Node in addition the most recent Node release; called _current_.

JavaScript package managers should allow you to install this package with any version of Node, with, at most, a warning if your version of Node does not fall within the range specified by our `node` `engines` property. If you encounter issues installing this package, please report the issue to your package manager.

## Contributing

Please read our [contributing guide](https://gitlab.com/hyper-expanse/open-source/configuration-packages/conventional-changelog-config/blob/master/CONTRIBUTING.md) to see how you may contribute to this project.
