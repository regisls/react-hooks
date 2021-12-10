import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    // Util para não renderizar componentes filhos que não dependam do estado do pai
    const inc = useCallback(function(delta) {
        setCount(curr => curr + delta);
    }, [setCount])

    // function inc(delta) {
    //     setCount(count + delta);
    // }
    
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="cen">
                <span className="text">{count}</span>

                <div>
                    <UseCallbackButtons inc={inc} />
                </div>
            </div>
        </div>
    )
}

export default UseCallback
