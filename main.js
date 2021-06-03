
let latitude, longitude;

        navigator.geolocation.getCurrentPosition(position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8d5239160dee3a59639f541c87fc9698&units=metric`)
                .then(response => {
                    return response.json();
                })
                .then(json => {

                    let cityName = json.name;
                    let currentTemp = json.main.temp;
                    let iconcode = json.weather[0].icon;
                    let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@4x.png";
                    let today = new Date();
                    
                    $('#wicon').attr('src', iconurl);
                    $('.city').append(cityName);
                    $('.ctemp').append(parseInt(currentTemp));
                    document.getElementById("time").innerHTML = today.toLocaleTimeString();




                    if (currentTemp < 5.0) {
                        document.getElementById("content-type").style.backgroundColor = "#5f7dc0";
                        document.getElementById("clothes").innerHTML = "패딩, 두꺼운 코트, 목도리, 기모제품을 입는 것이 좋을 것 같습니다!";
                    } else if (5.0 <= currentTemp && currentTemp < 9.0) {
                        document.getElementById("content-type").style.backgroundColor = "#5f7dc0";
                        document.getElementById("clothes").innerHTML = "코트, 가죽자켓, 히트텍, 니트, 레깅스를 입는 것이 좋을 것 같습니다!";
                    } else if (9.0 <= currentTemp && currentTemp < 12.0) {
                        document.getElementById("content-type").style.backgroundColor = "#51c2d6";
                        document.getElementById("clothes").innerHTML = "자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹을 입는 것이 좋을 것 같습니다!";
                    } else if (12.0 <= currentTemp && currentTemp < 17.0) {
                        document.getElementById("content-type").style.backgroundColor = "#51c2d6";
                        document.getElementById("clothes").innerHTML = "자켓, 가디건, 야상, 스타킹, 청바지, 면바지를 입는 것이 좋을 것 같습니다!";
                    } else if (17.0 <= currentTemp && currentTemp < 20.0) {
                        document.getElementById("content-type").style.backgroundColor = "#51c2d6";
                        document.getElementById("clothes").innerHTML = "얇은 니트, 맨투맨, 가디건, 청바지를 입는 것이 좋을 것 같습니다!";
                    } else if (20.0 <= currentTemp && currentTemp < 23.0) {
                        document.getElementById("content-type").style.backgroundColor = "#51c2d6";
                        document.getElementById("clothes").innerHTML = "얇은 가디건, 셔츠, 면바지, 청바지를 입는 것이 좋을 것 같습니다!";
                    } else if (23.0 <= currentTemp && currentTemp < 28.0) {
                        document.getElementById("content-type").style.backgroundColor = "#f18786 ";
                        document.getElementById("clothes").innerHTML = "반팔, 얇은 셔츠, 반바지, 면바지를 입는 것이 좋을 것 같습니다!";
                    } else if (28.0 <= currentTemp) {
                        document.getElementById("content-type").style.backgroundColor = "#f18786 ";
                        document.getElementById("clothes").innerHTML = "민소매, 반팔, 반바지, 원피스를 입는 것이 좋을 것 같습니다!";
                    }
                })
                
        });
        function TestFuc() {
                $("#like").hide();
            }
