const basket1 = document.querySelector(".basket1");
const basket2 = document.querySelector(".basket2");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
value1 = parseInt(basket1.innerHTML);
value2 = parseInt(basket2.innerHTML);

img1.addEventListener("click" , () =>{
value1--;
basket1.innerHTML = value1;
value2 ++;
basket2.innerHTML = value2;
});

img2.addEventListener("click" , () =>{
    value2 --;
    basket2.innerHTML = value2;
    value1 ++;
    basket1.innerHTML = value1;
    })

    //  CREATING ELEMENT USING REACT JS

    const container = React.createElement