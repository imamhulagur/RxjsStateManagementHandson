

//initial setup
>npm i bootstrap
if you are using .scss, simply import bootstrap in styles.scss
    /* You can add global styles to this file, and also import other style files */
    @import '~bootstrap/dist/css/bootstrap.min.css';
    
/* Add application styles & imports to this file! */
html, body {
    height: 100%;
}

check bootstrap is working or not byt putting button in app-component.html
<button class="btn btn-danger">danger</button>

code formatting tools installation
-----------------------------------
    https://medium.com/@killerchip0/code-style-and-best-practices-enforcement-in-angular-tslint-prettier-94e96f742e73
>npm i prettier --save-dev


Having to run tslint and prettier manually each time you wish to commit, is a real burden
Welcome husky package. It allows you to automatically run your script within git life-cycle hooks like pre-commit and pre-push.

Welcome husky package. It allows you to automatically run your script within git life-cycle hooks like pre-commit and pre-push.
>npm i husky --save-dev {to connect and tsLint to avoid conflicts}

Configure husky to run before commits. Add the following to package.json
“husky”: {
    “hooks”: {
        “pre-commit”: “pretty-quick — staged && ng lint”
    }
}

>npm i pretty-quick --save-dev
But then again running these checks enforcement on the entire code base each time, is a waste of time, resources. And it mess up commits.
Welcome pretty-quick: It identifies which files have changed and allow applying prettier fixes only on those.

You might want also to override some prettier rules with your own. You can create a .prettierrc file in root folder of your project.
Here are my preferred rules:
.prettierrc
{
“tabWidth”: 4,
“singleQuote”: true
}

You might also want to exclude certain files from prettier checks. Just place a .prettierignore configuration file in project’s root folder. Here’s my prefferrence:
.prettierignore
package.json
package-lock.json
yarn.lock
dist

Configure husky to run before commits. Add the following to package.json
“husky”: {
    “hooks”: {
        “pre-commit”: “pretty-quick — staged && ng lint”
    }
}

>ng g m modules/counter

>ng g m modules/todo

>ng g c modules/counter/components/counter-shell -m counter

>ng g c modules/todo/components/filter -m=todo

>ng g c modules/todo/components/todo-list -m=todo

>ng g c modules/todo/components/todo-detail -m=todo

>ng g c modules/todo/components/todo-detail -m="todo"

>ng g c modules/todo/components/todo-shell -m="todo"