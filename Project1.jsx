import React, { useContext, useState } from 'react'
import './App.css'
import context from './context'
import reducer from './reducer'

const Project1 = () => {
    const { state, dispatch } = useContext(context)
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const addition = (e) => {
        e.preventDefault();
        if (Number(amount) === 0) alert("Zero is Not Allowed!")
        if (Number(amount) !== 0) {
            dispatch({ type: 'add', text, amount: Number(amount) })
            setText("");
            setAmount("");
        }
    }

    const income = () => {
        let iCount = 0;
        for (let i = 0; i < state.length; i++) {
            if (state[i].amount > 0) {
                iCount += state[i].amount;
            }
        }
        return iCount;
    }
    const expense = () => {
        let eCount = 0;
        for (let i = 0; i < state.length; i++) {
            if (state[i].amount < 0) {
                eCount += state[i].amount;
            }
        }
        return eCount;
    }
    return (
        <div className='container' >
            <header>
                <h1>Expense Tracker </h1>
            </header>
            <main>
                <h3>Your Balance <br /> ${parseFloat(income()+expense()).toFixed(2)}</h3>
                <div className='income'>
                    <span className='first'>
                        <h4>Income <br /> ${parseFloat(income()).toFixed(2)}</h4>
                    </span>
                    <span className='second'>
                        <h4>Expense <br /> ${parseFloat(expense()).toFixed(2)}</h4>
                    </span>
                </div>
                <h3 className='history'>History</h3>
                <hr />
                <ul>
                    {state.map((item, index) => (
                        <li key={index}>
                            <span>{item.text}</span>
                            <div>
                                <span className={item.amount > 0 ? 'green' : 'red'}>${item.amount}</span>
                                <button className={item.amount > 0 ? 'btn-green' : 'btn-red'} onClick={() => dispatch({ type: 'remove', index })}>×</button>
                            </div>
                        </li>
                    ))}
                </ul>


                <h3 className='trans'>Add New Transactions</h3>
                <hr />
                <form onSubmit={addition}>
                    <label htmlFor='text'>Text</label><br />
                    <input type='text' value={text} className='input1' placeholder='Enter Text...' onChange={(ev) => { setText(ev.target.value) }} required />
                    <br /><br />
                    <label htmlFor='amount'>Amount</label><br />
                    <input type='number' value={amount} className='input1' placeholder='Enter Amount...' onChange={(ev) => { setAmount(ev.target.value) }} required />
                    <hr />
                    <button type='submit'>Add Transaction</button>
                </form>
            </main>
        </div>
    )
}

export default Project1