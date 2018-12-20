<?php
$code = $_REQUEST['code'];
$appid="wxe7b1c92d048c4126";
$secret="c64c552e5b5fd6d0a15013fd42b22084";
$result=array('type'=>$code,'tel'=>"2");
$requesturl="https://api.weixin.qq.com/sns/oauth2/access_token?appid=".$appid."&secret=".$secret."&code=".$code."&grant_type=authorization_code";
        $arr= file_get_contents($requesturl);
		$json=json_decode($arr);
		$access_token=$json->{'access_token'};
		$openid=$json->{'openid'};

$requesturl="https://api.weixin.qq.com/sns/userinfo?access_token=".$access_token."&openid=".$openid."";
 $result= file_get_contents($requesturl);
 $jsons=json_decode($result);
$nickname=$jsons->{'nickname'};
$headimgurl=$jsons->{'headimgurl'};
$results=array('nickname'=>$nickname,'headimgurl'=>$headimgurl);
header('Content-Type: application/json'); 
echo  json_encode($results);
?>