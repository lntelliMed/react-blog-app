import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                    to="/posts/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }} >Posts</NavLink></li>
                            <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                            }} >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                <Switch>
                    {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
                    {this.state.auth? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={() => <h1>Not Found!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
