let Header = document.querySelector('.header');
let navPoint = document.querySelectorAll('.nav-point');
let pointSect = document.querySelectorAll('.point');

// 헤더 스크롤 이벤트
window.addEventListener('scroll', function(){
  let Y = window.scrollY;
  let windowWidth = window.innerWidth;
  //console.log(Y, windowWidth);

  // 반응형 480
  let breackPoint = (windowWidth <= 480) ? 60 : 90;

  if(Y > breackPoint){
    Header.classList.add('scrolled')
  }else{
    Header.classList.remove('scrolled')
  }
});

// 특정 위치로 가기
navPoint.forEach(function(go){
  go.addEventListener('click', function(){
    //active 추가 제거
    navPoint.forEach(function(nav){
      nav.classList.remove('active')
    });
    go.classList.add('active');

    // 스크롤 이동
    let dataSect = go.getAttribute('data-sect')
    //console.log(dataSect)
    let targetSect = document.getElementById(dataSect);

    if(targetSect){
      targetSect.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  })
});

// 스크롤 위치에 따른 클래스 추가/제거
let observerOptions = {
  root: null,
  threshold: 0.2
};

let observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let id = entry.target.id;
      
      navPoint.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-sect') === id) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

// 각 섹션 감시 시작
pointSect.forEach(section => observer.observe(section));

