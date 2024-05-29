// function Contact (){
//     return (
//         <div className="allContact">
         
//             <h1 className="pleaseContact">Please Contact Me at:</h1>
//             <div className="contactBody">
//                 <h2 className="singleBody">Email: emilycassel77@gmail.com</h2>
//                 <h2 className="singleBody">Phone Number: (765) 730-7163</h2>
//                 <h2><a className="linkedInLink" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a></h2>
//             </div>
//         </div>
//      )
//  }
 


// // // export default Contact;

// // import React, { useState } from 'react';

// // function Contact() {
// //   const [showModal, setShowModal] = useState(false);
// //   const [showMessage, setShowMessage] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: ''
// //   });

// //   const toggleModal = () => {
// //     setShowModal(!showModal);
// //   };

// //   const handleChange = e => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     // Send formData to backend
// //     console.log(formData);
// //     // Close modal after submission
// //     setShowModal(false);
// //     // Show message
// //     setShowMessage(true);
// //   };

// //   const closeMessage = () => {
// //     setShowMessage(false);
// //   };

// //   return (
// //     <div className="allContact">
// //       <h1 className="pleaseContact">Please Contact Me at:</h1>
// //       <div className="contactBody">
// //         <h2 className="singleBody">Email: emilycassel77@gmail.com</h2>
// //         <h2 className="singleBody">Phone Number: (765) 730-7163</h2>
// //         <h2><a className="linkedInLink" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a></h2>
// //         <button onClick={toggleModal}>Contact Me</button>
// //         {showModal && (
// //           <div className="modal">
// //             <div className="modal-content">
// //               <span className="close" onClick={toggleModal}>&times;</span>
// //               <h2>Contact Me</h2>
// //               <form onSubmit={handleSubmit}>
// //                 <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
// //                 <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
// //                 <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
// //                 <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
// //                 <button type="submit">Send</button>
// //               </form>
// //             </div>
// //           </div>
// //         )}
// //         {showMessage && (
// //           <div className="message">
// //             <p>Message sent successfully!</p>
// //             <button onClick={closeMessage}>Close</button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// export default Contact;
