import React from "react";

function Header({totalIncome}){
    return(
        <header>
            <h2>Income Tracker</h2>
            <div className="total-income">${totalIncome}</div>
        </header>
    )
}
export default Header; 