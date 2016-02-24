$(document).ready(function(){

	var baseUrl = "https://api.twitch.tv/kraken/streams/"
	var urls = [ baseUrl + "freecodecamp", baseUrl + "storbeck", baseUrl + "terakilobyte", baseUrl + "habathcx", baseUrl + "RobotCaleb", baseUrl + "thomasballinger", baseUrl + "noobs2ninjas", baseUrl + "beohoff", baseUrl + 'medrybw', baseUrl + 'ESL_SC2', baseUrl + "brunofin", baseUrl + "comster404"];

	$.each(urls, function(i,u){
		$.ajax({url: u,
			dataType: "jsonp",
			success: function(response){
	    	$('.streamer-pic').append(response.stream.channel.logo);
			}
		});

	});
});