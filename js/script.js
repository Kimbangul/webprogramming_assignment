// jAVASCIPT DOCUMENT

function incompleteAlert(e) {
  e.preventDefault();
  alert('준비중입니다!');
}

// HTML 로드후 시작
window.onload = function() {
  //  변수 모음
  var varComp = {
    topBtn: document.getElementById('top_btn'),
    body: document.getElementsByTagName('body')[0],
    mainImg: document.getElementsByClassName('main_img').item(0),
    $menuBtn: $('header>div.menu_btn'),
    $myName: $('#my_name'),
    $myProfile: $('#my_profile')
  }


  function topBtnEvent() {
    // 스크롤 감지
    window.addEventListener('scroll', topBtnActive);

    // 스크롤 감지 시 버튼 출력
    function topBtnActive() {
      var nowYscroll = window.scrollY;

      if (nowYscroll <= 50) {
        varComp.topBtn.classList.remove('active');
      } else {
        varComp.topBtn.classList.add('active');

      }
    }

    // 탑 버튼 클릭 감지
    varComp.topBtn.addEventListener('click', scrollToTop);

    // 탑 버튼 클릭 시 페이지 최상단으로 이동
    function scrollToTop() {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: varComp.body.offsetTop
      });
    };
  }

  function mainImgHoverEvent() {
    varComp.mainImg.addEventListener('mouseover', mainImgMouseIn);
    varComp.mainImg.addEventListener('mouseout', mainImgMouseOut);


    function mainImgMouseIn() {
      varComp.body.style.background = '#dea9ac';
      varComp.$myName.text('KIM BANG UL');
      varComp.$myProfile.text('The cute CAT');
    }

    function mainImgMouseOut() {
      varComp.body.style.background = '#C4B5BF';
      varComp.$myName.text('PARK YE RIM');
      varComp.$myProfile.text('Hongik UNIV. Game Graphic Design');
    }
  }


  function mbMenu() {
    varComp.$menuBtn.click(function() {
      $(this).toggleClass('active');
    })
  }



  topBtnEvent();
  mainImgHoverEvent();
  mbMenu();

}
