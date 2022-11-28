function GetInfo() {

    var name_ = document.getElementById("cityInput");
    console.log(name_)
    switch(name_.value) 
    {
        
        case "Udupi":
        case "udupi":
        case "UDUPI":
            document.getElementById("body").style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.1UNaCssy20moeFoNkglZGwHaEK&pid=Api&P=0')";
            break;
        case "karkala":
        case "Karkala":
        case "KARKALA":
            document.getElementById("body").style.backgroundImage = "url('http://photos.wikimapia.org/p/00/02/23/23/45_full.jpeg')";
            break;
        case "Mangalore":
        case "mangalore":
        case "MANGALORE":
            document.getElementById("body").style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.FcEhFhZJkNa1QrYMuQg6iAHaEK&pid=Api&P=0')";
            break;
        case "Mumbai":
        case "mumbai":
        case "MUMBAI":
            document.getElementById("body").style.backgroundImage = "url('https://tse2.mm.bing.net/th?id=OIP.rCpyagkOxDXM6a3tqe626AHaEK&pid=Api&P=0')";
            break;
        case "kerala":
        case "Kerala":
        case "KERALA":
            document.getElementById("body").style.backgroundImage = "url('https://tse3.mm.bing.net/th?id=OIP.RsWnBvzNWGfDOyUWxG87jgHaD4&pid=Api&P=0')";
            break;
        case "chennai":
        case "Chennai":
        case "CHENNAI":
            document.getElementById("body").style.backgroundImage = "url('https://2.bp.blogspot.com/-jbLjigFtts8/VxjbDylRbxI/AAAAAAAABAU/o5GJoBiRlBU6nepTKs-zRvaDj5XSYXqjgCLcB/s1600/Marina_Beach_as_seen_from_Light_house..JPG')";
            break;
        default:
            document.getElementById("body").style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Images-HD.jpg')";

    }

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+name_.value+'&appid=789d9b64e1edc1c1a4d4e84f0b7f9d4b')
.then(response => response.json())
.then(data => {

    //min and max values for each day
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°C";
       
    }

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(1) + "°C";
    }
   
//Weather Icons
     for(i = 0; i<7; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
   
    console.log(data)

})

.catch(err => alert("Something Went Wrong:( "))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Udupi";
    GetInfo();
}

//Forcsting 7days
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

