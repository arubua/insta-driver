import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Layout from './hoc/Layout/layout';
import Profile from './components/Profile/Profile'



class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact  component={Profile} />
                </Switch>
            </Layout>
           
        )
    }
}

export default Routes;