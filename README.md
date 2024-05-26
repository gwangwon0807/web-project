<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../css/style.css">
  <script defer src="../js/script.js"></script>
</head>
  <body>
  <div id="wrap">
    <header>
      <div class="about-me"><p><a href="#section1">about-me</a></p></div>
      <div class="hobby"><p><a href="#section2">hobby</a></p></div>
      <div class="goal"><p><a href="#section3">goal</a></p></div>
    </header>
    <aside>
      <div id="profile-top">
        <div id="toggle">
          <i class="indicator"></i>
        </div>
        <div class="menutab">
          <input type="checkbox" id="menuicon">
          <label for="menuicon">
            <div class="menu-on">
              <img src="../jpg/menu.png">
            </div>
            <div class="menu-off">
              <img src="../jpg/cancel.png">
            </div>
            </label>
          <div class="menubar">
            <div class="menuitem"><p><a href="#profile-top"><b>HOME</b></a></p></div>
            <div class="menuitem"><p><a href="#section1"><b>ABOUT-ME</b></a></p></div>
            <div class="menuitem"><p><a href="#section2"><b>HOBBY</b></a></p></div>
            <div class="menuitem"><p><a href="#section3"><b>GOAL</b></a></p></div>
          </div>
        </div>
        <div class="hello">
          <p style="padding-top: 25px; font-weight: 500;">GW KIM</p>
        </div>
        <div class="photo">
          <img src="../jpg/profile.jpg">
        </div>
      </div>
      <div id="profile-bottom">
        <div class="introduce">
          <p><b>이름: 김광원</b></p><br><br>
          <p><b>나이: 24(22)</b></p><br><br>
          <p><b>학교: 강원대학교</b></p><br><br>
          <p><b>전공: 컴퓨터공학과</b></p><br><br>
          <p><b>e-mail<br>gwangwon0807@naver.com</b></p>
        </div>
      </div>
    </aside>
    <section id="section1">
      <input type="radio" name="slide" id="slide1" checked>
      <input type="radio" name="slide" id="slide2">
      <input type="radio" name="slide" id="slide3">
      <input type="radio" name="slide" id="slide4">
      <ul class="slidelist">
        <li class="slideitem">
          <div>
            <label for="slide4" class="left"></label>
            <label for="slide2" class="right"></label>
            <a><img src="../jpg/knu.png"></a>
            <P class="slidetext">KANGWON NATIONAL UNIVERSITY<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPUTER ENGINEERING</P>
          </div>
        </li>
        <li class="slideitem">
          <label for="slide1" class="left"></label>
          <label for="slide3" class="right"></label>
          <a><img src="../jpg/ulsan.jpg"></a>
          <P class="slidetext">S I N C E<br>&nbsp;&nbsp;&nbsp;2001</P>
        </li>
        <li class="slideitem">
          <label for="slide2" class="left"></label>
          <label for="slide4" class="right"></label>
          <a><img src="../jpg/blockchain.jpg"></a>
          <P class="slidetext">I'm interested in Blockchain.<br></P>
        </li>
        <li class="slideitem">
          <label for="slide3" class="left"></label>
          <label for="slide1" class="right"></label>
          <a><img src="../jpg/code.jpg"></a>
          <P class="slidetext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I want to be<br>a greatest Developer</P>
        </li>
      </ul>
    </section>
    <section id="section2">
      <div class="hobbyitem">
        <div class="hobbycard hobbycard-left hobbycard-top">
          <img src="../jpg/basketball.jpg">
          <div class="info">
            <h1>BASKETBALL</h1>
          </div>
        </div>
      </div>
      <div class="hobbyitem">
        <div class="hobbycard hobbycard-right hobbycard-top">
          <img src="../jpg/guitar.jpg">
          <div class="info">
            <h1>GUITAR</h1>
          </div>
        </div>
      </div>
      <div class="hobbyitem">
        <div class="hobbycard hobbycard-left hobbycard-bottom">
          <img src="../jpg/soccer.jpg">
          <div class="info">
            <h1>SOCCER</h1>
          </div>
        </div>
      </div>
      <div class="hobbyitem">
        <div class="hobbycard hobbycard-right hobbycard-bottom">
          <img src="../jpg/travel.jpg">
          <div class="info">
            <h1>TRAVEL</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="section3">
      <div class="goal">
        <div class="quarter" id="quarter1">
          <div class="goalcontent goalcontent-left"></div>
          <div class="quarterNum">
            <h1>__Q1__</h1>
          </div>
          <div class="goalcontent goalcontent-right">
            <p class="goal_p"><b>편입 준비, 학교생활 잘 적응하기</b></p>
          </div>
        </div>
      </div>
      <div class="goal">
        <div class="quarter" id="quarter2">
          <div class="goalcontent goalcontent-left">
            <p class="goal_p"><b>1학기 성적 잘 받기, 재미있어 보이는<br>분야 관련 책 및 기술 찾아보기</b></p>
          </div>
          <div class="quarterNum">
            <h1>__Q2__</h1>
          </div>
          <div class="goalcontent goalcontent-right"></div>
        </div>
      </div>
      <div class="goal">
        <div class="quarter" id="quarter3">
          <div class="goalcontent goalcontent-left"></div>
          <div class="quarterNum">
            <h1>__Q3__</h1>
          </div>
          <div class="goalcontent goalcontent-right">
            <p class="goal_p"><b>방학 동안 웹 / 앱 등 개인 프로젝트 진행해보며 적성 찾기</b></p>
          </div>
        </div>
      </div>
      <div class="goal">
        <div class="quarter" id="quarter4">
          <div class="goalcontent goalcontent-left">
            <p class="goal_p"><b>2학기 수업 집중 및 관심 분야 관련 공부 시작</b></p>
          </div>
          <div class="quarterNum">
            <h1>__Q4__</h1>
          </div>
          <div class="goalcontent goalcontent-right"></div>
        </div>
      </div>
    </section>
  </div>
</body>
</html>
