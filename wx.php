<?php
   $appid="wxe7b1c92d048c4126";//
   $redirect_uri=urlencode("http://www.pailedi.com/call/index.html");//
   $url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$appid."&redirect_uri=".$redirect_uri."&response_type=code&scope=snsapi_login&state=1#wechat_redirect";
  header('location:'.$url);
?>