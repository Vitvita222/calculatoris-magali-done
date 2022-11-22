import  './styles.css' 
import { Component, useState } from 'react'

const Vitala = () => {

    return (
        <div className='container'>
            <p className='calculatorname'>CALCULATOR</p>
            <div className='firstnm'>
                <input className='firstinp' placeholder='First Number'  ></input>
            </div>
            <p className='plus'>+</p>
            <div className='secondnm'>
                <input className='secondinp' placeholder='Second Number' ></input>
            </div>
            <button className='calculate'>Calculate</button>
            <div className='sumnm'>
                <input className='suminp' placeholder='Addition'></input>
            </div>




            {/* objects */}
        </div>
    )

}

export default Vitala;