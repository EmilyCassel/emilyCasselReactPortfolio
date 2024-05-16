import React, { useState } from 'react';

export function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClose = (index) => {
        setActiveTab(index === activeTab ? -1 : activeTab); // If the current tab is closed, set activeTab to -1
    };

    const titles = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return (
                <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    style={{
                        fontWeight: activeTab === index ? "bold" : "normal",
                        marginRight: "8px"
                    }}
                >
                    {child.props.title}
                </button>
            );
        }
        return null;
    });

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                {titles}
            </div>
            <div>
                {React.Children.map(children, (child, index) => {
                    return (
                        <div style={{ display: activeTab === index ? 'block' : 'none' }}>
                            {child}
                            <button onClick={() => handleTabClose(index)}>Close Tab</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}




export function Tab({ title, children, onClose }) {
    return (
        <div>
            <div>{children}</div>

        </div>
    );
}



// import React, { useState } from 'react';

// export function Tabs({ children }) {
//     const [activeTab, setActiveTab] = useState(0);

//     const titles = React.Children.map(children, (child, index) => {
//         if (React.isValidElement(child)) {
//             return (
//                 <div key={index} style={{ display: "flex" }}>
//                     <button
//                         onClick={() => setActiveTab(index)}
//                         style={{
//                             fontWeight: activeTab === index ? "bold" : "normal",
//                             marginRight: "8px"
//                         }}
//                     >
//                         {child.props.title}
//                     </button>
//                     {activeTab !== index && (
//                         <button onClick={() => handleTabClose(index)}>X</button>
//                     )}
//                 </div>
//             );
//         }
//         return null;
//     });

//     const handleTabClose = (index) => {
//         if (index === activeTab) {
//             setActiveTab(0); // Set active tab to the first tab
//         }
//         // You can also remove the tab from the list of children if needed
//     };

//     return (
//         <div>
//             <div style={{ marginBottom: '16px' }}>
//                 {titles}
//             </div>
//             <div>
//                 {React.Children.map(children, (child, index) => {
//                     return index === activeTab ? child : null;
//                 })}
//             </div>
//         </div>
//     );
// }

// export function Tab({ title, children }) {
//     return (
//         <div>
//             {children}
//         </div>
//     );
// }




// import React, { useState } from 'react';

// export function Tabs({ children }) {
//     const [activeTab, setActiveTab] = useState(0);

//     const titles = React.Children.map(children, (child, index) => {
//         if (React.isValidElement(child)) {
//             return (
//                 <button
//                     key={index}
//                     onClick={() => setActiveTab(index)}
//                     style={{
//                         fontWeight: activeTab === index ? "bold" : "normal",
//                         marginRight: "8px"
//                     }}
//                 >
//                     {child.props.title}
//                 </button>
//             );
//         }
//         return null;
//     });

//     return (
//         <div>
//             <div style={{ marginBottom: '16px' }}>
//                 {titles}
//             </div>
//             <div>
//                 {React.Children.map(children, (child, index) => {
//                     return index === activeTab ? child : null;
//                 })}
//             </div>
//         </div>
//     );
// }

// export function Tab({ children }) {
//     return (
//         <div>
//             {children}
//         </div>
//     );
// }


// import React, { useState } from 'react';

// export function Tabs({ children }) {
//     const [activeTab, setActiveTab] = useState(0);

//     const titles = React.Children.map(children, (child, index) => {
//         if (React.isValidElement(child)) {
//             return (
//                 <button
//                     key = {index}
//                     onClick={() => setActiveTab(index)} // when button is clicked activeTab is set to the index of the button clicked
//                     style={{ //checking one thing against another 
//                         //index = location of where child is
//                         fontWeight: activeTab === index ? "bold" : "normal", marginRight: "8px"
//                     }}
//                 >    
//                {child.props.title}
//                 </button>
//             )
//         }
//         return null;
//     })


//     // Loop over each child(expected to be a Tab component)
//     // get the the title prop from each component
//     // display each of the titles and attach logic to display or hide the component
//     return ( 
//         <div> 
//            <div style={{ marginBottom: '16px' }}>
//                 {/* {titles} */}
//                 {titles.map((title, number) => { 
//                     return (
//                         title
//                     ) 
//                  }

//             )}

//             </div>
//             <div>
//                 {React.Children.map(children, (child, index) => {
//                     if (index === activeTab) {
//                         return child; // Display the content of the active tab
//                     }
//                     return null; // Hide other tabs
//                 })}
//             </div>
//             {children}
//         </div>
//     )
// }


// export function Tab({title, children}){
//     return(
//         <div>
//             {children}
//         </div>
//     )

// }


