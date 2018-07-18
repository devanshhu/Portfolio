var main_inf;
var i = 0;


window.onload = function () {
    document.getElementById('nav').style.maxHeight = "13%";
    if( $(window).width() < 700 )
    {
        renderMobile();
    }
    setTimeout(() => {
        document.getElementById('salutation-text').style.display = "block";
        document.getElementById('main-inf').style.display = "block";
        writerEffect();
    }, 1000);   
}
window.onscroll = scrollOccured;
function scrollOccured()
{
    headerToggle();
    revealProjects();
    checkTabs();
}

function renderMobile()
{
    document.getElementById('home').style.display = "none";
    document.getElementById('project').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('brief-info').style.width = "80%";
    document.getElementById('brief-info').style.margin= "auto";
    var el = document.getElementsByClassName('skill');
     for (var i =0;i < el.length ;i++)
     {
        el[i].style.width = "80%";
        el[i].style.margin = "auto";
     }

     var links = document.getElementsByClassName('code-link');
     for (var i =0;i < links.length ;i++)
     {
        links[i].style.display = "flex" ;
     }
      document.getElementsByClassName('accounts')[0].style.width = "98%";
      document.getElementsByClassName('accounts')[0].style.margin= "auto";
      revealProjects();


}

function writerEffect() {
    var text = "I love to code and solving puzzles and logical brain teasing activities are among my hobbies. " +
        " I like playing cricket , watching movies and cartoon shows in free time."
    if (i < text.length) {
        document.getElementById('main-inf').innerHTML += text.charAt(i);
        i++;
        setTimeout(writerEffect, 40);
        if (i == text.length) {
            $('#main-inf').append('<span id="cursor">|</span>');
            showSkills();
        }
    }
}

function showSkills() {
    document.getElementById('skills').style.display = "block";
    document.getElementById('skills').style.visibility = 'visible';

    setTimeout(() => {
        document.getElementById('skill-wrap').style.display = "block";
        document.getElementById('skill-wrap').style.visibility = "visible";

    }, 1000)
    setTimeout(() => {
        showIndividualSkills();
    }, 1200);
}
function showIndividualSkills() {
    document.getElementById('java').style.display = "block";
    document.getElementById('java').style.visibility = "visible";

    document.getElementById('python').style.display = "block";
    document.getElementById('python').style.visibility = "visible";

    document.getElementById('ng').style.display = "block";
    document.getElementById('ng').style.visibility = "visible";

    document.getElementById('dotnet').style.display = "block";
    document.getElementById('dotnet').style.visibility = "visible";

    document.getElementById('html').style.display = "block";
    document.getElementById('html').style.visibility = "visible";

    document.getElementById('css').style.display = "block";
    document.getElementById('css').style.visibility = "visible";

    document.getElementById('sql-server').style.display = "block";
    document.getElementById('sql-server').style.visibility = "visible";
    
    document.getElementById('django').style.display = "block";
    document.getElementById('django').style.visibility = "visible";
    setTimeout(() => {
        changeWidth();
    }, 100);
}

function changeWidth() {

    document.getElementById('java').style.width = "70%";

    document.getElementById('python').style.width = "40%";

    document.getElementById('ng').style.width = "60%";

    document.getElementById('dotnet').style.width = "40%";

    document.getElementById('html').style.width = "80%";

    document.getElementById('css').style.width = "65%";

    document.getElementById('django').style.width = "45%";

    document.getElementById('sql-server').style.width = "35%";

    setTimeout(() => {
        showProjects();
        setTimeout(() => {
          showContactDetails();
        }, 1200); 
    }, 1000);
}

function showProjects()
{
    document.getElementById('home').classList.add('selected');
    document.getElementById('project-container').style.display = "flex";
    document.getElementById('sal-project').style.display = "flex";
    // document.getElementById('many-more').style.display = 'flex';
}
function headerToggle()
{
    var nav = document.getElementById('nav');
    var navheight = nav.offsetTop;
    // var salHeight = document.getElementById('salutation-text').offsetTop;
    if(window.pageYOffset > navheight )
    {
        nav.classList.add('head-pos');
        
        document.getElementById('home').classList.add('selected');
        
        document.getElementById('home-container').classList.add('pad-top');
    }
    else
    {
        document.getElementById('home-container').classList.remove('pad-top');
        nav.classList.remove('head-pos');
    }
}

function revealProjects()
{
    var h = document.getElementById('sal-project').offsetTop;
    if(window.pageYOffset > h -500)
    {
        var el = document.getElementsByClassName('card');
        if(el.length > 0 )
        for (var i =0 ; i< el.length ; i++ )
        {
            el[i].style.display = "flex";
        }
    document.getElementById('many-more').style.display = 'flex';
    }  
}

function showLink(event)
{
    event.getElementsByClassName('code-link')[0].style.display = "flex";
}
function hideLink(event)
{
    event.getElementsByClassName('code-link')[0].style.display = "none";
}

function scrollToElement(el)
{
    $(document.body).animate({
        'scrollTop':   $(el).offset().top
    }, 700);
}


function showContactDetails()
{
    document.getElementById('sal-contact').style.display = "flex" ;
    var el  = document.getElementsByClassName('account');
    for(var i =0;i< el.length ;i++)
    {
        displayEl(el[i]);
    }
    
}

function displayEl(el)
{
    setTimeout(()=>
{
    el.style.display = "flex";

},1000);
}
function checkTabs()
{
    var project = document.getElementById('project');
    var projectLocation = document.getElementById('project-container').offsetTop;
    var projectheight = $('#project-container').height();
    var homeheight = $('#home-container').height();
    var contact = document.getElementById('contact');
    var contactLocation = document.getElementById('contact-container').offsetTop;
    var home = document.getElementById('home');
    var homeLocation = document.getElementById('home-container').offsetTop;
    var topP = window.pageYOffset;

    if( topP  < (homeLocation + (homeheight/2)) )
    {
        home.classList.add('selected');
        project.classList.remove('selected');
        contact.classList.remove('selected');
    }
    else if( topP  > (homeLocation + (homeheight/2)) && topP < (projectLocation + projectheight/2) )
        {
            home.classList.remove('selected');
            project.classList.add('selected');
            contact.classList.remove('selected');
           
        }
    else 
    {
      home.classList.remove('selected');
      project.classList.remove('selected');
      contact.classList.add('selected');
    }
}

function routeToInstagram()
{
    window.location = "https://www.instagram.com/devanshhu"
}
function routeToFacebook()
{
    window.location = "http://www.facebook.com/devansh.upadhyay.35"; 
}
function routeToLinkedIn()
{
    window.location = "http://www.linkedin.com/in/devanshhu";
}
function routeToGithub()
{
    window.location = "http://www.github.com/devanshhu";
}
function openMail()
{

}
function routeToPolitics(end)
{
    window.location = "http://www.thepolitics.in/"+end;
}

function routeToRepo(reponame)
{
    window.location = "http://github.com/devanshhu/"+reponame;
}