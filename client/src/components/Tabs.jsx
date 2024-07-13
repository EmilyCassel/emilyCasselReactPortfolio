import React, { useState } from 'react';

export function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (title) => {
        setActiveTab(activeTab === title ? null : title);
    };

    const handleCloseTab = (title) => {
        if (activeTab === title) {
            setActiveTab(null);
        }
    };

    const titles = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            const { title } = child.props;
            return (
                <button
                    key={index}
                    onClick={() => handleTabClick(title)}
                    className={`tab-button ${activeTab === title ? 'active' : ''}`}
                >
                    {title}
                </button>
            );
        }
        return null;
    });

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {titles}
            </div>
            <div>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        const { title } = child.props;
                        return (
                            <div className={`tab-content ${activeTab === title ? 'active' : ''}`}>
                                {child}
                                {activeTab === title && <button className="close-tab-button" onClick={() => handleCloseTab(title)}>Close Tab</button>}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export function Tab({ title, children }) {
    return (
        <div>
            {children}
        </div>
    );
}


// import React, { useState } from 'react';


// export function Tabs({ children }) {
//     const [activeTab, setActiveTab] = useState(null);

//     const handleTabClick = (title) => {
//         setActiveTab(activeTab === title ? null : title); // Toggle the active tab when clicked
//     };

//     const handleCloseTab = (title) => {
//         if (activeTab === title) {
//             setActiveTab(null);
//         }
//     };

//     const titles = React.Children.map(children, (child, index) => {
//         if (React.isValidElement(child)) {
//             const { title } = child.props;
//             return (
//                 <button
//                     key={index}
//                     onClick={() => handleTabClick(title)}
//                     className={`tab-button ${activeTab === title ? 'active' : ''}`}
//                 >
//                     {title}
//                 </button>
//             );
//         }
//         return null;
//     });

//     return (
//         <div className="tabs">
//             <div className="tab-buttons">
//                 {titles}
//             </div>
//             <div>
//                 {React.Children.map(children, (child) => {
//                     if (React.isValidElement(child)) {
//                         const { title } = child.props;
//                         return (
//                             <div className={`tab-content ${activeTab === title ? 'active' : ''}`}>
//                                 {child}
//                                 {activeTab === title && <button className="close-tab-button" onClick={() => handleCloseTab(title)}>Close Tab</button>}
//                             </div>
//                         );
//                     }
//                     return null;
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

