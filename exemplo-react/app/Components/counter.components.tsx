"use client";

import { useState } from "react";

export function Counter() {

    // let count = 0

    const [count, setCount] = useState(0) // Retorna um arry [variavel, função]



    function incrementar() {
        setCount (count + 1);

        console.log("count");
    }

    function decrementar() {

        if (count > 0) {

            setCount (count - 1);
        } 

        console.log(count);
    }

    return (
        <div className='flex flex-col items-start gap-2'> 
            <h1 className='text-lg font-bold'>
                {count}
            </h1>

            <button className='btn btn_primario' onClick={incrementar}>
                Incrementar
            </button>

            <button className='btn btn_secundario'>
                Botão de exemplo
            </button>

            <button className='btn btn_danger' onClick={decrementar}>
                Decrementar
            </button>
        </div>
    );
}