$(document).ready(() => {

    

    $(window).scroll(function stick(){
        if($(this).scrollTop())
        {
            $("header").addClass("sticky")
        }
        else
        {
            $("header").removeClass("sticky")
        }
    })

    $("#menubtn").on("click", function() {
        $(".menu").addClass("active");
        $("#menubtn").addClass("hidden");
    })
    $("#cancelbtn").on("click", function() {
        $(".menu").removeClass("active");
        $("#menubtn").removeClass("hidden")
    })
    let mybutton = document.getElementById("top");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.remove("hidden");
    }
    else {
        mybutton.classList.add("hidden");
    }}
    
    $("#top").on("click", function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
});