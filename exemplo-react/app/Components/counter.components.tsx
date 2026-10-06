"use client";

import { Minus, Plus, Shuffle, X } from "lucide-react";
import { useState } from "react";

export function Counter(props: any) {

    // let count = 0
    
    //Hooks são funções especiaeis que permite adicionar funcionalidades
    const [count, setCount] = useState(props.initialValue ?? 0) // Retorna um arry [variavel, função]



    function incrementar() {
        setCount (count + 1);

        console.log("count");
    }

    function incrementarOuDecrementar() {

        if (count > 0) {

            setCount (count - 1);

        }

        console.log(count);
    }

    function zera() {
        setCount(count - count)
    }

    function randomizar() {
        const randomNumero = Math.floor(Math.random() * 100) + 1

        setCount(randomNumero)
    }

    return (
        <div className='flex flex-col items-start gap-2'> 
            <h1 className='text-lg font-bold'>
                {count}
            </h1>
            <div className='flex gap-2'>
                 <button className='btn btn_primario' onClick={incrementar}>
                    <Plus/>
                </button>

                <button className='btn btn_secundario' onClick={incrementarOuDecrementar}>
                    <Minus/>
                </button>

                <button className='btn btn_danger' onClick={zera}>
                    <X/>
                </button>

                <button className='btn btn_success' onClick={randomizar}>
                    <Shuffle/>
                </button>
            </div>
        </div>
    );
}