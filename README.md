Papirfly Development Task
============================

Welcome
-------
Welcome to the Papirfly Development Task!  Below are instructions to help get you started and outline you on the objectives of the task.

Required Software
-----------------
You will need the following software installed on your workstation in order to complete the task.  Setting up this software will vary between PC/Mac, please consult the official documentation for support.

* [NodeJS](https://nodejs.org/en/) - Terminal commands via a JavaScript runtime.  Once installed make sure that the path to the binary files has been added to your system environment so that they can be called anywhere from the command line.

Recommended Software
--------------------
The following software is highly recommended.  You will need a modern web browser, code editor, terminal, and image editing software to complete the task.

* [Chrome](https://www.google.co.uk/chrome) - A modern web browser that supports ECMAScript 5 (EC5).
* [Visual Studio Code](https://code.visualstudio.com/) - An excellent code editor that works best with TypeScript (VSCode).
* [GIT Bash](https://gitforwindows.org/) - A better terminal for Windows that emulates Linux/Unix command line syntax.  
* [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) - Our preferred image editing software.  A free trial version is available.
* [GIMP](https://www.gimp.org/) - A free alternative to Photoshop for image editing.

Tools & Frameworks
------------------
The development task uses the following tools and frameworks.  If you don't have prior knowledge of these, please consult the official documentation in order to complete the development task.

* [Bootstrap](https://getbootstrap.com/) - Front-end component library (HTML/CSS only).
* [CreateJS](https://createjs.com/) - A framework for working with the HTML5 Canvas element.
* [jQuery](https://jquery.com/) - HTML DOM manipulation library.
* [TypeScript](https://www.typescriptlang.org/) - A typed subset of JavaScript.

Getting Started
---------------
The following assumes you are using VSCode as your code editor:

1. Extract the development task source files to your development folder.  Ensure the full path to the source files does not include folders with spaces in the name.
2. Launch **VSCode**.  Start a new workspace and add the development folder to it.
3. Open a terminal window to your development folder.
4. In the terminal enter the command `npm install`.  This will install the necessary dependencies for development into a `node_modules` folder.
5. From VSCode run the tasks `npm start:dev` and `Typescript watch` (or manually run these from their own terminal windows using the commands `npm run start:dev` and `tsc -watch`).  Both need to be continuously running in the background as you develop.
6. From the VSCode **Run** tab (aka VSCode debugger), start the `Launch debugger` config which will launch the **Chrome** browser to `http://localhost:9000/`.
7. Now you can begin editing the code!  As you save changes, you may notice the terminal windows update.  These are the tasks compiling the TypeScript code into JavaScript.  When the compiling finishes the browser will automatically refresh (hot reload) showing any changes.


TypeScript
----------
TypeScript is a typed subset of JavaScript.  This enables you to assign a type to variables and function returns like other mature programming languages.  Developers with experience working with ActionScript, Java, or C# should find similarities in the syntax.  Additionally, plain untyped JavaScript syntax will work too!

The official TypeScript site has a quick tutorial that is worth reading for those new to the syntax.  You can find that here: [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

Objectives
----------
Ultimately, you need to update the existing source files so that the output matches the supplied design `design/development_task_end.psd` and text content `design/content.txt`.  A strong attention to detail is required as well as clean efficient code that is easy to read and comprehend in a wider development team.  We're looking for candidates to demonstrate basic algorithms to position layouts and a clear understanding of OOP along industry best practices.

* Update the logo to use `logo_acme_rebrand.png`.
* Update the headline copy to **Creating Lasting Partnerships**.
* Size and position the horizontal divide line using the `HorizontalDivide` class to match the design.
* Create `BucketContainer` class extending CreateJS `Container` class, and move the bucket **image**, **heading**, and **body** display objects into that class from the page.  This class will be a reusable display object as there will need to be three buckets on the page.
* Add two more bucket elements with the headlines **PRODUCTION** and **SUPPORT**, to match the design.
* Space the bucket elements with a gutter of **18px**.
* Add stars to the bottom of the page so that there is total of **four stars**.  Right align the stars and space them **10px** apart horizontally.
* Populate the callback method `onNumStarsChange()` so when the stars field receives input it updates the number of stars visible on the page between **1** minimum and **4** maximum.
* Ensure a top margin of **48px**, bottom margin of **60px**, and side margins of **36px**.

Hints & Tips
------------
* When creating the bucket container class, look at the `FrontPage` which also extends the `Container` class.
* Add a get/set to easily retrieve/assign the **image**, **heading**, and **body** values to populate their respective elements in the bucket container.
* The **star** is an image asset, like the logo and bucket image.  You can add an image using the `Bitmap` class.
* Use loops to iterate over repeated functionality (e.g. multiple buckets, stars).
* If a particular class isn't found by Browserify, then double check the path is correct on the `import` statements.
* When adding new files / folders, it may be necessary to **restart** VSCode and/or the tasks so that they are recognized.
* Use the **overlay** to compare your layout to the design. *(NOTE: Minor discrepancies (e.g. small pixel shifts) in text layout is expected as the design was rendered by Adobe Photoshop, whereas your task is rendered by CreateJS.)*

Submission
----------
Once you've completed the development task, compress all files & folders (except the `node_modules` folder) in a ZIP archive and submit as specified in the email this task was attached to.