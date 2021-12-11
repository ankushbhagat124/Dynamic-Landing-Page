//DOM Selector
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');
var quotes = ['The journey of a thousand miles begins with one step.', 'That which does not kill us makes us stronger.','Life is what happens when you’re busy making other plans.','When the going gets tough, the tough get going.', 'You must be the change you wish to see in the world.', 'You only live once, but if you do it right, once is enough.', 'Tough times never last but tough people do.', 'Get busy living or get busy dying.', 'Whether you think you can or you think you can’t, you’re right.', 'Tis better to have loved and lost than to have never loved at all.', 'A man is but what he knows.', 'You miss 100 percent of the shots you never take.', 'If you’re going through hell, keep going.', 'Strive not to be a success, but rather to be of value.', 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'Those who dare to fail miserably can achieve greatly.', 'The opposite of love is not hate; it’s indifference.', 'Never let the fear of striking out keep you from playing the game.', 'Life is like a box of chocolates. You never know what you’re going to get.', 'He that falls in love with himself will have no rivals.', 'Life is ten percent what happens to you and ninety percent how you respond to it.', 'Dream big and dare to fail.', 'A great man is always willing to be little.', 'That’s one small step for a man, one giant leap for mankind.', 'Every man is guilty of all the good he did not do.']

function newQuote(){
    var randomnumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomnumber];
}

//Show Time
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //Set AM or PM
    const ampm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour%12 || 12;

    //Output time
    if (hour < 10)
    hour = '0' + hour;
    if (min < 10)
    min = '0' + min;
    if (sec < 10)
    sec = '0' + sec;
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}<span> </span>${ampm}`;

    setTimeout(showTime, 1000);
}
//Set BG and Greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    if (hour < 12)
    {
        var names = 'sunrise';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1280x900/?" + names + "')";
        greeting.textContent = 'Good Morning';
    }
    else if (hour >= 12 && hour <= 18)
    {
        var names = 'sky';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1280x900/?" + names + "')";
        greeting.textContent = 'Good Afternoon';

    }
    else
    {
        var names = 'black night';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1280x900/?" + names + "')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}
//Get Name
function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        if (e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        if (e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText);
        // focus.blur();
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText);
    }
}
//Get Focus
function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);


focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//RUN
showTime();
setBgGreet();
getName();
getFocus();
newQuote();