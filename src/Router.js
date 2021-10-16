import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';

import Dashboard from './components/Dashboard';
import Menu from './components/Menu';



const MyRouter =()=> {
    
       
//let user = useUser()

        return (
            <BrowserRouter>
                <Menu />

                {/*configurar rutas */}

                <Switch>
                    
                      
                    
                    
                      
                        <Route exact path="/" render={
                            ()=>{return <Redirect to='/login'/>}
                        } />

                    
                    
                    <Route exact path="/items/:page" render={
                        (props) => {
                            const page = parseInt(props.match.params.page);
                           
                           // return <ProductList  page={page} />

                        }
                    } />
                    
                    

                    <Route exact path="/items/detail/:id" render={
                        props => {
                            const index = parseInt(props.match.params.id);
                           /// return <ProductView index={index}/>
                        }
                    } />


                    <Route exact path="/login" component={Login} />
                    <Route exact path="/items" component={Dashboard} />


                    <Route component={Error} />




                </Switch>



            </BrowserRouter>
        )
    }







export default MyRouter;