//یک برنامه بنویسید که یک گذرواژه (password) را دریافت کرده و بررسی کند اگر طول گذرواژه 8 کاراکتر یا بیشتر بود، پیام "گذرواژه معتبر است" را چاپ کند. اگر کمتر از 8 کاراکتر بود، پیام "گذرواژه خیلی کوتاه است" را نمایش دهد.



let password = prompt(`type your password`)

if (password.length >= 8) {
    console.log(`Yes You Can enter`)
} else {
    console.log(`type the right password`)
}




//یک برنامه بنویسید که دمای هوا را بررسی کند و اگر دما بیشتر از 30 درجه بود، پیام "هوا گرم است" را چاپ کند. اگر دما بین 20 تا 30 درجه بود، پیام "هوا معتدل است" را چاپ کند. و اگر دما کمتر از 20 درجه بود، پیام "هوا سرد است" را چاپ کند.


let tempurture = prompt(`Enter your room tempurture`)

if (tempurture > 30) {
    console.log(`the wether is so Hot stay safty 🛟`)
} else if (tempurture <= 30 && tempurture <= 20) {
    console.log(`The wether is funtastic😎`)
} else {
    console.log(`the wether is so cold, keep warm 🏩`)
}
//یک برنامه بنویسید که موجودی حساب بانکی را بررسی کند. اگر موجودی بیشتر از 1000 واحد باشد، پیام "شما می‌توانید خرید کنید" را چاپ کند. اگر موجودی کمتر از 1000 واحد بود، پیام "موجودی شما کافی نیست" را چاپ کند و تفاوت مورد نیاز برای رسیدن به 1000 واحد را نمایش دهد.


let money = prompt(`How much do you have in your wallet`)


if (money >= 1000) {
    console.log(`enjoy your buying`)
} else {
    console.log(`please charge your wallet`)
}
//یک برنامه بنویسید که نمره یک دانش‌آموز را دریافت کند و اگر نمره بزرگتر یا مساوی 50 بود، پیام "شما قبول شدید!" را چاپ کند. در غیر این صورت، پیام "شما رد شدید!" را چاپ کند.

let score = prompt(`enter your score you receve`)

if (score >= 50) {
    console.log(`GOOd job! wellcoem🎉🎉`)
} else {
    console.log(`you have to do more peractice`)
}
//یک برنامه بنویسید که سن یک فرد را بررسی کند و اگر فرد بالای 18 سال بود، پیام "شما می‌توانید رای بدهید" را چاپ کند. اگر سن کمتر از 18 بود، پیام "شما هنوز نمی‌توانید رای بدهید" را چاپ کند و تعداد سال‌های باقیمانده تا رسیدن به 18 سال را نیز نمایش دهد.


let ageE = prompt(`enter your age pleace`)
let ageR = 18
if (ageE >= ageR) {
    console.log(`your can electing on invitation`)
} else {
    const all = ageR - ageE;
    console.log(`your has to wait fo ${all} years, Thanks`)
}