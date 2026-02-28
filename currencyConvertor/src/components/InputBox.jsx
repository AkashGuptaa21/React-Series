import React, {useId} from 'react'


function InputBox ({    //props destructuring
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",     //css 
}) {
   
    const amountInputId= useId()  //for uniquesness

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> // js mein css 
            
            <div className="w-1/2">
                
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                   { label}
                </label>

                <input
                    
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}  //amount state se aa raha hai
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //if onAmountChange exists (safe calling),only then function call //Input value alwys string , so Number()
                />

            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    //js code 
                       {currencyOptions.map((currency)=>(
                         <option key ={currency} value={currency}>
                          {currency}
                        </option>
                
                       ))}    /*  //<option value="gbp">gbp</option>*/

                </select>
            </div>
        </div>
    );
}

export default InputBox;




