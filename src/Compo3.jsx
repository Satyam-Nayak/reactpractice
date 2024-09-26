import React from "react";

function Compo3(){
    return(
        <React.Fragment>
            <h2 style={{display:"flex", justifyContent:"center",textDecoration:"underline"}}>Introduction To React JS</h2>
            <ul>
            <li>React JS is a Java-Script open source library.</li>
            <li>React JS is a free Open source libarary that is available for all the users to build UI-(User Interface) with the help of components.</li>
            <li>React JS is widely used to build single-page applications (SPAs) and user interfaces but can also be used in multi-page apps.</li>
            <li>As one of the widely used frontend libray around the world</li>
            </ul>
            
            <br />
            <h4 style={{textDecoration:"underline"}}>History</h4>
            <ul><li><p>React JS was invented in the year 2013 by developers at facebook(META)</p></li></ul>
            <h2 style={{textDecoration:"underline"}}>SPAs (Single Page Applications)</h2>
            <ul>
                <li>SPAs are a type of webpage where the user receives an initial response from the server, and the webpage is built as a single-page application using React components.</li>
                <li>They dynamically update parts of the page with new data without unmounting the whole page when the user communicates with the server.</li>
                <li>SPAs avoid reloading the entire webpage, leading to a smoother and faster user experience.</li>    
            </ul>

        </React.Fragment>
    )
}
export default Compo3