$(document).ready(function() {
    var lat, long, kelv, fahr, cels, icon, curDate, swap = true;
  
    startTime();
  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
  
        var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=b86d21440d8c9a110912a2eb0845abb4";
  
            $.getJSON(api, function(data) {
                kelv = data.main.temp;
                fahr = ((kelv) * (9/5) - 459.67).toFixed(1); //&#8457
                cels = (kelv - 273).toFixed(1); //&#8451
                icon = data.weather[0].icon;
            
                $("#location").html(data.name + " | " + data.sys.country);
                $("#temperature").html(cels + " &#8451");
                $("#weather").html(data.weather[0].main);
                $("#description").html(data.weather[0].description);
                $("#button").click(function() {
                    if(swap === true) {
                        $("#temperature").html(fahr + " &#8457");
                        swap = false; 
                        $("#button").html("Change To &#8451");
                    }
                    else {
                        $("#temperature").html(cels + " &#8451");
                        swap = true;
                        $("#button").html("Change To &#8457");
                    }
                });
            
                switch(icon) {
                    case "01d": 
                        $("body").css("background-image", "url(https://i.pinimg.com/originals/ae/22/cd/ae22cdd79b1077de16988b2f15a72090.jpg)");
                        break;
                    case "02d": 
                        $("body").css("background-image", "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/mado5ne/clouds-fly-on-blue-sky-in-sunny-weather-time-lapse_7kveaeqqu__F0000.png)");
                        $("body").css("color", "black");
                        break;
                    case "03d": 
                        $("body").css("background-image", "url(https://i.ytimg.com/vi/z2UDZMu2GLU/maxresdefault.jpg)");
                        $("body").css("color", "black");
                        break;
                    case "04d": 
                        $("body").css("background-image", "url(http://stuffpoint.com/twitter/image/9934-twitter-twit-bg.jpg)");
                        break;
                    case "09d": 
                        $("body").css("background-image", "url(http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-weather-clouds-tornado-rain-cyclone-flashlights-awesome/wallpaper-storm-and-rain-weather.jpg)");
                        break;
                    case "10d": 
                        $("body").css("background-image", "url(https://dailyhellas.com/wp-content/uploads/2015/11/rainy-weather.jpg)");
                        break;
                    case "11d": 
                        $("body").css("background-image", "url(http://ekkostorm.com/wp-content/uploads/2015/11/autumn-thunderstorm.jpg)");
                        break;
                    case "13d": 
                        $("body").css("background-image", "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Y3YQx1h/snow-weather-in-the-mountain-forest_shml_crf__F0000.png)");
                        $("body").css("color", "black");
                        break;
                    case "50d": 
                        $("body").css("background-image", "url(https://staticdelivery.nexusmods.com/mods/1704/images/2187-8-1478032764.jpg)");
                        $("body").css("color", "black"); 
                        break;
                    case "01n": 
                        $("body").css("background-image", "url(http://coolwallpaperz.info/user-content/uploads/wall/o/4/anime-love-sky-mooon-hd-jootix-343479.jpg)");
                        break;
                    case "02n": 
                        $("body").css("background-image", "url(https://www.videvo.net/videvo_files/images/Luna_00001.jpg)");
                        break;
                    case "03n": 
                        $("body").css("background-image", "url(http://www.clickinmoms.com/cmprodaily/wp-content/uploads/2016/09/Scattered-Clouds-and-Telephone-Poles-by-Eve-Tuft.jpg)");
                        break;
                    case "04n": 
                        $("body").css("background-image", "url(http://coolwallpaperz.info/user-content/uploads/wall/o/4/anime-love-sky-mooon-hd-jootix-343479.jpg)");
                        break;
                    case "09n": 
                        $("body").css("background-image", "url(https://wallpapercave.com/wp/doNuhh5.jpg)"); 
                        break;
                    case "10n": 
                        $("body").css("background-image", "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0xPgM5l/night-rain-and-light_x15nuzxu__F0000.png)"); 
                        break;
                    case "11n": 
                        $("body").css("background-image", "url(https://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg)"); 
                        break;
                    case "13n": 
                        $("body").css("background-image", "url(https://i.pinimg.com/originals/a3/7c/f4/a37cf443355aea6768b34ecc28d2a762.jpg)"); 
                        break;
                    case "50n": 
                        $("body").css("background-image", "url(https://staticdelivery.nexusmods.com/mods/1151/images/16265-0-1491016807.png)");
                        break;
                }        
            });
        });
    }  
});

function startTime() {
    var curDate = new Date();
    $("#date").html(curDate.toDateString() + " " + curDate.toLocaleTimeString());    
    var t = setTimeout(startTime, 500);
}