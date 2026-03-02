document.addEventListener("DOMContentLoaded", function() {
  let skillButtons = document.querySelectorAll(".btn-box button");
  let ratingBoxes = document.querySelectorAll(".skill-rating-box");

 // 숫자 카운팅
 let animateValue = function(el) {
  let target = parseFloat(el.dataset.num); // 최종 목적지 숫자
  let duration = 500; // 총 애니메이션 시간
  let startTime = performance.now();
  let decimals = (target.toString().split('.')[1] || []).length;
  // 렌덤 숫자
  let chars = "0123456789";

  let update = function(now) {
    let elapsed = now - startTime;
    let progress = Math.min(elapsed / duration, 1);

    if (progress < 1) {
      let randomText = "";
      let targetString = target.toFixed(decimals); // 최종 결과와 길이를 맞춤
      
      for (let i = 0; i < targetString.length; i++) {
        if (targetString[i] === "." || targetString[i] === "-") {
          randomText += targetString[i];
        } else {
          randomText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }
      el.textContent = randomText;
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toFixed(decimals);
    }
  }; 
  requestAnimationFrame(update);
};

  // 클래스 변화 감지
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // 클래스 속성이 변했고, 현재 요소에 .show가 붙어있을 때만 실행
      if (mutation.attributeName === "class") {
        let isShow = mutation.target.classList.contains("show");
        if (isShow) {
          let numElements = mutation.target.querySelectorAll(".count");
          numElements.forEach(function(num) {
            animateValue(num);
          });
        }
      }
    });
  });
  
  // 감시자
  ratingBoxes.forEach(function(box) {
    observer.observe(box, { attributes: true });
    
    if (box.classList.contains("show")) {
      let initialNums = box.querySelectorAll(".count");
      initialNums.forEach(function(n) { animateValue(n); });
    }
  });

  // 탭 메뉴 클릭 이벤트
  skillButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      let targetId = btn.getAttribute("data-skill");

      skillButtons.forEach(function(b) { b.classList.remove("show"); });
      btn.classList.add("show");

      ratingBoxes.forEach(function(box) {
        box.classList.remove("show");
        if (box.id === targetId) {
          box.classList.add("show");
        }
      });
    });
  });
});