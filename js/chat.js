var username = null;
//var username = "台球代言人";
var userpic = "";
//var messageSound = new Audio();
//messageSound.setAttribute('src', 'audio/msg.mp3');
function msgFun(){
	msgMusic.play();
	var sound = document.getElementById('msg');
	sound.loop = false;
}
function prevent (e) {
	e.preventDefault();
}
function chat() {
	setTimeout(function() {
		var chat_content = [{
			type: 8,
			text: '<img class="maximg" style="margin-top: 0.15rem" src="./images/24.jpg" alt="">'
		},{
			type: 7,
			text: '这么多大神在，我是不是进错群了'
		},{
			type: 1,
			text: '没有加错'
		},{
			type: 2,
			text: "@" + username + "刚来，@潘晓婷❤《台球风云》代言人你倒是解释一下啊<img class='biaoqing' src='./images/26.jpg' >"
		},{
			type: 1,
			text: '嗯嗯，我来解释一下~'
		}, {
			type: 1,
			text: '《台球风云》手游将在01月31日全平台首发，你们之前应该也听说了吧？'
		}, {
			type: 2,
			text: '专业级手游，早有耳闻了！'
		}, {
			type: 3,
			text: '等了好久，好期待❤'
		}, {
			type: 1,
			text: '《台球风云》即将举办世界级比赛“《台球风云》大奖赛”，这个比赛玩法十分新颖，现在我们都报名了，欢迎@' + username + '的加入！'
		}, {
			type: 7,
			text: '啊？我？我不行啊我，我这么菜。。。'
		}, {
			type: 1,
			text: '不要怕，相信自己！我会在游戏里面手把手教你的，加油！'
		}, {
			type: 9,
			text: '<img  style="width:6rem;height: 3.89rem;margin-top: 0.55rem;" src="./images/33.png" />'
		}, {
			type: 1,
			text: '来，大家再给点鼓励！！！'
		}, {
			type: 2,
			text: '<img class="biaoqing" src="./images/28.jpg" alt="">火老师，你说呢？<img class="biaoqing" src="./images/29.jpg" alt="">'
		}, {
			type: 3,
			text: '<img class="biaoqing" src="./images/28.jpg" alt="">火老师，你说呢？<img class="biaoqing" src="./images/29.jpg" alt="">'
		}, {
			type: 4,
			text: '<img class="biaoqing" src="./images/28.jpg" alt="">火老师，你说呢？<img class="biaoqing" src="./images/29.jpg" alt="">'
		}, {
			type: 5,
			text: '<img class="biaoqing" src="./images/28.jpg" alt="">火老师，你说呢？<img class="biaoqing" src="./images/29.jpg" alt="">'
		}, {
			type: 6,
			text: '<img class="biaoqing" src="./images/30.jpg" alt="">'
		}, {
			type: 6,
			text: '@'+ username +', you’re the best！<img class="biaoqing" src="./images/28.jpg" alt="">'
		}, {
			type: 8,
			text: '<img class="maximg" style="margin-top: 0.15rem" src="./images/32.jpg" />'
		}, {
			type: 7,
			text: '我会努力哒！'
		}, {
			type: 2,
			text: '@潘晓婷❤《台球风云》代言人，话说我们现在也才7个人啊，还差1人！'
		}, {
			type: 1,
			text: '对的，正愁这事！其实游戏里简单几步就可以邀请朋友来玩的，你们看！'
		//}, {
		//	type: 1,
		//	text: '约战图'
		}, {
			type: 9,
			text: '<img  style="width:6rem;height: 3.89rem;margin-top: 0.55rem;" src="./images/34.png" />'//约战图
		}, {
			type: 7,
			text: '听说大奖赛除了玩法创新外还有丰厚的实物奖品？',
			name : '@潘晓婷❤《台球风云》代言人， '
		}, {
			type: 1,
			text: '对的，不但有海量京东卡而且还有手机和电脑，其实游戏里面只需要简单几步就可以邀请朋友来玩！'
		},{
			type: 7,
			text: '那我可以去喊喜欢打台球朋友来玩吗？',
			name : '@潘晓婷❤《台球风云》代言人， '
		}, {
			type: 1,
			text: '那就太好了@' + username + '，正愁怎么样让更多人知道这么大的福利呢'
		}, {
			type: 7,
			text: '没问题，现在我就去发朋友圈，把小伙伴都喊来玩！'
		}, {
			type: 1,
			text: '好，那我们就等你的好消息了！'
		//}, {
		//	type: 9,
		//	text: '<img  style="width:3rem;margin-top: 0.55rem;" src="./images/33.png" />'
		//}, {
		//	type: 7,
		//	text: '明白了，大神们！'
		}, {
			type: 1,
			text: '来，这个是你的奖励@' + username + '！'
		}, {
			type: 9,
			text: '<div id="dian"><img class="hand" src="./images/22.png" alt=""> <div>@'+username+',你是最棒的！</div> <span>领取红包</span> </div>'
		}]
		$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/06.jpg" alt=""></div><div class="msg"><span class="msg_name">潘晓婷❤ 《台球风云》代言人</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + '大家好！</p></div></section>')
		//messageSound.play();
		msgFun()
		$('body').on('touchmove', prevent);
		var curMsg = 0;
		var chatState = true;
		var chat = setInterval(chatCont, 1800);
		function chatCont(){
			if(!chatState){
				return false
			}
			if(curMsg >= chat_content.length) {
				clearInterval(chat)
				$('body').off('touchmove', prevent);
				return false
			}
			//messageSound.play();
			msgFun()
			if(chat_content[curMsg].type == 1) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/06.jpg" alt=""></div><div class="msg"><span class="msg_name">潘晓婷❤《台球风云》代言人</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + chat_content[curMsg].text + '</p></div></section>')
			}
			if(chat_content[curMsg].type == 2) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/07.jpg" alt=""></div><div class="msg"><span class="msg_name">丁俊晖</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + chat_content[curMsg].text + '</p></div></section>')
			}
			if(chat_content[curMsg].type == 3) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/08.jpg" alt=""></div><div class="msg"><span class="msg_name">刘莎莎</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + chat_content[curMsg].text + '</p></div></section>')
			}
			if(chat_content[curMsg].type == 4) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/09.jpg" alt=""></div><div class="msg"><span class="msg_name">陈思明</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + chat_content[curMsg].text + '</p></div></section>')
			}
			if(chat_content[curMsg].type == 5) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/10.jpg" alt=""></div><div class="msg"><span class="msg_name">韩雨</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + chat_content[curMsg].text + '</p></div></section>')
			}
			if(chat_content[curMsg].type == 6) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/11.jpg" alt=""></div><div class="msg"><span class="msg_name">奥沙利文</span><p class="msg_text"><img class="chat_arrow" src="./images/chat_arrow.png" alt="">' + chat_content[curMsg].text + '</p></div></section>')
			}
			if(chat_content[curMsg].type == 7) {
				var curname = chat_content[curMsg].name == undefined?'':chat_content[curMsg].name;
				$(".chat_container").append('<section class="my_msg_box msg_box"><div class="avatar userpic"></div><div class="msg"><p class="msg_text" style="margin-top: 0"><img class="chat_arrow_my" src="./images/chat_arrow_my.png" alt="">'+curname+'<span style="font-size: 0.42188rem;" id="h-'+curMsg+'">'+chat_content[curMsg].text.substr(0,1)+'</span></p></div></section>')
			}
			if(chat_content[curMsg].type == 8) {
				$(".chat_container").append('<section class="my_msg_box msg_box"><div class="avatar userpic"></div><div class="msg">' + chat_content[curMsg].text + '</div></section>')
			}
			if(chat_content[curMsg].type == 9) {
				$(".chat_container").append('<section class="msg_box"><div class="avatar"><img src="./images/06.jpg" alt=""></div><div class="msg"><span class="msg_name">潘晓婷❤《台球风云》代言人</span>' + chat_content[curMsg].text + '</div></section>')
			}
			if(userpic != ''){
				$(".userpic").css("background-image","url("+userpic+")");
				console.log($(".userpic").css('background-image'))
			}
			curMsg++;
			setTimeout(function() {
				$('.chat_container').scrollTop(15000);
				if(chat_content[curMsg-1].type == 7) {
					//clearInterval(chat);
					chatState = false;
					var index = 1;
					var word = chat_content[curMsg-1].text;
					function type() {
						if(chat_content[curMsg-1].text.length == index){
							clearInterval(innercont);
							chatState = true;
							//chat = setInterval(chatCont, 100)
						}
						document.getElementById("h-" + (curMsg-1)).innerText = word.substring(0, index++);
					}

					var innercont = setInterval(type, 200);
				}
			},100);
		}
	}, 1000);
	
}

$(document).on("touchstart", "#dian", function(e) {
	var e = e || window.event;
	$(".page4").remove();
	chatimg();
	e.preventDefault();
})
//chatimg();
function chatimg() {
	$('.page5').show();
	$('.name').html(username);//添加点赞名
	$('.page_name').html(username);//添加用户名
	$('.page_tx').attr('src',userpic);//添加用户头像

	var comment = [
		{
			type:"djh_pl",
			cont:6
		},{
			type:"aslw_pl",
			cont:5
		},{
			type:"hy_pl",
			cont:5
		},{
			type:"lss_pl",
			cont:6
		},{
			type:"csm_pl",
			cont:6
		},{
			type:"pxt_pl",
			cont:8
		}
	]
	var topNumber = 0;
	var topState = true;
	$(document).on('touchmove', prevent);
	function pagescroll(){
		if(!topState){
			return false;
		}
		if(topNumber>=comment.length){
			clearInterval(settop);
			$(document).off('touchmove', prevent);

			return false;
		}
		$('html,body').animate({'scrollTop':$(".page5-li").eq(topNumber).offset().top+12},500);
		topNumber++;
		topState = false;

		setTimeout(function(){
			var commentNum = 0;
			function Funcomment(){
				//messageSound.play();
				msgFun();
				if(commentNum == 0){
					$("."+comment[topNumber-1].type).show();
					$("."+comment[topNumber-1].type+' h4').show();
				}else{
					$("."+comment[topNumber-1].type+' h5').eq(commentNum-1).show();
				}
				commentNum++;
				if(commentNum == comment[topNumber-1].cont){
					clearInterval(setcomment);
					topState = true;
					if(comment[topNumber-1].type == 'pxt_pl'){
						$(".MenuShare").animate({"width": "1.9rem"}, 600);
						setTimeout(function(){
							$(".dz_menu").show();
						},610)
					}
					return false;
				}
			}
			var setcomment = setInterval(Funcomment,1100);
		},300)
		//console.log(topNumber);
	}
	var settop = setInterval(pagescroll,2300);

	$(document).on('click', '.l,.r,.weixin-tip', function(e) {
		e.stopPropagation();
	});

	$(".MenuShare").click(function() {
		$('body').on('touchmove', prevent).css("overflow", "hidden");
		$(".mack").show();
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {//苹果系统
			$(".laye_ios").show();
		} else if (/(Android)/i.test(navigator.userAgent)) {//安卓系统
			$(".laye_android").show();
		}
	});
	$('.mack').click(function() {
		$('body').off('touchmove', prevent).css("overflow", "auto").attr("style", "");
		$(".mack").hide();
	})
	$(".l").on("click", function() {
		$(".weixin-tip").show();
	})
	$(".r-ios").on("click", function() {
		//$(".weixin-tip").show();
		//console.log('ios')
		window.location.href = 'https://lnk0.com/Ixp0Et'
	})
	$(".r-android").on("click", function() {
		//$(".weixin-tip").show();
		//console.log('android');
		window.location.href = 'http://pool.pailedi.com/'
	})
	$(".weixin-tip").on("click", function() {
		$(this).hide();
	})
}