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

    $(function() {
        var divticket = $(".ticket");
        var widthticket = divticket.width();
        divticket.css("height", widthticket/3);
        var divpicture = $(".picture");
        var widthpicture = divpicture.width();
        divpicture.css("height", widthpicture);
    });

    keywords = [];
    const Tickets = document.querySelector(".tickets")
    fetch('../json/vexe.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
           Tickets.insertAdjacentHTML('beforeend', `
           <div class="ticket" name="${element.name}">
          <section class="picture">
            <img src="${element.image}" alt="noi that xe" />
          </section>
          <section class="info">
            <table border="1">
              <tr>
                <td>
                  <p class="from">
                    <i class="fa-solid fa-circle-dot"></i>
                    ${element.from}
                  </p>
                  <p class="start">${element.start}</p>
                </td>
                <td>
                  <p class="to">
                    <i class="fa-solid fa-location-dot"></i>
                    ${element.to}
                  </p>
                  <p class="arrive">${element.end}</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p class="price">${element.price}</p>
                  <button title="alert on screen" class="btn book">Đặt vé</button>
                </td>
              </tr>
            </table>
          </section>
        </div>
        `);
        keywords.push(element.name);
        });
    });

    $("#search").keyup(function(){
      let input = $(this).val();
      let h = "";
      for(let keyword of keywords )
        if(input.length && keyword.toLowerCase().indexOf(input.toLowerCase()) >= 0)
          h += `
          <li>${keyword}</li>
          `;
      $(".resultbox").html("<ul>"+h+"</ul>");
    });
  $(".resultbox").on("click", "li", function() {
    $("#search").val($(this).text());
    $(".resultbox").html("");
  })
  
  $(".searchbtn").on("click", function() {
    $(".resultbox").html("");
    var ticketList = document.querySelectorAll(".ticket");
    var ticketName;
    ticketList.forEach(ticket => {
      ticketName = ticket.getAttribute("name");
      if($("#search").val().length)
        if (ticketName.toLowerCase().indexOf($("#search").val().toLowerCase()) >= 0) {
          ticket.classList.remove("hidden");
          ticket.classList.add("blinkEff");
          var timeout = setTimeout(removeClass, 3000);
          function removeClass(){
            ticket.classList.remove("blinkEff");
            clearTimeout(timeout);
          }
        }
        else {
          ticket.classList.add("hidden");
        } 
      $(".showAll").on("click", function() {
        ticket.classList.remove("hidden");
      })
    })
  });
  
  $(".tickets").on('click', "button", function() {
    alert("Đặt vé thành công!");
  });
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
