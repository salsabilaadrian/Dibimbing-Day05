let users = [
    {
        "name": "Alex",
        "age": 20,
        "hometown_code": "JKT"
    },
    {
        "name": "John",
        "age": 25,
        "hometown_code": "BDG"
    },
    {
        "name": "Jean",
        "age": 19,
        "hometown_code": "SBY"
    },
    {
        "name": "Yuki",
        "age": 30,
        "hometown_code": "MLG"
    } 
]

let cities = {
    "JKT": {
        "full_name": "Jakarta",
        "country": "Indonesia",
        "province": "DKI Jakarta",
        "calling_code": "021"
    },
    "BDG": {
        "full_name": "Bandung",
        "country": "Indonesia",
        "province": "West Java",
        "calling_code": "022"
    },
    "SBY": {
        "full_name": "Surabaya",
        "country": "Indonesia",
        "province": "East Java",
        "calling_code": "031"
    },
    "MLG": {
        "full_name": "Malang",
        "country": "Indonesia",
        "province": "East Java",
        "calling_code": "0341"
    },
}

let result = []

function insert(arr, obj){
    for(let i = 0; i< arr.length; i++){
        if(arr[i].hometown_code == "JKT"){
            result.push(arr[i])
            result.push(obj.JKT);
            console.log(result)
        } else if(arr[i].hometown_code == "BDG"){
            result.push(arr[i])
            result.push(obj.BDG);
            console.log(result)
        } else if(arr[i].hometown_code == "SBY"){
            result.push(arr[i])
            result.push(obj.SBY);
            console.log(result)
        } else if(arr[i].hometown_code == "MLG"){
            result.push(arr[i])
            result.push(obj.MLG);
            console.log(result)
        }      
    }
}

insert(users, cities)