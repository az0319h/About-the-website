window.addEventListener('load', () => {
    console.log("웹 사이트 로딩 완료")
})

// header.html, footer.html
// 모든 경로는 해당 프로젝트 마다 변경될 수 있음         
// footer.html 파일을 불러옴
fetch('/pages/footer.html')
    .then(response => response.text())
    .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

// header.html 파일을 불러옴
fetch('/pages/header.html')
    .then(response => response.text())
    .then(data => {
            document.getElementById('header').innerHTML = data;
        })
    .catch(error => console.error('Error loading footer:', error));

// header.html에 동적으로 header.js파일을 추가
function loadHeader() {
    fetch('/pages/header.html') 
        .then(response => response.text())
                .then(html => {
                    document.querySelector('#header').innerHTML = html;
                        
                    // header.js를 동적으로 추가
                    const script = document.createElement('script');
                    script.src = '/js/header.js'; // 경로는 프로젝트마다 변경될 수 있음(check)
                    script.defer = true;  // 비동기로 로드하여 다른 코드가 먼저 실행되도록 함
                    document.body.appendChild(script);
        })
        .catch(error => console.log(error));
    }

loadHeader();
