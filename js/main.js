'use strict'
{
  const navBtn = document.querySelector(".nav_btn");
  const navi = document.querySelector(".navi");
  const mask = document.getElementById("mask");
  const navi_items = document.querySelectorAll(".navi_item")
 

  navBtn.addEventListener("click", function() {
    navBtn.classList.toggle("open");
    mask.classList.toggle("open");
    navi.classList.toggle("open");
  });

  navi_items.forEach((navi_item) => {
    navi_item.addEventListener("click", function() {
      navBtn.classList.remove("open");
      mask.classList.remove("open");
      navi.classList.remove("open");
    });
  });



  $('.pickup_list').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });


  $(window).scroll(function(){
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面下に来てから200px通過したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }

    });
  });


}
