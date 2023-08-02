<!-- README 작성 -->
# 🛒 1+1=11조 : 11_KARLY
#### [마켓컬리](https://www.kurly.com/main) 사이트를 참고하여 만든 프로젝트입니다.
## 🗓️ 개발 기간
- 2023.07.28 (FRI) - 2023.08.02 (WED)
## 🎬 시연 영상
영상 추가

## 🙌‍ 멤버 구성

<table>
   <tr>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/134563310?v=4" width="100"> </td>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/116864776?v=4" width="100"> </td>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/86372549?v=4" width="100"> </td>
   </tr>   
   <tr>
      <td align="center"><a href="https://github.com/Kim-Min-Jong">김봉석</a> </td>
      <td align="center"><a href="https://github.com/Sirori">양시연</a> </td>
      <td align="center"><a href="https://github.com/JOSuYeoM">조수연</a> </td>
   </tr>
</table>

## ⚙️ 기술 스택
<div>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img alt="tailwind" src ="https://img.shields.io/badge/Tailwind-06B6D4.svg?&style=for-the-badge&logo=TailwindCSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">   
  <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>
</div>

---
## 📸 완성된 메인 페이지
![kurly11](https://github.com/1plus1equal11/11_Karly/assets/86372549/03dfa991-d743-4561-87ef-0dd453946d2d)

---


## 👨🏻‍💻 김봉석
### 1. 메인페이지(event banner, sidebar, pop-up) 
#### [event banner, banner, sidebar, pop-up]
![main_KBS](https://github.com/1plus1equal11/11_Karly/assets/86372549/74be700e-d3d8-4ddb-83b5-d37eba7d5f8d)
![main_KBS1](https://github.com/1plus1equal11/11_Karly/assets/86372549/ab51404b-087c-4c35-bbb4-1f8ceeb7eead)
- 마크업 구조 (event banner)
   - event banner img에 relative 속성 부여 후 button에 block 속성을 부여하여 img 위에 배치
- 마크업 및 기능 구현 (sidebar)
   - ul태그를 사용해서 자식요소인 li태그에 img를 넣어서 사용
   - sidebar 최근 본 상품에 상품을 클릭 시 localStorage 중복되지 않게 추가,
    새로고침 시 사라지지 않도록 구현
- pop-up
   - dialog 태그를 사용하고 autofocus 속성을 부여해서 페이지에서 가장 먼저 focus를 받도록 구현


 ## 👩🏻‍💻 양시연
### 1. 메인페이지(navigationbar, footer), 로그인 페이지
#### [navigationbar]
<img width="915" alt="kurly11_YSY2" src="https://github.com/1plus1equal11/11_Karly/assets/86372549/84a1900c-0432-4062-ad57-f6de6a08b097">

- 마크업 구조
   - 내비게이션 전체 nav
   - nav 내부 카테고리 ul/li
- 스타일링 구조
   - flex를 이용한 nav 레이아웃 설정
   - nav 하위 요소들에 hover시 글자 스타일링(글자 색상 변경, 밑줄 생성)
   - `list item`에 hover시 `bg-gray`, `bg-primary`등 배경화면 및 글자 색상 변경, transition을 주어 부드러운 효과 생성

#### [footer]
![main_YSY](https://github.com/1plus1equal11/11_Karly/assets/86372549/f53c6d90-8ae1-476f-94c8-bf207c12f348)
- 마크업 구조
   - 푸터 전체 footer
- 스타일링 구조
   - flex를 이용하여 각 섹션 레이아웃 구성
   - 글자 크기 및 색상 변경, 배경 색상 지정
#### [login & loginSuccess & loginFail]
![login_YSY](https://github.com/1plus1equal11/11_Karly/assets/86372549/8460fbf2-646f-4f01-8af2-578db7b3f118)
<img width="284" alt="image" src="https://github.com/1plus1equal11/11_Karly/assets/116864776/b5282e72-76ae-4ee1-92cf-4a189cd89c1e">
<img width="819" alt="스크린샷 2023-08-02 오후 1 29 17" src="https://github.com/1plus1equal11/11_Karly/assets/116864776/8d03000c-a574-4093-bc6b-ab713254f20b">
- 마크업 구조
   - 로그인 section 전체
   - 로그인 성공 시 마크업 일부 변경
   - 로그인 실패 시 나타나는 알림 창 설정
- 스타일링 구조
   - flex를 이용한 레이아웃 구성
   - 로그인 실패 시, position을 지정하여 전체 화면을 어둡게 하고 알림창이 뜰 수 있게 지정
- 기능 구현
  - 로그인 버튼을 눌렀을 때, 지정된 이메일과 비밀번호 값이 일치할 시 loginSuccess 페이지로 이동
  - 실패시 로그인 실패 알림창 띄우기
#### [swiper]
<img width="1424" alt="image" src="https://github.com/1plus1equal11/11_Karly/assets/116864776/26c9c335-8b58-46fb-a736-32625b272f11">

- 기능 구현
  - 메인 배너, 상품 list, 최근 본 상품 swiper 기능 구현, navigation 기능 구현과 커스텀
  - 세로 swiper 기능 구현, 아이템 클릭 시 사이드 바에 이미지 들어가게 함
  - 클릭된 아이템들이 localStorage에 저장되어 refresh를 하더라도 저장이 되게 구현



## 👩🏻‍💻 조수연
### 1. 메인 페이지 (header, products), 회원가입 페이지
#### [header] 
![kurly11_JSY1](https://github.com/1plus1equal11/11_Karly/assets/86372549/29473b8c-6446-4aca-b8df-530ff8e72d70)
- 마크업 구조
   - 헤더 전체 div
   - 리스트 ul/li 
- 스타일링 구조
   - 회원가입, 로그인, 고객센터 바로가기 `flex`, `justify-end`
   - 헤더 전체 배열 `flex`, `justify-between`
#### [products]
![kurly11_JSY](https://github.com/1plus1equal11/11_Karly/assets/86372549/51b343d3-e867-45db-895b-19036f92553f)
- 마크업 구조
   - 이 상품 어때요?, 놓치면 후회할 가격 동일
   - 각 상품 리스트 ul/li
   - button에 장바구니 img 추가
- 스타일링 구조
   - 4개의 상품 전체 `justify-center` `relative`
   - 각 상품 `flex`을 이용하여 배치
#### [join]
![kurly11_JSY2](https://github.com/1plus1equal11/11_Karly/assets/86372549/86c96f65-5438-4790-a167-2858969af2bd)
- 마크업 구조
   - 회원가입 페이지 전체 div 
   - 회원가입 양식 form
   - 입력 부분 input
   - 필수입력사항 required, * 표시 sup
- 스타일링 구조
   - 화면 크기: `w-[640px], mx-auto`
   - `placeholder`를 주어 정보 전달
   - `cursor-pointer`를 이용하여 커서 표시



---

### 🤩 느낀점

김봉석: 프로젝트를 시작하면서 제 실력이 부족하다고 생각했는데 조장이 되고 나니까 더 많이 불안했고 조원분들과 제대로 소통하고 프로젝트를 잘 리딩 할 수 있을까 걱정도 많이 했습니다. 하지만 항상 조원분들이 소통도 잘 해주시고 프로젝트 하다가 막히는 부분이 있어도 서로 같이 해결하려고하면서 함께 성장하는 시간이 됐고 잘 마무리 했습니다.  11조에서 함께해주셔서 감사합니다.

양시연: 부족한 점이 많아 걱정이 많이 되었던 프로젝트였지만, 조원들과 함께 머리를 맞대고 고민하고 해결해나가는 과정이 소중했고, 더 빠르게 성장할 수 있었던 기회였던 것 같습니다. 
조원들이 함께 있었기에 힘들어도 포기하지 않고 더 노력할 수 있었고, 책임감도 기를 수 있었습니다. 11조 최고 ❤️

조수연: 주어진 시간이 제한적이었기에 첫 시작 때는 많은 걱정이 있었습니다. 그러나 팀원들과 자주 소통하며 세부적인 목표를 설정하고 프로젝트를 진행하게 되어 성공적으로 마무리할 수 있었습니다.
이번 프로젝트를 통해 깃에 대한 숙련도가 크게 향상되었고, 팀원들과 서로의 진행 상황에 대해 지속적으로 피드백을 주고받으면서 빠르게 성장할 수 있는 기회를 갖게 되었습니다. 또한, 많은 것을 배우고 깨달은 점이 있어서 매우 유익한 경험이었습니다. 다음 프로젝트 전까지 더 많이 공부하고 자기 개발에 노력하여 더욱 효율적이고 완성도가 높은 프로젝트를 진행하여 성공적으로 완수할 수 있도록 노력하겠습니다. 팀원분들 다들 감사합니다 😊⭐ 















