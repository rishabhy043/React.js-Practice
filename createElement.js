const h1 = React.createElement("div" , {className: "class1" , id : "id1" } ,"i am rishabh" )
const h2 = React.createElement('h2' , {className:"abc"} , "i am b.tech student")
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(h1)
root.render(h2)
// console.dir(h2);


//    Creating element 

const Element = React.createElement("div" , { class : "Elem2"} ,
     [React.createElement("section" , {key:1} , [React.createElement("p" , {key:2} , "ReactDOM Code Breakdown:")])]
    )

    root.render(Element)