import {createStore} from 'redux';

const initialState = {
    user:false
}

const reducer = (state = initialState, action) => {
    console.log(action.payload)

    switch (action.type){
        
        case 'SET_USER':{
            console.log('user logeado')
            return{
                user: action.payload
            }
        }
        case 'COMPRA_REALIZADA':{
    
            return{
                compraRealizada: false
            }
        }
        case 'DELETE_PRODUCT':{
            console.log('eliminando orden...')
            
            return{...state,order : action.payload}


           
        }
        case 'RECIBIR_ORDEN':{
            console.log("orden desde redux: "+ action.payload)
            let order= action.payload
            return{...state,order}
            
        }
        
        default:{
            return{
                compraRealizada: false
            }
        }
    }





    return state
}


const Store = createStore(reducer, initialState)

export default Store