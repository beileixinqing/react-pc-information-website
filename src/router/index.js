import React from "react";
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import NewsList from '../pages/News';
import NewsDetail from '../pages/NewsDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Agreement from '../pages/Agreement';
import Statement from '../pages/Statement';
import Community from '../pages/Community';
import Search from '../pages/Search';
import Download from '../pages/Download';
// import ProfessorList from '../pages/ProfessorList';
// import Professor from '../pages/Professor';
import Tag from '../pages/Tag';
import NoMatch from '../pages/NoMatch';

const routes = [
    {
        path: "/detail/:id",
        component: NewsDetail
    },
    {
        path: "/",
        component: () => (
            <Redirect to={`/news/recommend`}/>
        ),
        exact:true
    },
    {
        path: "/index",
        component: () => (
            <Redirect to={`/news/recommend`}/>
        ),
    },
    {
        path: "/news/:id",
        component: NewsList,
    },
    /*{
        path: "/professor_list",
        component: ProfessorList
    },
    {
        path: "/professor_index",
        component: ProfessorIndex
    },*/
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/terms",
        component: Agreement
    },
    {
        path: "/privacy",
        component: Statement
    },
    {
        path: "/convention",
        component: Community
    },
    {
        path: "/news_list/search/:channelId/:id",
        component: Search
    },
    /*{
        path: "/news_list/professor/:id",
        component: Professor
    },*/
    {
        path: "/news_list/tag/:channelId/:tag",
        component: Tag
    },
    {
        path: "/download",
        component: Download
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