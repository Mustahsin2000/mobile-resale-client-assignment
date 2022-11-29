import React from 'react';


const Blogs = () => {
    
    return (
       <div className='m-3'>
         <div className="card w-full bg-primary text-primary-content m-3">
  <div className="card-body">
    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
    <p>The Four Kinds of React State to Manage
Local state. Global state. Server state. URL state.</p>
    
  </div>
</div>
<div className="card w-full bg-primary text-primary-content m-3">
  <div className="card-body">
    <h2 className="card-title"> How does prototypical inheritance work?</h2>
    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
   
  </div>
</div>

<div className="card w-full bg-primary text-primary-content m-3">
  <div className="card-body">
    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
    
  </div>
</div>
       </div>



    );
};

export default Blogs;