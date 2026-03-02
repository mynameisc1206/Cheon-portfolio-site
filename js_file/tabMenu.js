let tabBtn = document.querySelectorAll('.tab');
let Content = document.querySelectorAll('.about-tab-box');

tabBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
    // 버튼 순환
    tabBtn.forEach(function(b){
      //console.log('remove')
      b.classList.remove('on')
    });
    this.classList.add('on')
    
    // 본문 순환
    Content.forEach(function(c){
      c.classList.remove('on')
    });

    let targetId = btn.getAttribute('data-tab');
    //console.log(targetId);
    Content.forEach(function(c){
      if(c.id === targetId){
        c.classList.add('on')
      }else{
        c.classList.remove('on')
      }
    })
  })
})