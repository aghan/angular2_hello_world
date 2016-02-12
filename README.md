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

This process will automatically install npm, which couls be accessible via your terminal.

**2. Via Node package installer**

 - Go to : https://nodejs.org/en/
 - Download the mature and dependable node version (v4.3.0) 
 - Install the package as we normally do on OSX
 - This process will automatically install npm, which couls be accessible via your terminal.

### For Ubuntu

For Ubuntu, there are two ways to install Node:

**1. Via apt-get:**

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
 - Install the package as we normally do on Ubuntu.
 
These commands should return you Node and npm versions.

### For Windows

For Windows, we recommend downloading the NodeJS installer

**Node package installer for Windows**

 - Go to : https://nodejs.org/en/
 - Download the mature and dependable node version (v4.3.0) 
 - Install the Node program via the Windows installer you just downloaded.
 - This process will automatically install npm, which couls be accessible via your NodeJS command prompt.

## Gulp

Gulp is an automated front-end task runner that we would need to do our front end tasks.

 - Open your terminal or open the NodeJS Command Prompt in case you're using Windows, this command prompt gets installed on your machine as we install Node package.
 - Type the following command:
 
```
npm install -g gulp
```
Use "sudo" as a prefix to this command if you get permission errors:

```
sudo npm install -g gulp
```

### Final Checks

To make sure you have Node, npm and Gulp installed properly, run these three simple commands in your terminal: (Windows users should use the NodeJs command prompt)

```
node -v
```
```
npm -v
```
```
gulp -v
```

# Getting Started with our Angular Application

 - Clone this repo by typing this command in your terminal (Windows users could use the GIT installer available on the web to install GIT and Git Bash, a command prompt to access git commands)

```
git clone https://github.com/aghan/angular2_hello_world.git
```
 
 Now navigate to the cloned repo and run the following commands:
 
 - `npm install`
 - `gulp serve`

This will start a development server and launch your browser to show the application in action.
