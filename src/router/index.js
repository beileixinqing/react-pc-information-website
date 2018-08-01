import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Index from '../pages/Index';
import NewsDetail from '../pages/NewsDetail';
import Intro from '../pages/Intro';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Search from '../pages/Search';
import ProfessorList from '../pages/ProfessorList';
import Professor from '../pages/Professor';
import Tag from '../pages/Tag';
import NoMatch from '../pages/NoMatch';

const routes = [
    {
        path: "/detail/:id",
        component: NewsDetail
    },
    {
        path: "/",
        component: Index,
        exact:true
    },
    {
        path: "/index",
        component: Index
    },
    {
        path: "/intro",
        component: Intro
    },
    {
        path: "/professor_list",
        component: ProfessorList
    },
    // {
    //     path: "/professor_index",
    //     component: ProfessorIndex
    // },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/news_list/search/:id",
        component: Search
    },
    {
        path: "/news_list/professor/:id",
        component: Professor
    },
    {
        path: "/news_list/tag/:tag",
        component: Tag
    },
    {
        component: NoMatch
    },
    /*{
        path: "/news_list",
        component: NewsList,
        routes: [
            {
                path: "/news_list/search/:id",
                component: Search
            },
            {
                path: "/news_list/professor/:id",
                component: Professor
            },
            {
                path: "/news_list/tag/:tag",
                component: Tag
            }
        ]
    }*/
];

const RouteWithSubRoutes = route => (
    <Route
        exact={route.exact}
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const MainRoute = () => (
    <Router>
        <div>
            <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
        </div>
    </Router>
);

export default MainRoute;