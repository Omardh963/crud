//gettotal.

let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');

function gettotal()
{
    if(price.value!='')
    {
        let result=(+price.value +  +taxes.value + +ads.value)- +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor='green';
    }
    else
    {
        total.innerHTML='';
        total.style.backgroundColor='red';
    }
}

let mood='creat';
let oop;
let moodsearch='title';

function gettotal()
{
    if(price.value!='')
    {
        let result=(+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor='green';
    }
    else
    {
        total.innerHTML='';
        total.style.backgroundColor='red';
    }
}

//creat.
let datapro;
if(localStorage.product!=null)
{
    datapro= JSON.parse(localStorage.product);
}
else
{
    datapro=[];
}



submit.onclick=function()
{
    let newpro=
    {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    
    if(mood=='creat')
    {
    
    if(newpro.count>1)
    {
        for(let i=0; i<newpro.count;i++)
        {
            datapro.push(newpro);
        }
    }
    else
    {
        datapro.push(newpro);
    }
}
else
{
    datapro[oop]=newpro;
    mood='creat';
    count.style.display='block';
    submit.innerHTML='creat';

}
    localStorage.setItem('product',  JSON.stringify(datapro)  )
    console.log(datapro);
    cleardata();
    showdata();
}


//clear.

function cleardata()
{
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}

//read.
function showdata()
{
    let table='';
    for(let i=0;i<datapro.length;i++)
    {
        table += `
          <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].count}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updatedata(${i})" id="update">update</button></td>
                <td><button onclick="deletedata(${i})"  id="delete">delete</button></td>
          </tr>
       `

    }
    document.getElementById('tbody').innerHTML=table;
    let btndelete=document.getElementById('btndelete');
    if(datapro.length>0)
    {
        btndelete.innerHTML=`<button onclick="deleteAll()" id="deleteAll">deleteAll</button>`
    }
    else
    {
        btndelete.innerHTML='';
    }
}
showdata();
function deletedata(i)
{
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);
    showdata();
}
function deleteAll()
{
    localStorage.clear();
    datapro.splice(0);
    showdata();
}
function updatedata(i)
{
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    ads.value=datapro[i].ads;
    discount.value=datapro[i].discount;
    gettotal();
    category.value=datapro[i].category;
    submit.innerHTML='update';
    count.style.display='none';
    mood='update';
    oop=i;
    scroll({
        top:0,
        behavior:"smooth"

    })

}
function getsearch(id)
{
    if(id=='search by title')
    {
        moodsearch='title';
        search.placeholder='search by title';
    }
    else
    {
        moodsearch='category';
        search.placeholder=' search by category';
    }
    search.focus();
}
function searchdata(value)
{
    let table='';
    if(moodsearch='title')
    {
        for(let i=0; i<datapro.length; i++)
         {
            if(datapro[i].title.includes(value))
            {
                table += `
                <tr>
                      <td>${i}</td>
                      <td>${datapro[i].title}</td>
                      <td>${datapro[i].price}</td>
                      <td>${datapro[i].taxes}</td>
                      <td>${datapro[i].ads}</td>
                      <td>${datapro[i].discount}</td>
                      <td>${datapro[i].total}</td>
                      <td>${datapro[i].count}</td>
                      <td>${datapro[i].category}</td>
                      <td><button onclick="updatedata(${i})" id="update">update</button></td>
                      <td><button onclick="deletedata(${i})"  id="delete">delete</button></td>
                </tr>
             `
            }
         }       
        }
        else
        {
            for(let i=0; i<datapro.length; i++)
         {
            if(datapro[i].category.includes(value))
            {
                table += `
                <tr>
                      <td>${i}</td>
                      <td>${datapro[i].title}</td>
                      <td>${datapro[i].price}</td>
                      <td>${datapro[i].taxes}</td>
                      <td>${datapro[i].ads}</td>
                      <td>${datapro[i].discount}</td>
                      <td>${datapro[i].total}</td>
                      <td>${datapro[i].count}</td>
                      <td>${datapro[i].category}</td>
                      <td><button onclick="updatedata(${i})" id="update">update</button></td>
                      <td><button onclick="deletedata(${i})"  id="delete">delete</button></td>
                </tr>
             `
            }
         }       
        }
        document.getElementById('tbody').innerHTML=table;

    }
