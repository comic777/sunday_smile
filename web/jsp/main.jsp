<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>cafebnb</title>
  <!-- 타이틀 -->
  <link href="/resources/css/application.css" media="all" rel="stylesheet" type="text/css" />
  <link href="/resources/css/base_pages.css" media="screen" rel="stylesheet" type="text/css" />
  <script src="/resources/js/application.js" type="text/javascript"></script>
  <!--  ?
  <meta content="authenticity_token" name="csrf-param" />
<meta content="fdUJBQcQQP0YW7zy6LwIt3jcnaPoOGJpeXp4JN876Xk=" name="csrf-token" />-->
  <!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <link href='http://fonts.googleapis.com/css?family=Enriqueta:400,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700' rel='stylesheet' type='text/css'>
  <!-- ?
      <script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-31181930-1']);
    _gaq.push(['_setDomainName', 'myrealtrip.com']);
    _gaq.push(['_trackPageview']);
  /* this 2line are added for rollup account */
  _gaq.push(['rollup._setAccount', 'UA-31181930-5']);
  _gaq.push(['rollup._trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

</script>
 -->
<!-- ?
  <script type="text/javascript">var switchTo5x=true;</script>
   -->
  <script type="text/javascript" src="/resources/js/buttons.js"></script>
  <script type="text/javascript" src="/resources/js/loader.js"></script>
  <!-- ?
<script type="text/javascript">var NREUMQ=NREUMQ||[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script></head>
-->
<body>
<div id="fb-root"></div>
<!-- ?
<script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=174097069377552";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
 -->
<div id="container">
    <div id="Header">
  <div class="header-wrap">
    <h1><a href="/" target="_self">cafebnb</a></h1>
    <a href="new_host.jsp" class="c-button-white become-guide">카페등록하기</a>
  </div>
</div>

<!--  메인 카페 정보 넣어줌.  jsonVal에다가 db에서 가져와서 넣어주면 됨.-->
  <script type="text/javascript">
//var jsonVal = [{"table":{"id":148,"title":"[NEW] \ub77c\uc778\uac00\uc6b0 \uc640\uc778\uc5ec\ud589 ","subtitle":"\ub9ac\uc2ac\ub9c1\uc758 \uc0b0\uc9c0 \ub77c\uc778\uac00\uc6b0 \ud0d0\ubc29 \ubc0f \uc640\uc778\uc2dc\uc74c! ","location":"Ruedesheim","desc1":"\uac00\uc774\uc820\ud558\uc784 \ub300\ud559","desc2":"\ub300\ud559\uc0dd","name_localized":"\uc721\uadfc\ud61c","bimg":"http://f2.myrealtrip.com/trips/148/big.jpg","gimg":"http://f1.myrealtrip.com/guide_profiles/guide_profile_m_125.jpg","link":"/ko/offers/148"},"modifiable":true},{"table":{"id":151,"title":"[\uceec\uccd0\uc6cc\ud06c] \ubd80\uc0b0 \ube44\uc5d4\ub0a0\ub808 \uc5ec\ud589 - 11\uc6d417\uc77c \ud558\ub8e8!","subtitle":"24\uc2dc\uac04 \uc548\uc5d0 \ubd80\uc0b0 \ube44\uc5d4\ub0a0\ub808 \uc815\ubcf5\ud558\uae30!","location":"Busan","desc1":"\uc368\ub2c8\uc0ac\uc774\ub4dc\uc5c5","desc2":"\ub300\ud45c","name_localized":"\uc368\ub2c8\uc0ac\uc774\ub4dc\uc5c5","bimg":"http://f3.myrealtrip.com/trips/151/big.jpg","gimg":"http://f0.myrealtrip.com/guide_profiles/guide_profile_m_91.jpg","link":"/ko/offers/151"},"modifiable":true},{"table":{"id":107,"title":"\uc77c\ubcf8 \uc628\ucc9c \uc5ec\ud589 - \ubcb3\ud478(\ubcb3\ubd80), \uc720\ud6c4\uc778 \ub4dc\ub77c\uc774\ube0c \uc5ec\ud589 ","subtitle":"\ubcb3\ud478 \uc2dc\ubbfc\uacfc \ud568\uaed8 \ub610 \ub2e4\ub978 \uc624\uc774\ud0c0\uc758 \ub9e4\ub825\uc744 \ub290\uaef4\ubcf4\uc138\uc694^^ ","location":"Beppu","desc1":"\ubcb3\ud478\uc2dc","desc2":"\uac15\uc0ac","name_localized":"\ub9c8\ud0a4\ub178 \ubbf8\ud0a4","bimg":"http://f1.myrealtrip.com/trips/107/big.jpg","gimg":"http://f0.myrealtrip.com/guide_profiles/guide_profile_m_93.jpg","link":"/ko/offers/107"},"modifiable":true},{"table":{"id":150,"title":"\ube0c\ub8e9\ud074\ub9b0 \uc5b4\ub514\uae4c\uc9c0 \uac00 \ubd24\ub2c8?","subtitle":"\uc804\uc131\uae30\ub54c\ub294 \ub9e8\ud558\ud0c4\uc744 \ub2a5\uac00\ud558\ub294 \uacbd\uc81c\uc801 \uc601\ud654\ub97c \ub204\ub838\ub358 \ube0c\ub8e8\ud074\ub9b0, \uadf8\ub54c\uc758 \uc601\uad11\uc744 \ub290\ub084 \uc218 \uc788\ub294 \ud654\ub824\ud588\ub358 \uc2dc\uc808\uc758 \uc790\ucde8\ub97c \uc0b4\ud3b4\ubcf4\uc790!","location":"New York City","desc1":"\ubd81\uacbd\ub300\ud559\uad50,Cuny baruch","desc2":"\ud559\uc0dd,\uc778\ud134","name_localized":"\uc815\ub3d9\ud654","bimg":"http://f0.myrealtrip.com/trips/150/big.jpg","gimg":"http://f1.myrealtrip.com/guide_profiles/guide_profile_m_126.jpg","link":"/ko/offers/150"},"modifiable":true}];

var jsonVal = [{"table":{
	"id":0000001,
	"title":"망실카페",
	"subtitle":"전문 바리스타의 커피를 맛보세요!",
	"location":"Seoul",
	"desc1":"서울 도곡동","desc2":"",
	"name_localized":"윤아",
	"bimg":"/resources/cafe/0000001/offer_135_05.jpg",
	"gimg":"/resources/host/0000001/yuna1.png",
	"link":"detail.jsp?id=0000001"},"modifiable":true},
	{"table":{
	"id":0000001,
	"title":"망실카페2",
	"subtitle":"2전문 바리스타의 커피를 맛보세요!",
	"location":"Seoul2",
	"desc1":"서울 대치동","desc2":"",
	"name_localized":"윤아2",
	"bimg":"/resources/cafe/0000002/offer_36_01.jpg",
	"gimg":"/resources/host/0000002/yuna2.png",
	"link":"detail.jsp?id=0000002"},"modifiable":true},
	{"table":{
	"id":0000001,
	"title":"망실카페3",
	"subtitle":"3전문 바리스타의 커피를 맛보세요!",
	"location":"Seoul3",
	"desc1":"서울 화양동","desc2":"건대",
	"name_localized":"윤아3",
	"bimg":"/resources/cafe/0000003/offer_36_02.jpg",
	"gimg":"/resources/host/0000003/yuna3.png",
	"link":"detail.jsp?id=0000003"},"modifiable":true}];
var num = 0;

$(document).ready(function(){
  var intervalid = null;
  var duration = 5000;
  var changeVal = function(num){  //  banner change action
    $('#bnrarea0,#bnrarea1,#bnrarea2,#bnrarea3,#bnrarea4,#bnrarea5,#bnrarea6,#bnrarea7').hide();
    $('#bnrarea0').attr('src',jsonVal[num].table.bimg);
    $('#bnrarea1').attr('href',jsonVal[num].table.link);
    $('#bnrarea2').text(jsonVal[num].table.title);
    $('#bnrarea3').text(jsonVal[num].table.location);
    $('#bnrarea4').text(jsonVal[num].table.subtitle);
    $('#bnrarea5').attr('src',jsonVal[num].table.gimg);
    $('#bnrarea6').text(jsonVal[num].table.name_localized);
    $('#bnrarea7').html(jsonVal[num].table.desc1+"<br />"+jsonVal[num].table.desc2);
    $('#bnrarea0,#bnrarea1,#bnrarea2,#bnrarea3,#bnrarea4,#bnrarea5,#bnrarea6,#bnrarea7').fadeIn(300);
  };
  var startInterval = function(){ //  interval, initialize interval
    if(intervalid != null)
      clearInterval(intervalid);

    intervalid = setInterval(function(){
      num = (num==jsonVal.length-1)? 0:num+1;
      changeVal(num);
    }, duration); 
  }
  var setCookie = function(cname,value){
    var expire = new Date();
    var expTime = (value == 'show')? 0:365;
    expire.setDate(expire.getDate() + expTime);
    document.cookie = cname+"="+escape(value)+";expires="+expire.toGMTString() + ';';
  }
  var getCookie = function(cname){
    var cookies = document.cookie.split(";");
    for(var index in cookies){
      cookieEntry = cookies[index].trim().split("=");
      if (cname == cookieEntry[0])  return cookieEntry[1];
    }
    return null;
  }

  //  image preload
  for(var obj in jsonVal) {
    var img = new Image();
    img.src = jsonVal[obj].table.bimg;
  }

  // pre btn action
  $('.ft-prev').click(function(){
    num = (num>0)? num-1:jsonVal.length-1;
    changeVal(num);
    startInterval();
  });

  // next btn action
  $('.ft-next').click(function(){
    num = (num==jsonVal.length-1)? 0:num+1;
    changeVal(num);
    startInterval();
  });

  startInterval();

  if(getCookie('MAINBNR'))  $('.banner-area').addClass('ba-closed');

  //  main banner
  $('.close-banner').click(function(){
    $(this).parent().parent().animate({
      top: '-75'
    }, 300);
    $('.open-banner').animate({
      top: '125'
    }, 300);
    setCookie('MAINBNR','hide'); 
  });
  $('.open-banner').click(function(){
    $(this).parent().animate({
      top: '30'
    }, 300);
    $(this).animate({
      top: '85'
    }, 300);
    setCookie('MAINBNR','show'); 
  })

  // for body background css
  $('body').attr('id','main');
});
</script>
<!-- hj 메인 센터 사진-->
<div class="featured-trip" style="background-color:#000;">
  <div class="ft-navi">
    <a href="#" onclick="return false;" class="fader-left">
      <span class="ft-prev btn">이전</span>
    </a>
    <a href="#" onclick="return false;" class="fader-right">
      <span class="ft-next btn">다음</span>
    </a>
  </div>
  <div class="ft-image" style="background-color:#000;">
    <img alt="Big" id="bnrarea0" src="/resources/cafe/0000001/offer_135_05.jpg" />
  </div>
  <div class="ft-wrap">
    <a href="detail.jsp" id="bnrarea1" class="block">
      <dl class="ft-meta-info">
        <dt class="title"><span id="bnrarea2">cafe mangsil</span> <span class="city-name cn-black" id="bnrarea3">Seoul1</span></dt>
        <dd class="desc" id="bnrarea4">전문 바리스타의 커피매력으로 숑숑</dd>
      </dl>
    </a>
    <div class="ft-guide-info guide-info">
      <div class="photo-box"> <!--  호스트 사진 -->
        <img alt="Guide_profile_m_125" id="bnrarea5" src="/resources/host/0000001/yuna1.png" />
      </div>
      <div class="guide-box">
        <span class="guide-name" id="bnrarea6">윤아</span>
        <span class="guide-desc" id="bnrarea7">서울 도곡동</span>
      </div>
    </div>
  </div>
  <div class="fader">&nbsp;</div>
</div>
 <!--  메인 센터 사진 종료 -->

<h2 class="main-sub-title mst-popular">금주의 추천여행</h2>
<div id="sub1-recommend">
<ul class="trip-list tl-2col clearfix">
  <li >
    <a href="/ko/offers/89" class="block">
      <div class="image-area">
        <img alt="Medium" src="http://f3.myrealtrip.com/trips/89/medium.jpg" />
        <div class="tl-guide-info guide-info">
          <div class="photo-box">
            <img alt="Guide_profile_s_76" src="http://f1.myrealtrip.com/guide_profiles/guide_profile_s_76.jpg" />
          </div>
          <div class="guide-box">
            <span class="guide-name">나선애</span>
            <span class="guide-desc">국제문화센터 원장</span>
         </div>
        </div>
        <div class="fader">&nbsp;</div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">이스탄불의 낮과밤</dt>
          <dd class="desc">동서문명의 교차로 터키 역사 한눈에 보기</dd>
        </dl>
        <span class="city-name cn-white">Istanbul</span>
      </div>
    </a>
  </li>
  <li class=last>
    <a href="/ko/offers/44" class="block">
      <div class="image-area">
        <img alt="Medium" src="http://f2.myrealtrip.com/trips/44/medium.jpg" />
        <div class="tl-guide-info guide-info">
          <div class="photo-box">
            <img alt="Guide_profile_s_37" src="http://f3.myrealtrip.com/guide_profiles/guide_profile_s_37.jpg" />
          </div>
          <div class="guide-box">
            <span class="guide-name">김주희</span>
            <span class="guide-desc">아헨 공대현지 콘도 운영</span>
         </div>
        </div>
        <div class="fader">&nbsp;</div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">말레이시아로 떠나는 신나는 가족여행</dt>
          <dd class="desc">콸라룸푸르의 아름다운 야경과 함께, 가족들과의 잊지못할 추억을 만들어보세요!</dd>
        </dl>
        <span class="city-name cn-white">Kuala Lumpur</span>
      </div>
    </a>
  </li>
</ul>
</div>
<div class="clear"></div>

<h2 class="main-sub-title mst-recent">새로 등록된 여행</h2>
<div id="sub2-recent">
<ul class="trip-list tl-2col clearfix">
  <li >
    <a href="/ko/offers/135" class="block">
      <div class="image-area">
        <img alt="Medium" src="http://f3.myrealtrip.com/trips/135/medium.jpg" />
        <div class="tl-guide-info guide-info">
          <div class="photo-box">
            <img alt="Guide_profile_s_114" src="http://f0.myrealtrip.com/guide_profiles/guide_profile_s_114.jpg" />
          </div>
          <div class="guide-box">
            <span class="guide-name">오수진</span>
            <span class="guide-desc">무소속 프리랜서 디자이너</span>
         </div>
        </div>
        <div class="fader">&nbsp;</div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">파리지엔처럼 즐기는 여유롭고 다채로운 쇼핑</dt>
          <dd class="desc">쇼핑 전문 가이드와 편안하게  파리에서의 쇼핑을 여유롭게 다채롭게 즐기세요 ^^ </dd>
        </dl>
        <span class="city-name cn-white">Paris</span>
      </div>
    </a>
  </li>
  <li class=last>
    <a href="/ko/offers/142" class="block">
      <div class="image-area">
        <img alt="Medium" src="http://f0.myrealtrip.com/trips/142/medium.jpg" />
        <div class="tl-guide-info guide-info">
          <div class="photo-box">
            <img alt="Guide_profile_s_79" src="http://f0.myrealtrip.com/guide_profiles/guide_profile_s_79.jpg" />
          </div>
          <div class="guide-box">
            <span class="guide-name">조경희</span>
            <span class="guide-desc">현지가이드일본통역안내사</span>
         </div>
        </div>
        <div class="fader">&nbsp;</div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title"> [ 항공/숙박 ] 교토 힐링 투어 - 아라시야마 가을단풍놀이 2박3일</dt>
          <dd class="desc">일본의 단풍 명소로 유명한 아라시야마에서 가을 단풍 힐링 여행</dd>
        </dl>
        <span class="city-name cn-white">Kyoto</span>
      </div>
    </a>
  </li>
</ul>
</div>
<div class="clear"></div>

<ul class="trip-list tl-4col clearfix">
<div id="sub3-list">
  <li >
    <a href="/ko/offers/126" class="block">
      <div class="image-area">
        <img alt="Small" src="http://f2.myrealtrip.com/trips/126/small.jpg" />
        <div class="city-name-box">
          <span class="city-name cn-black">Milano</span>
        </div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">명품 쇼핑 드라이브 투어 in 밀라노</dt>
        </dl>
      </div>
    </a>
  </li>
  <li >
    <a href="/ko/offers/131" class="block">
      <div class="image-area">
        <img alt="Small" src="http://f2.myrealtrip.com/trips/131/small.jpg" />
        <div class="city-name-box">
          <span class="city-name cn-black">San Francisco</span>
        </div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">샌프란시스코 쇼핑 제대로 즐기기</dt>
        </dl>
      </div>
    </a>
  </li>
  <li >
    <a href="/ko/offers/137" class="block">
      <div class="image-area">
        <img alt="Small" src="http://f1.myrealtrip.com/trips/137/small.jpg" />
        <div class="city-name-box">
          <span class="city-name cn-black">Vienna</span>
        </div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">스냅사진과 함께하는 비엔나 카페 탐방 </dt>
        </dl>
      </div>
    </a>
  </li>
  <li class=last>
    <a href="/ko/offers/27" class="block">
      <div class="image-area">
        <img alt="Small" src="http://f1.myrealtrip.com/trips/27/small.jpg" />
        <div class="city-name-box">
          <span class="city-name cn-black">Berlin</span>
        </div>
      </div>
      <div class="meta-info-area">
        <dl class="meta-info">
          <dt class="title">골라 보는 베를린 여행</dt>
        </dl>
      </div>
    </a>
  </li>
</ul>
</div>
<div class="clear"></div>
<!--   <div class="about-guide-box">
  <span>남들이 모르는 재밌는 곳을 알고 있나요? 당신도 가이드가 될 수 있습니다</span>

  <a href="/ko/applicants/new" class="about_guide btn">가이드에 대해서</a>
</div>
-->


</div><!-- end container -->
﻿


<!-- ?
<script type="text/javascript">stLight.options({publisher: "ca2589e3-d56b-4b44-8a4c-775dbd994f51"});</script> -->
<script>
  //var options={ "publisher": "ca2589e3-d56b-4b44-8a4c-775dbd994f51", "position": "left", "ad": { "visible": false, "openDelay": 5, "closeDelay": 0}, "chicklets": { "items": ["facebook", "twitter", "email"]}};
  //var st_hover_widget = new sharethis.widgets.hoverbuttons(options);
</script>

<!-- Google Code for 리마케팅 태그 -->
<!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
<!-- <script type="text/javascript">
 /* <![CDATA[ */ 
  var google_conversion_id = 1004447359; 
  var google_conversion_label = "X4_BCNmRywMQ_8z63gM"; 
  var google_custom_params = window.google_tag_params; 
  var google_remarketing_only = true; 
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
<noscript>
  <div style="display:inline;">
    <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1004447359/?value=0&amp;label=X4_BCNmRywMQ_8z63gM&amp;guid=ON&amp;script=0"/>
  </div>
</noscript>
<script type="text/javascript">if (!NREUMQ.f) { NREUMQ.f=function() {
NREUMQ.push(["load",new Date().getTime()]);
var e=document.createElement("script");
e.type="text/javascript";
e.src=(("http:"===document.location.protocol)?"http:":"https:") + "//" +
  "d1ros97qkrwjf5.cloudfront.net/42/eum/rum.js";
document.body.appendChild(e);
if(NREUMQ.a)NREUMQ.a();
};
NREUMQ.a=window.onload;window.onload=NREUMQ.f;
};
NREUMQ.push(["nrfj","beacon-4.newrelic.com","c65796e019",817351,"d1laQUdYXVRTShxaVUdTa0VUUFRLGVBcVVE=",0,13,new Date().getTime(),"","","","",""]);</script></body>
 -->
</html>
