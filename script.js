
$(document).ready(function() {  
   var lat; // latitude
   var lon; // longitude
   var wsql; // basic sql
   var weatherYQL; // full YQL
   var temp_f; // temperature in Fahrenheit
   var temp_c; // temperature in Celsius
   var code; // weather code from Yahoo API

   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {	   
      lat = position.coords.latitude;
	  lon = position.coords.longitude;

      wsql = 'select * from weather.forecast where woeid in (select woeid from geo.places where text="(' + lat + ','+ lon + ')")';
	  weatherYQL = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(wsql) + "&format=json&callback=?";
	  	  
      $.getJSON(weatherYQL, function(data){
		temp_f = data.query.results.channel.item.condition.temp;
		
		// set the text of #temperature
		$("#temperature").text(temp_f + " &deg;F");
		
		$("#temperature").html(temp_f + " &deg;F");
		$("#temp_text").html(data.query.results.channel.item.forecast[0].text);
		$("#location").html(data.query.results.channel.location.city + ", " +
		              data.query.results.channel.location.region);	
		
		code = data.query.results.channel.item.forecast[0].code;		
		setBackground(code);
      }); 
	});	
   } 
   
   // set background color according to weather code
   function setBackground(code) {
	   
	 switch(code) {
	   case("0"): 
	   case("1"):
	   case("2"):
	   case("3"):
	   case("4"):
	   case("5"):
	   case("6"):
	   case("7"):
	   case("8"):
	   case("9"):
	   case("10"):
	   case("11"):
	   case("12"): $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pgm86oMiWw4mS4PWO0iqjtjq1A8D4N7N2uLX4Aiz_2PU7_b8bi9jC7SUNeG6OFASQ69qtvWS3QQdFxqaDM8s-kpW5oG7LZTKIZ3ooZPh8kWz9ORRLX6n9__kcFzW_ZS_U3rDKAZE1gOJeM8m29R_Tem_crxn6mrRxOwQOmvGVuXA/rainy.jpg?psid=1")');
	             break;
	   case("13"):
	   case("14"):
	   case("15"):
	   case("16"):
	   case("17"): $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pcM7OY98V2SZWzIyBNqGJM-NQs-7dQalY4Wrk6J9QJpLByoGkHW741-_jW_7GM_zZZGn8srLH9U8G20DgoYY3ByP51km5rPJhLJty99BI_B5HJVViYBhJx8aFM-T1ktEuz8gcevKjNb1dg87Wd5LT-6D8ceJG-XO-ws8iTXqnc84/snowy.jpg?psid=1")');
	             break;
	   case("18"):
	   case("19"):
	   case("20"):
	   case("21"):
	   case("22"):
	   case("23"):
	   case("24"):
	   case("25"):
	   case("26"):
	   case("27"):
	   case("28"):
	   case("29"):
	   case("30"): $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pI4sx2qdaVDrRBStHEmeROdtl1KAXflKl8Zyj0nMzoMGzryWMsj0-xMWz7gLKvIXwiUI51EaBMaJhFyb7ZvZmxFhP1OzwACmbKirt-v7LGrObOqMIeSmRmvpNmeUhyMdytkwinnVsHGYb2BELpvleblm9lkcuFr89TTaZpsVWIII/cloudy.jpg?psid=1")');
	             break;
	   case("31"):
	   case("32"):
	   case("33"):
	   case("34"): $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pdcSlfhc7Kf2LH-aSdNznZDdTkly6CZGtzKC8bjs2dnBKMSmDd7ECoe8wL_4FsIMvLAV58xfroAEpEbcqe_tzw1Q7-ZvhvhkoUd3q8VkWweGf6jg3ef2v6xURD8EJtpO0f5AYz9kDQ-JyILvDqahoiCW4aV_gk1lpcsf8AzNMtO8/sunny.jpg?psid=1")');
	             break;
	   case("35"):
	   case("36"):
	   case("37"):
	   case("38"):
	   case("39"):
	   case("40"): $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pgm86oMiWw4mS4PWO0iqjtjq1A8D4N7N2uLX4Aiz_2PU7_b8bi9jC7SUNeG6OFASQ69qtvWS3QQdFxqaDM8s-kpW5oG7LZTKIZ3ooZPh8kWz9ORRLX6n9__kcFzW_ZS_U3rDKAZE1gOJeM8m29R_Tem_crxn6mrRxOwQOmvGVuXA/rainy.jpg?psid=1")');
	             break;
	   case("41"):
	   case("42"):
	   case("43"):
	   case("44"):
	   case("45"):
	   case("46"):
	   case("47"): $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pcM7OY98V2SZWzIyBNqGJM-NQs-7dQalY4Wrk6J9QJpLByoGkHW741-_jW_7GM_zZZGn8srLH9U8G20DgoYY3ByP51km5rPJhLJty99BI_B5HJVViYBhJx8aFM-T1ktEuz8gcevKjNb1dg87Wd5LT-6D8ceJG-XO-ws8iTXqnc84/snowy.jpg?psid=1")');
	             break;
	   default: $("body").css("background-image", 'url("https://yoxvew-bn1305.files.1drv.com/y3pdcSlfhc7Kf2LH-aSdNznZDdTkly6CZGtzKC8bjs2dnBKMSmDd7ECoe8wL_4FsIMvLAV58xfroAEpEbcqe_tzw1Q7-ZvhvhkoUd3q8VkWweGf6jg3ef2v6xURD8EJtpO0f5AYz9kDQ-JyILvDqahoiCW4aV_gk1lpcsf8AzNMtO8/sunny.jpg?psid=1")');
	 }
   }
   
   $("#temperature").click(function(){	     
	 if (($("#temperature").text()).indexOf("F") > -1) {
	   temp_c = (temp_f - 32) * 5 / 9;
	   $("#temperature").text(Math.round(temp_c) + " &deg;C");
	   $("#temperature").html(Math.round(temp_c) + " &deg;C");
	 }		 
	 else if (($("#temperature").text()).indexOf("C") > -1) {
	   temp_f = temp_c * 9 / 5 + 32;
	   $("#temperature").text(Math.round(temp_f) + " &deg;F");
	   $("#temperature").html(Math.round(temp_f) + " &deg;F");
	 }
    }); 
});
