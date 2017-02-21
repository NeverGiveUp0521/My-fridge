function keyup(){  
    var quantity = document.getElementById("quantity").value;  
    if(isNaN(quantity) ||  parseInt(quantity)!=quantity || parseInt(quantity)<0){  
        quantity = 0;  
        return;  
    }  
    
}  
  
/*商品数量+1*/  
function numAdd(){  
    var quantity = document.getElementById("quantity").value;  
    var num_add = parseInt(quantity)+1;  
    var price=document.getElementById("price").value;  
    if(quantity==""){  
        num_add = 1;  
    }  
    {  
        document.getElementById("quantity").value=num_add;  
        var Num=price*num_add;  
        document.getElementById("totalPrice").innerHTML=Num.toFixed(2);  
    }  
}  
/*商品数量-1*/  
function numDec(){  
    var quantity = document.getElementById("quantity").value;  
    var price=document.getElementById("price").value;  
    var num_dec = parseInt(quantity)-1;  
    if(num_dec>=0){  
        document.getElementById("quantity").value=num_dec;  
        var Num=price*num_dec;  
         document.getElementById("totalPrice").innerHTML=Num.toFixed(2);  
    }  
}  
function show()  
{  
    document.getElementById("totalPrice").innerHTML=3.25*3;  
}  




function keyup1(){  
    var quantity = document.getElementById("quantity1").value;  
    if(isNaN(quantity) ||  parseInt(quantity)!=quantity || parseInt(quantity)<0){  
        quantity = 0;  
        return;  
    }  
    
}  
  
/*商品数量+1*/  
function numAdd1(){  
    var quantity = document.getElementById("quantity1").value;  
    var num_add = parseInt(quantity)+1;  
    var price=document.getElementById("price").value;  
    if(quantity==""){  
        num_add = 1;  
    }  
    {  
        document.getElementById("quantity1").value=num_add;  
        var Num=price*num_add;  
        document.getElementById("totalPrice").innerHTML=Num.toFixed(2);  
    }  
}  
/*商品数量-1*/  
function numDec1(){  
    var quantity = document.getElementById("quantity1").value;  
    var price=document.getElementById("price").value;  
    var num_dec = parseInt(quantity)-1;  
    if(num_dec>=0){  
        document.getElementById("quantity1").value=num_dec;  
        var Num=price*num_dec;  
         document.getElementById("totalPrice").innerHTML=Num.toFixed(2);  
    }  
}  
function show()  
{  
    document.getElementById("totalPrice").innerHTML=3.25*3;  
}  




function keyup2(){  
    var quantity = document.getElementById("quantity2").value;  
    if(isNaN(quantity) ||  parseInt(quantity)!=quantity || parseInt(quantity)<0){  
        quantity = 0;  
        return;  
    }  
    
}  
  
/*商品数量+1*/  
function numAdd2(){  
    var quantity = document.getElementById("quantity2").value;  
    var num_add = parseInt(quantity)+1;  
    var price=document.getElementById("price").value;  
    if(quantity==""){  
        num_add = 1;  
    }  
    {  
        document.getElementById("quantity2").value=num_add;  
        var Num=price*num_add;  
        document.getElementById("totalPrice").innerHTML=Num.toFixed(2);  
    }  
}  
/*商品数量-1*/  
function numDec2(){  
    var quantity = document.getElementById("quantity2").value;  
    var price=document.getElementById("price").value;  
    var num_dec = parseInt(quantity)-1;  
    if(num_dec>=0){  
        document.getElementById("quantity2").value=num_dec;  
        var Num=price*num_dec;  
         document.getElementById("totalPrice").innerHTML=Num.toFixed(2);  
    }  
}  
function show()  
{  
    document.getElementById("totalPrice").innerHTML=3.25*3;  
}  