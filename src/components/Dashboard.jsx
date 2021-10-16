import React, { useState, useEffect } from 'react'

import '../css/item.css'

import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

const Dashboard = () => {
    const user = useSelector((state) => state.user)
    const [items, setItems] = useState([])


    useEffect(async () => {
        // Actualiza el título del documento usando la API del navegador
        await axios.get('https://gorest.co.in/public/v1/todos')
            .then(response => {
                // Obtenemos los datos
                let items = response.data.data
                setItems(items)

                console.log(items)
            })
            .catch(e => {
                // Capturamos los errores
            })
    }, []);

    // getItems()



    return (
        <section className="principal">
            {!user &&
                <Redirect to={"/login"}></Redirect>
            }

            {items === [] &&

                <h1>no data</h1>

            }

            {items !== [] &&




                <ul>
                    
                    {items.map((item, i) => {
                        
                        
                        return(
                            <div>
            <section className="principal-detail">
                <div className="product-info-2">
                   
                    <div className="product-i">
                        <h6>{item.title}</h6>
                       <p >{item.status}</p>
                        
                    </div>
                </div>
            </section>
           
        </div>
                        )
                        




                    })}




                </ul>


            }



        </section>
    )




}


export default Dashboard;