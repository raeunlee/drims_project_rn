# '여행가계부-유럽편' 프로젝트

## 👩🏻‍💻개발동기

여행을 떠나게 되면 환율에 따라 내가 얼만큼 썼는지 헷갈리는 경우가 종종 있습니다.

더군다나 화폐의 단위도 생각보다 다양하고, 카드보다는 현금을 주로 쓰는 경우도 많습니다.

우리는 이러한 것을 도와줄 수 있는 '여행가계부'를 생각하게 되었습니다.

## 💁🏻‍♀️어플소개

- '여행가계부'는 나만의 여행을 만들고, 국가를 추가하고, 지출을 추가할 수 있습니다.
- 모든 것을 내가 원하는대로 자유롭게 쓰고, 지울 수 있습니다!
- 지출을 추가하면 환율을 고려하여 한화로 약 얼마정도 소비했고, 예산이 얼마정도 남았는지 알려줍니다! (추후 기능 구현이 완료되면, 이 내역을 CSV로 다운받을 수 있도록 제공할 예정입니다!)
- 추후 개발이 완성되면 OCR기능을 추가하여 '영수증인식' 기능도 추가할 예정입니다!

## 👥팀원구성

| Name | GitHub | Position |
| --- | --- | --- |
| 이라은 | raeunlee | ReactNative+EXPO, Axios, NodeJS |
| 윤철 | chul0129 | Axops, NodeJS, MySQL |

## 🛠️기술구현

https://s3.us-west-2.amazonaws.com/secure.notion-static.com/add64417-3840-49c5-a084-c6bc655ed3eb/스크린샷_2021-12-23_오후_5.32.11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211227T041612Z&X-Amz-Expires=86400&X-Amz-Signature=2260da58b33f5fa503a2f0f7089e44b61b98898bc64dd6175705aa17d6321f5d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202021-12-23%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25205.32.11.png%22&x-id=GetObject![image](https://user-images.githubusercontent.com/49014085/147433855-aafb2eae-2f0d-487b-8cc1-b53e4837d074.png)



## Frontend

[https://github.com/raeunlee/drims_project_rn](https://github.com/raeunlee/drims_project_rn)

## Backend

[https://github.com/raeunlee/drims_project_server](https://github.com/raeunlee/drims_project_server)

## 로그인 및 서비스 프로세스

![스크린샷 2021-12-24 오후 5.48.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5bb0873-8a1c-4ff9-b2de-6426d336ea0c/스크린샷_2021-12-24_오후_5.48.31.png)

![스크린샷 2021-12-24 오후 5.48.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/832d4981-2041-40d5-a9f9-a74072ed0c5b/스크린샷_2021-12-24_오후_5.48.40.png)

## 프로젝트 화면구성도 (구현예시, 추가 예정)

![스크린샷 2021-12-24 오후 5.47.06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52a897ba-170a-4232-a65c-8ffb0e3208ef/스크린샷_2021-12-24_오후_5.47.06.png)

![스크린샷 2021-12-24 오후 5.47.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d3dd087c-3005-4e73-905c-b7c1330dc646/스크린샷_2021-12-24_오후_5.47.20.png)

![스크린샷 2021-12-24 오후 5.47.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/508eef21-c0f5-423e-9a82-45705edf3a00/스크린샷_2021-12-24_오후_5.47.31.png)

![스크린샷 2021-12-24 오후 5.47.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5eb2d03a-dec4-46ee-922f-897a4da651df/스크린샷_2021-12-24_오후_5.47.42.png)

## 디렉토리 구조 (추가 예정)

mini_project

- src
    - components
        - CountryList.js 추가되는 국가를 나열하기 위한 컴포넌트
        - TravelList.js  추가되는 여행을 나열하기 위한 컴포넌트
    - navigations
        - Tab.js 하단 탭 바 (지출, 홈화면, 마이페이지)
    - screens
        - AddCountry.js 국가를 추가하는 페이지
        - AddTravel.js 여행을 추가하는 페이지
        - Login.js 로그인 페이지
        - Home.js 홈 (나의 여행이 나타나는 화면, 루트 페이지)
        - Money.js 지출을 추가하는 페이지
        - Mypage.js 마이 페이지
        - MyTravel.js 나의 여행 상세 페이지
        - Sign.js 회원가입 페이지
    - App.js
- App.js
