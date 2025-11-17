document.addEventListener('DOMContentLoaded', () => {
    // GSAP 타임라인 생성
    const tl = gsap.timeline();
  
    // 1. 로딩 애니메이션 (숫자 및 바)
    // innerText 속성은 직접 애니메이션하기보다 onUpdate 콜백을 사용하는 것이 안정적입니다.
    const percentageTarget = { value: 0 };
    tl.to(percentageTarget, {
      duration: 2,
      value: 100,
      roundProps: "value", // 값을 정수로 반올림
      onUpdate: () => {
        document.getElementById("loadingPercentage").textContent = `(${percentageTarget.value}%)`;
      }
    }, 0);
  
    tl.to("#loadingBar", {
      duration: 2,
      width: "100%",
      ease: "power2.out"
    }, 0);
  
    // 2. 텍스트 페이드 아웃
    tl.to("#text1", { duration: 0.5, opacity: 0, y: -20, ease: "power1.in" }, "-=0.5");
    tl.to("#text2", {
      duration: 0.5,
      opacity: 0,
      y: 20, // 아래로 내려가며 사라지도록 y 값을 양수로 변경
      ease: "power1.in"
    }, "-=0.5"); // 로딩이 끝나기 0.5초 전에 시작
  
    // 3. 패널(상/하단)이 갈라지는 애니메이션
    tl.to("#panelTop", {
      duration: 1,
      y: "-100%",
      ease: "power3.inOut"
    });
  
    tl.to("#panelBottom", {
      duration: 1,
      y: "100%",
      ease: "power3.inOut"
    }, "<"); // 이전 애니메이션과 동시에 시작
  
    tl.to("#loadingContainer", {
      duration: 1,
      opacity: 0,
      ease: "power3.inOut"
    }, "<");
  

  
    // 5. 인트로 전체가 사라지고 메인 페이지로 이동
    tl.to("#intro-container", {
      duration: 0.5,
      opacity: 0,
      delay: 0.5, // 최종 텍스트를 잠시 보여주기 위한 딜레이
      onComplete: () => {
        // 애니메이션이 끝나면 index.html로 페이지를 이동합니다.
        window.location.href = 'main.html';
      }
    });
});