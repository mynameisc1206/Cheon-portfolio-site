document.addEventListener('DOMContentLoaded', () => {
  let workBoxes = document.querySelectorAll('.works-intro-box');
  let popupBg = document.querySelector('.popup-bg');
  let popupBoxes = document.querySelectorAll('.popup-box');
  let closeBtns = document.querySelectorAll('.close-btn');

  //팝업 열기
  workBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      let targetId = box.getAttribute('data-popup');
      let targetPopup = document.getElementById(targetId);

      if (targetPopup) {
        popupBg.classList.add('pop');
        targetPopup.classList.add('pop');
        
        let head = targetPopup.querySelector('.popup-head');
        if (head) {
          setTimeout(() => {
            head.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50); 
        }
      }
    });
  });

  //팝업 닫기
  let closeAll = () => {
    popupBg.classList.remove('pop');
    popupBoxes.forEach((box) => {
      box.classList.remove('pop');
    });
  };

  popupBg.addEventListener('click', closeAll);
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAll();
    });
  });
});