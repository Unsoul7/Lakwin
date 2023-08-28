
const ams = []
const nums = []
var allnums = ''
let data;
totalamount = 0

// Function to handle file upload to Firebase Storage

function shownav(){
    var cl = document.getElementById('navitems')
    // console.log(cl.classList)
    cl.classList.toggle('top-0')
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwMlg5mXirNd_T2YvfCQzfxk9Bl7korDom9XKD8yZehcsVaTgaCNZ6Jp-8nLi4avPmi/exec'

const form = document.forms['pay-form']

const senddata = (e) => {
  
  if (ams.length != 0 && nums.length != 0) { 
    localStorage.setItem('email',data.Email)
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: JSON.stringify(data)})
    .then(response => alert("Your Order has been placed" ))
    .then(() => { window.open('paymentpage.html','_self')})
    .catch(error => console.error('Error!', error.message))
  }
}

const addnum = (e) => {
  const divelm = document.createElement('div')
  divelm.setAttribute('class','flex')

  const numf = document.createElement('input')
  numf.setAttribute('type','number')
  numf.setAttribute('min','1')
  numf.setAttribute('max','100')
  numf.setAttribute('class','border w-1/2 h-10 px-6 my-2 numbers')
  numf.setAttribute('name','Numbers')
  numf.setAttribute('placeholder','Number')


  const amountf = document.createElement('input')
  amountf.setAttribute('type','number')
  amountf.setAttribute('class','border w-1/2 h-10 px-6 my-2 amount')
  amountf.setAttribute('name','Amount')
  amountf.setAttribute('placeholder','Amount')

  divelm.appendChild(numf)
  divelm.appendChild(amountf)
  e.preventDefault()

  document.getElementById('nafields').appendChild(divelm)

}

const selectall = (e) => {
  e.preventDefault()
  var am = document.getElementById('nafields').children.length
  var amscl = document.getElementsByClassName('amount')
  var numbercl = document.getElementsByClassName('numbers')
  for(let i = 0;i<am;i++){
    ams.push(Number(amscl[i].value))
    nums.push(Number(numbercl[i].value))
  }
  for(let i in ams){
    totalamount = totalamount+Number(amscl[i].value)
  }
  var name = document.getElementById('name').value
  var phone = document.getElementById('phone').value
  var mail =  document.getElementById('mail').value
  var state = document.getElementById('state').value
  document.getElementById('amountshow').innerText =  'Amount to Pay : '+totalamount+'rs'  
  
for(let i in nums){
  allnums = allnums + nums[i] + ',' 
}
  data = {
    Name : name,
    Phone : phone,
    Email : mail,
    State : state,
    Numbers : allnums,
    Amount : totalamount, 
  }
  console.log(data)
}

const targetDate = new Date(); // Month is 0-based (0 = January)
targetDate.setDate(targetDate.getDate()); // Set to the next day
targetDate.setHours(12, 0, 0, 0);
// Update the countdown every second
const countdownElement = document.getElementById('countdown');
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "<a class='text-2xl text-center text-red-500' href='todaywinners.html'>See Winner List</a>";
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `<h2 class='text-2xl text-center text-red-500'>Next Reward List: ${hours}h ${minutes}m ${seconds}s</h2>`;

  }
}

// Initial call to set up the countdown
updateCountdown();