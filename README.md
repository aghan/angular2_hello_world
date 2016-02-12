# An Sample Hello World application

# Prerequisites
You have have NodeJS, npm and Gulp installed

## NodeJS

Node is used to run standalone JS program on a server. We will use NodeJS to run our package manager (nam) and Gulp, an automated task runner

### For OSX
For OSX, there are two ways to install Node:

**1. Via Homebrew:**

First make sure you have Homebrew package manager installed: Check this link out for installing Homebrew: http://coolestguidesontheplanet.com/installing-homebrew-on-os-x-el-capitan-10-11-package-manager-for-unix-apps/

Now, go to your terminal and type this command:

```
brew install node
```

**2. Via Node package installer**

 - Go to : https://nodejs.org/en/
 - Download the mature and dependable node version (v4.3.0) 
 - Install the package as we normally do on OSX

### For Ubuntu

For Ubuntu, there are two ways to install Node:

**1. Via apt-getw:**

First make sure your apt-get package manager is updated via this command on your terminal:

```
sudo apt-get update
```

Now, on your terminal and type this command:
```
sudo apt-get install nodejs
```
To install npm, on your terminal and type this command:
```
sudo apt-get install npm
```

**Note:** Sometimes the node command is accessible via "nodejs" command on Ubuntu, we need to make sure that Node is accessible via the "node" command. If this doesn't happen, we can install nodejs-legacy package.
```
sudo apt-get install nodejs-legacy
```

**2. Via Node package installer**

 - Go to : https://nodejs.org/en/
 - Download the mature and dependable node version (v4.3.0) 
 - Install the package as we normally do on Linux


To make sure you have Node and NPM installed properly, run these two simple commands to see what version of each is installed:

```
node -v
```
```
npm -v
```
 
These commands should return you Node and npm versions.

## Getting Started

 - Clone or download the repo from:
 - Run `npm install`
 - Run `gulp serve`

This will start a development server and launch your browser to show the application in action.
