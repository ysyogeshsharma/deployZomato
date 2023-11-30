let indianCities=['Agra','Ahmedabad','Ajmer','Alappuzha','Allahabad','Amravati','Amritsar','Aurangabad','Bengaluru','Bhopal','Bhubaneswar','Chandigarh','Chennai','Coimbatore','Cuttack','Darjeeling','Dehradun','DelhiNCR','Dharamshala','Gangtok','Goa','Gorakhpur','Guntur','Guwahati','Gwalior','Haridwar','Hyderabad','Indore','Jabalpur','Jaipur','Jalandhar','Jammu','Jamnagar','Jamshedpur','Jhansi','Jodhpur','Junagadh','Kanpur','Khajuraho','Khamgaon','Kharagpur','Kochi','Kolhapur','Kolkata','Kota','Lucknow','Ludhiana','Madurai','Manali','Mangalore','Manipal','Meerut','Mumbai','Mussoorie','Mysore','Nagpur','Nainital','Nashik','Neemrana','Ooty','Palakkad','Patiala','Patna','Puducherry','Pune','Pushkar','Raipur','Rajkot','Ranchi','Rishikesh','Salem','Shimla','Siliguri','Srinagar','Surat','Thrissur','Tirupati','Trichy','Trivandrum','Udaipur','Vadodara','Varanasi','Vellore','Vijayawada','Visakhapatnam'];
// fetch('http://country.io/names.json')
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })

const toggler=document.getElementById('toggle-button');
const login = document.querySelector('.banner');
const navitem=document.querySelector('.banner .navbar ul');
const tlogo=document.querySelector('.navbar .toggle-logo');
let flag=false;
toggler.addEventListener('click',(e)=>{
    let fspan=e.target.parentElement.firstElementChild;
    let mspan=e.target.parentElement.lastElementChild;
    let lspan=e.target.parentElement.firstElementChild.nextElementSibling;
    if(e.target.getAttribute('id')=='toggle-button'){
        fspan=e.target.firstElementChild;
        mspan=e.target.lastElementChild;
        lspan=e.target.firstElementChild.nextElementSibling;
    }
    
    if(flag===true){
        fspan.style.transform=null;
        lspan.style.transform=null;
        mspan.style.transform=null;
        fspan.style.backgroundColor='white' 
        lspan.style.backgroundColor='white'
        mspan.style.backgroundColor='white'
        flag=false;
    }
    else if(flag===false){
        fspan.style.transform="rotate(45deg) translateY(8.5px)";
        fspan.style.backgroundColor='black'
        lspan.style.transform="scale(0)";
        lspan.style.backgroundColor='black'
        mspan.style.transform="rotate(-45deg) translateY(-8.5px)";
        mspan.style.backgroundColor='black'
        flag=true;
    }

    // navitem.classList.toggle('.toggle-display');
    tlogo.classList.toggle('.toggle-display');
    if(navitem.style.display=='flex'){
        navitem.style.display='none';
        tlogo.style.display='none';
    }
    else{
        navitem.style.display='flex';
        tlogo.style.display='flex';
    }
    // navitem.style.color='black';
    // navitem.style.backgroundColor='white';
    // navitem.style.margin='0'
    // navitem.style.height='100vh';
    // navitem.style.width='100vw';
})
login.addEventListener('click', (e) =>{
    // console.log(e.target.parentElement.previousElementSibling.style.visibility)
    
    if(e.target.innerHTML=='Log in'){
        document.getElementById('blur-content').style.visibility='visible'
        document.getElementById('login-page').style.zIndex='2';
        document.getElementById('blur-content').style.zIndex='1'
        document.getElementById('signup-page').style.zIndex='-1'; 
    }
    else if(e.target.innerHTML=='Sign up'){
        document.getElementById('blur-content').style.visibility='visible'
        document.getElementById('signup-page').style.zIndex='2';
        document.getElementById('blur-content').style.zIndex='1'
        document.getElementById('login-page').style.zIndex='-1'; 
    }
    else{
        document.getElementById('signup-page').style.zIndex='-1';
        document.getElementById('login-page').style.zIndex='-1';
    } 
});
document.getElementById('blur-content').addEventListener('click',(e)=>{
    if(e.target.getAttribute('id')==='blur-content'){
        document.getElementById('blur-content').style.visibility='hidden'
    }
    else if(e.target.getAttribute('class')==='close'){
        document.getElementById('blur-content').style.visibility='hidden'
    }
})

let countryCode=[{'countryName':'India','countrycode':'+91','countryFlagUrl':'https://b.zmtcdn.com/images/flags_z10/in.png'},{'countryName':'Pakistan','countrycode':'+91','countryFlagUrl':'https://b.zmtcdn.com/images/flags_z10/in.png'}]
const getcountry=document.getElementsByClassName('country-section')[0];
const selectcountry=document.getElementsByClassName('drop-down')[0];
countryCode.forEach(element => {
    let div =document.createElement('div');
    div.innerHTML=`${element.countryName} ${element.countrycode} <img src="${element.countryFlagUrl}" width="30px">`;
    selectcountry.appendChild(div);
})
getcountry.addEventListener('click', (e)=>{
    let rbutton=e.target.parentElement.lastElementChild;
    rbutton.classList.toggle('rotate-child')
    selectcountry.classList.toggle('toggle-display');
})


const getcity=document.getElementById('country');
getcity.style.width='80%';
getcity.style.margin='auto';
getcity.style.display='flex';
getcity.style.flexWrap='wrap';
getcity.style.marginTop='4%';
getcity.style.gap='10px'

indianCities.forEach(element => {
    let newEle=document.createElement('a');
    newEle.setAttribute('href',`https://www.zomato.com/${element}`);
    newEle.style.width='26%';
    newEle.style.textDecoration='none'
    newEle.style.display='flex';
    newEle.style.justifyContent='space-between';
    newEle.style.border='1px solid rgb(232, 232, 232)';
    newEle.style.borderRadius='.8rem';
    newEle.style.margin='.5em';
    newEle.style.padding='1em';
    newEle.style.fontSize='2rem';
    newEle.style.color='#5A5A5A';
    newEle.style.cursor='pointer';
    newEle.style.boxShadow='rgba(28, 28, 28, 0.08) 0px 1.42623px 2.85246px';
    newEle.className='cities';
    newEle.innerHTML=`${element} Restaurants <span>›</span>`;
    getcity.appendChild(newEle);
});
