const h1 = React.createElement("div" , {className: "class1" , id : "id1" } ,"i am rishabh" )
const h2 = React.createElement('h2' , {className:"abc"} , "i am b.tech student")
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(h1)
root.render(h2)
// console.dir(h2);


//    Creating element 

const Element = React.createElement("div" , { class : "Elem2"} ,
[React.createElement("section" , {key:1} , [React.createElement("p" , {key:2} , "ReactDOM Code Breakdown:") ,
    React.createElement("img" , {class : "img1" , src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s"} )
]) , React.createElement("h1" , {} , "I AM HEADING ONE")]
)

 root.render(Element)

const createimg= React.createElement("img" , {class : "img1" , src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s"} )
// root.render(createimg)