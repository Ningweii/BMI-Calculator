
let displayWeightOnMoon = document.getElementById('displayWeightOnMoon')
let displayWeightOnMars = document.getElementById('displayWeightOnMars')
let bmiResultInfo = document.getElementById('bmiResultInfo')

let tr_underWeight = document.getElementById('tr-underWeight')
let tr_normalWeight = document.getElementById('tr-normalWeight')
let tr_overWeight = document.getElementById('tr-overWeight')
let tr_obese = document.getElementById('tr-obese')
let tr_veryObese = document.getElementById('tr-veryObese')
let tr_extremelyObese = document.getElementById('tr-extremelyObese')

let tr_class = document.getElementsByClassName('tr-class')



document.getElementById("myBtn").onclick = function(){
    
    for(let i = 0; i < tr_class.length; i++){
        tr_class[i].style.backgroundColor = null
    }

    bmiResultInfo.style.fontStyle = "normal"
    
    let userName = document.getElementById("uName").value
    let weightValue = document.getElementById("weightValue").value
    let heightValue = document.getElementById("heightValue").value

    let bmi = weightValue / Math.pow(heightValue, 2)
    bmi = String(bmi).substring(3, 7)
    bmi = Number(bmi) / 10
    let weightOnMoonValue = ((weightValue * 16.5) / 100).toFixed(1)
    let weightOnMarsValue = ((weightValue * 37.83) / 100).toFixed(1)

    if(userName == '' || weightValue == '' || heightValue == ''){
        bmiResultInfo.innerText = 'ყველა ველი უნდა შეავსო...'
    }
    else if(heightValue < 50 || heightValue > 220) {
        bmiResultInfo.innerText = 'ან ახალშობილი ხარ ან ინჟინერი პრომეთეუსიდან'
    }
    else if(weightValue < 20 || weightValue > 300){
        bmiResultInfo.innerText = 'ან ბეჰემოტი ხარ ან ციყვი, გამოტყდი...'
    }
    else if(bmi < 18.5) {
        bmiResultInfo.innerText = (` გამარჯობა, ${userName}. ნამეტანი გამხდარი ხარ. შენი სხეულის მასის ინდექსი არის ${bmi}. 
         ჭამას მოუმატე თორე გაქრები მალე :O`)
        displayWeightOnMoon.innerHTML = (`მთვარეზე შენ იქნებოდი ${weightOnMoonValue} კილოგრამი. 
         ${weightOnMarsValue}კგ.`)
         displayWeightOnMars.innerHTML = (`მარსზე შენი წონა იქნებოდა ${weightOnMarsValue}. თუმცა წონაში დაკლება შენ ნამდვილად აღარ გინდა ${userName}`)
         tr_underWeight.style.backgroundColor = "green"
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        bmiResultInfo.innerText = (` გაუმარჯოს ${userName}. შენი სხეულის მასის ინდექსი არის ${bmi} რაც იმას ნიშნავს რომ 
        ნორმალური წონა გაქვს შენი სიმაღლის გათვალისწინებით. ასე განაგრძე და ას წელს ასცდები უეჭველი =)`)
        displayWeightOnMoon.innerHTML = (`მთვარეზე შენ იქნებოდი ${weightOnMoonValue} კგ.`)
        displayWeightOnMars.innerHTML = `ხოლო მარსზე შენი წონა იქნებოდა ${weightOnMarsValue} კგ`
        tr_normalWeight.style.backgroundColor = "green"
    }
    else if(bmi >= 25 && bmi <= 29.9){
        bmiResultInfo.innerText = (`რაღა დაგიმალო ${userName} და დაკლება არ გაწყენდა..
        შენი სხეულის მასის ინდექსი ${bmi}-ია.. ალბათ ახალწლებზე მოიმატე.`)
        displayWeightOnMoon.innerText = (`მთვარეზე შენ იქნებოდი ${weightOnMoonValue} კილოგრამი.`)
        displayWeightOnMars.innerText = (`ხოლო მარსზე შენი წონა იქნებოდა ${weightOnMarsValue}კგ`)
        tr_overWeight.style.backgroundColor = "green"

    }
    else if(bmi >= 30 && bmi <= 34.9){
        bmiResultInfo.innerText = (`თამამად შეიძლება ითქვას რომ მსუქან ადამიანთა რიცხვს მიეკუთვნები ${userName}..
        შენი სხეულის მასის ინდექსი არის ${bmi}. ერთი ათი-თხუთმეტი კილო მოსაკლები გაქვს მინიმუმ.`)
        displayWeightOnMars.innerText = (`მთვარეზე შენ იქნებოდი ${weightOnMoonValue} კილოგრამი.`)
        displayWeightOnMars.innerText = (`მარსზე შენი წონა იქნებოდა ${weightOnMarsValue}კგ (სულ რაღაც ერთი დაკლიკებით რამდენი კგ დაიკელი ხომ ხედავ)`)
        // tr_obese.style.backgroundColor = "green"
        tr_obese.style.backgroundColor = "green"

    }
    else if(bmi >= 35 && bmi <= 39.9){
        bmiResultInfo.innerText = (`გამარჯობა ${userName}... 
        სამწუხაროდ, ასე თუ განაგრძე, დიდი ხანია არ გიწერია სააქაოზე რადგან ძალზე ჭარბწონიანი ხარ. 
        შენი სხეულის მასის ინდექსია ${bmi}`)
        displayWeightOnMoon.innerText = (`მთვარეზე შენ იქნებოდი ${weightOnMoonValue} კილოგრამი.
        შენს ძვლებს მართლაც მოუხდებოდათ სუსტი გრავიტაცია ${userName}.`)
        displayWeightOnMars.innerText = (`მარსზე შენი წონა იქნებოდა ${weightOnMarsValue}კგ`)
        tr_veryObese.style.backgroundColor = "green"
    }
    else if(bmi >= 40){
        bmiResultInfo.innerText = `გამარჯობა ${userName}. 
        სამწუხაროა რომ ამ დონემდე მიხვედი. ვერაფრით დაგეხმარები ((
        სხეულის მასის ინდექსი: ${bmi}` 
        displayWeightOnMoon.innerText = (`მთვარეზე შენ იქნებოდი ${weightOnMoonValue} კილოგრამი. 
        მხოლოდ მთვარეზე თუ შეიძლება შენი ცხოვრება ${userName}`)
        displayWeightOnMars.innerText = (`ასევე მარსზეც შეგიძლია იცხოვრო სადაც შენი წონა იქნებოდა ${weightOnMarsValue}კგ`)
        tr_extremelyObese.style.backgroundColor = "green"
    }

}



