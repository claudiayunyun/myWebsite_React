# myWebsite_React 
This is my personal website written by ReactJS  

## Deploy React App with Github Pages
Link : https://medium.freecodecamporg/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089  
__Initial Step__  
npm install -g create-react-app  
create-react-app 'your project name'  
cd 'your project name'  
npm install  
npm run build  
__Step 1__  
Edit package.json, add homepage filed:
~~~~  
"homepage": "https://claudiayunyun.github.io/myWebsite_React",  
npm run build  
~~~~
__Step 2__  

install gh-pages : https://www.npmjs.com/package/gh-pages  
~~~~
npm install --save-dev gh-pages  
~~~~
__Step 3__  
add deploy in script filed in package.json : 
~~~~
"deploy": "gh-pages -d build"  
npm run deploy  
~~~~
This step will create/update gh-pages branch  
__Step 4__  
In settings of the repository, use gh-pages branch for github pages.  

## React Router With gh-pages
https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48  

__Step 1__   
index.js render Routes Component  
~~~~
ReactDOM.render(<Routes />,document.getElementById('root'));  
~~~~ 

__Step 2__  
add basename props to Router 
~~~~ 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
<Router basename={process.env.PUBLIC_URL}>  
    <Switch>  
        <Route exact path='/' component={Home}/>  
        <Route exact path='/colorfullife' component={ColorfulLife}/>  
        <Route exact path='/favourites' component={Favourites}/>  
        <Route exact path='/introduction' component={Introduction}/>  
    </Switch>  
</Router>  
~~~~

__Step3__  
hanlding hard refresh -- need to fix