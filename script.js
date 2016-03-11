$(document).ready(function(){
	var baseUrl = "https://api.twitch.tv/kraken/streams/"
	var urls = [ baseUrl + "freecodecamp", baseUrl + "storbeck", baseUrl + "terakilobyte", baseUrl + "habathcx", baseUrl + "RobotCaleb", baseUrl + "thomasballinger", baseUrl + "noobs2ninjas", baseUrl + "beohoff", baseUrl + 'medrybw', baseUrl + 'ESL_SC2', baseUrl + "OgamingSC2", baseUrl + "comster404", baseUrl + "brunofin"];
	
	$.each(urls, function(i,url){
		$.ajax({url: url,
			dataType: "jsonp",
			success: function(response){
				var channelName = url.substr(url.lastIndexOf('/')+1);
				if(response.stream === null){
					$('.streamers').append('<div class="streamer off"><div class="row"><div class="col-md-2 pic-cont"><div class="pic" style="background: url(images/A.gif); background-size: cover;"></div></div><div class="col-md-7 channel-name"><a href="http://twitch.tv/'+ channelName +'">'+channelName+'</a></div><div class="col-md-3 game">Not playing</div></div></div>');
				}else if(response.status === 422){
					$('.streamers').append('<div class="streamer off"><div class="row"><div class="col-md-2 pic-cont"><div class="pic" style="background: url(images/A.gif); background-size: cover;"></div></div><div class="col-md-7 channel-name"><a href="http://twitch.tv/'+ channelName +'">'+channelName+'</a></div><div class="col-md-3 game">Dead channel</div></div></div>');
				}else{
					$('.streamers').prepend('<div class="streamer onl"><div class="row"><div class="col-md-2 pic-cont"><div class="pic" style="background: url('+response.stream.channel.logo+'); background-size: cover;"></div></div><div class="col-md-7 channel-name"><a href="http://twitch.tv/'+ response.stream.channel.name +'">'+response.stream.channel.name+'</a></div><div class="col-md-3 game">'+ response.stream.game+'</div></div>');
				}
			}
		});
	});

	jQuery(function(){
		$('.online').click(function(){
			$('.off').addClass('hidden');
			$('.onl').removeClass('hidden');
		});

		$('.offline').click(function(){
			console.log("aleksa");
			$('.onl').addClass('hidden');
			$('.off').removeClass('hidden');
		});

		$('.all').click(function(){
			$('.onl').removeClass('hidden');
			$('.off').removeClass('hidden');
		});
	});


});


	// var baseUrlForLogos = "https://api.twitch.tv/kraken/users/"
	// var urlsForLogos = [baseUrlForLogos + "freecodecamp", baseUrlForLogos + "storbeck", baseUrlForLogos + "terakilobyte", baseUrlForLogos + "habathcx", baseUrlForLogos + "RobotCaleb", baseUrlForLogos + "thomasballinger", baseUrlForLogos + "noobs2ninjas", baseUrlForLogos + "beohoff", baseUrlForLogos + 'medrybw', baseUrlForLogos + 'ESL_SC2', baseUrlForLogos + "OgamingSC2", baseUrlForLogos + "comster404", baseUrlForLogos + "brunofin"];