function fun1(){
    document.getElementById('subscribe-modal').style.display="block";
}



function fun2(){
    document.getElementById('subscribe-modal').style.display="none";
}

function fun3()
{
    document.getElementById('fa').innerHTML=' <i class="fa-solid fa-check"></i> ';
}

function fun4()
{
    document.getElementById('fb').innerHTML=' <i class="fa-solid fa-check"></i> ';
}

function fun5()
{
    document.getElementById('fc').innerHTML=' <i class="fa-solid fa-check"></i> ';
}


$('.repli-1').click(function(){
    $('#comment-1').toggle();
});

$('.repli-2').click(function(){
    $('#comment-2').toggle();
});

$('.repli-3').click(function(){
    $('#comment-3').toggle();
});



