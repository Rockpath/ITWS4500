var tweets,
tweetcount = 0,
count = 0;
$(document).ready(function() {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "TwitterTweets17.json",
		success: function( json ) {
			tweets = json;
		}
	});
});
function create_tweet() {
	tweetcount++
	var image = "<img src='" + tweets[count]["user"]["profile_image_url"] + "'>";
	var txt = "<span class='tweet'>" + tweets[count]["text"] + "</span>";
	var msg = "<div class='panel panel-default'><div class='panel-body'>" + image + txt + "</div></div>"
	$("#messages").append(msg);
	if(tweetcount == 6){
		$("#messages").empty();
		tweetcount = 0;
	}
	count++;
}
window.setInterval(create_tweet, 3000);