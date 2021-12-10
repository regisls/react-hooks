import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store';
import { numberAdd2, login } from '../../store/actions';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Regis')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberMultiplica7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDivide25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'arredondar'})}>Arredondar</button>
                </div>
                <div>
                    <input type="text" className="text" id="numero" />
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: parseFloat(document.getElementById("numero").value)})}>+N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
