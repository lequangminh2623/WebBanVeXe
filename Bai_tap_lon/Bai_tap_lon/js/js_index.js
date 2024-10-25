$(document).ready(() => {
    let current=0;
    let num = $(".slider > div").length;
    let h = "";
    let log = $(".btnLogin").innerText;
    
    for (let i = 0; i < num; i++)
        h += `
            <button class="digit btn">${i + 1}</button>
        `;
    $(".buttons > :first-child").after(h);

    let showSlider= (current)=> {
        $(".slider > div > img").fadeOut("slow");
        $(".slider > div > img").eq(current).fadeIn("slow");
    }

    $(".buttons button.digit").click(function(){
        let idx=parseInt($(this).text());
        current=idx-1;
        showSlider(current); 
    });
    
    $(".next").click(()=>{
        current++;
        if(current ===num)
            current=0;
        showSlider(current);
        
        clearInterval(timer,100);
        
    });
    
    $(".prev").click(()=>{
        current--;
        if(current < 0)
            current=num - 1;
        showSlider(current);
        
        clearInterval(timer,100);
        
    });
    $(".slider").height($(".slider").width()/1.9);
    $(window).resize(function() {
        $(".slider").height($(".slider").width()/1.9);
    })

    let timer =null;
    let runSlider= (duration) => {
        setInterval(()=>{
            $(".next").click();
        },duration)
    }

    runSlider(5000);

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