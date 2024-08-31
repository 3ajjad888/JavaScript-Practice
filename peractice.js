// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('test'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend at all!")
// } else {
//     console.log('you should get a job!')
// }

// let height;

// if (height =) {
//     console.log(`yes`)
// } else {
//     console.log(`no`)
// }

// let favourite = Number(prompt(`what is your favourite numver`));

// if (favourite === 4 ){
//     console.log(`this is cool number 4`)
// } else if (favourite === 5) {
//     console.log(`number 5 is also a cool number`)
// } else if (favourite === 8) {
//     console.log(`number 8 is okey`)
// } else {
//     console.log(`the number your typeing is not 4, 5, and 8 , place enter the valid number`)
// }

// let number = prompt(`enter your uniqe number`)

// if (number% 2===0) {
//     console.log(`the number is even`
//     )
// } else if (number % 2 !== 0) {
//     console.log(`the number is odd`)
// } else {
//     console.log(`no`)
// }
// let age = prompt(`How Old Are You!`)

// if (age <= 13) {
//     console.log(`You Are A Child`)
// } else if (age >= 13 && age <=19) {
//     console.log(`you are a young man`)
// } else if (age >= 20){ console.log(`You are a adult man`)}
// else {
//     console.log(`enter the valid number`)
// }

// let age = prompt(`How Old are you?`);

// if (age <= 13) {
//   console.log(`you are a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`you are young man`);
// } else if (age >= 20) {
//   console.log(`your a adult`);
// } else {
//   console.log(`enter the valid number`);
// }

// const gusse = 7;
// let ygusse = prompt(`gusse the number!!!`);

// if (ygusse === gusse) {
//   console.log(`Congritulation!! your gussed is correct`);
// } else if (ygusse > 15) {
//   console.log(`fuck off piace of shit`);
// } else if (ygusse > gusse) {
//   console.log(`your are so closely, a little low`);
// } else if (ygusse < gusse) {
//   console.log(` OOh your are so higher`);
// } else {
//   console.log(`fuck off`);
// }

// let score = prompt(`Pleace enter your Fucking score`);

// if (score >= 90 && score <= 100) {
//   console.log(`your level are A`);
// } else if (score >= 80 && score <= 89) {
//   console.log(`your level are B`);
// } else if (score >= 70 && score <= 79) {
//   console.log(`your level are C`);
// } else if (score <= 70) {
//   console.log(`Fuck off `);
// } else {
//   console.log(`are you kidding me?????`);
// }

// let day = Number(
//   prompt(`what is your favourite days tell me by number Thanks`)
// );

// if (day === 1) {
//   console.log(`Monday`);
// } else if (day === 2) {
//   console.log(`tuesday`);
// } else if (day === 3) {
//   console.log(`wendnesday`);
// } else if (day === 4) {
//   console.log(`thursday`);
// } else if (day === 5) {
//   console.log(`friday`);
// } else if (day === 6) {
//   console.log9(`suterday`);
// } else if (day === 7) {
//   console.log(`sunday`);
// } else {
//   console.log(`write the fucking correct number asshole`);
// }

// const dLicens = true;
// const gVision = true;
// const isTired = false;

// console.log(dLicens && gVision); // both of them should be true
// console.log(dLicens || gVision); // one of them should be true
// console.log(!gVision); // change false to true

// const shouldD = dLicens && gVision && !isTired;

// if (shouldD) {
//   console.log(`You can driving `);
// } else {
//   console.log(`someone else should drive`);
// }

// const hasTicit = true;
// const isOver18 = true;
// const isHealthy = false;

// if ((hasTicit && isOver18) || isHealthy) {
//   console.log(`Wellcome to Adel concert`);
// } else if ((hasTicit && !isOver18) || isHealthy) {
//   console.log(`You can't enter this concert your age is less then 18`);
// } else if ((hasTicit && isOver18) || !isHealthy) {
//   console.log(`We can't access to enter this concert you are not healthy`);
// } else {
//   console.log(`please meke sure your have Ticket over 18 and be healthy `);
// }

// const hasMembership = false;
// const isOver12 = true;
// const noSkindisease = false;

// if (hasMembership && isOver12 && noSkindisease) {
//   console.log(`Wellcome to our gym`);
// } else if (hasMembership && !isOver12 && noSkindisease) {
//   console.log(`your age is not over 12 year sorry`);
// } else if (hasMembership && isOver12 && !noSkindisease) {
//   console.log(`we cant get service for skindisease`);
// } else if (hasMembership && isOver12 && noSkindisease) {
//   console.log(` plece take a Membership sir`);
// } else if (!hasMembership && isOver12 && noSkindisease) {
//   console.log(`plese chage your membership`);
// } else {
//   console.log(`something is wrong`);
// }

// const hasPassport = true;
// const hasVisa = true;
// const isHealthy = false;

// if (hasPassport && hasVisa && isHealthy) {
//   console.log(`enjoying your trip`);
// } else if (hasPassport || hasVisa) {
//   console.log(` you have to compelete all required`);
// } else {
//   console.log(`ikno`);
// }

// const hasRig = true;
// const isOver16 = true;
// const isReady = false;

// if (hasRig && isOver16 && isReady) {
//   console.log(`Enjoy your game`);
// } else if (hasRig || isOver16) {
//   console.log(
//     `everyting is alright, if your are ready plese click the button `
//   );
// }

// const hasTicket = true;
// const isOver12 = false;
// const hasPromiss = true;

// if (hasTicket && isOver12 && hasPromiss) {
//   console.log(`enjoy your watching`);
// } else if (hasPromiss && hasTicket) {
//   console.log(`I have to talk to your father`);
// } else if (isOver12 && hasPromiss) {
//   console.log(`you should tell father to buying a ticket`);
// } else if (!hasTicket && !isOver12 && !hasPromiss) {
//   console.log(`what are you doing here?`);
// } else if (hasTicket && !isOver12 && !hasPromiss) {
//   console.log(`buy a ticket?`);
// } else if (hasTicket && isOver12 && !hasPromiss) {
//   console.log(`you are age is not enogh`);
// }

// const scoreD = 45 + 45 + 75 / 3;
// const scoreK = 45 + 45 + 75 / 3;

// console.log(scoreD, scoreK);

// if (scoreD > scoreK && scoreD >= 100) {
//   console.log(`the scoreD are gat the trophy`);
// } else if (scoreK > scoreD && scoreK >= 100) {
//   console.log(`the scoreK are ger the trophy`);
// } else if (scoreD === scoreK && scoreD >= 100 && scoreD >= 100) {
//   console.log(`both oh you are win`);
// } else {
//   console.log(`what is wrong with you`);
// }

// const team1 = 42 + 22 + 77 / 3;
// const team2 = 42 + 22 + 77 / 3;

// console.log(team1, team2);

// if (team1 > team2 && team1 >= 100) {
//   console.log(`the winner is TEAM 1 with this score ${team1}`);
// } else if (team2 > team1 && team2 >= 100) {
//   console.log(`the winner is TEAM 2 with this score ${team2}`);
// } else if (team1 === team2 && team1 < 100 && team2 < 100) {
//   console.log(`know one can change my mind`);
// } else if (team1 < 100 && team2 < 100) {
//   console.log(`what is your problem`);
// }

// const season = "dd";

// switch (season) {
//   case "winter":
//     console.log(`this season is winter`);
//     break;
//   case "fall":
//     console.log(`this is fall`);
//     break;
//   case "autum":
//     console.log(`this is autum`);
//     break;
//   case "spring":
//     console.log(`this is spring`);
//     break;
//   default:
//     console.log(`enter something like this fuck`);
// }

// const age = 11;

// // age >= 18
// //   ? console.log(`you can drike wine`)
// //   : console.log(`you can drike water`);

// // const drink = age >= 18 ? "wine" : "water";
// // console.log(drink);

// console.log(`i like to drike ${age >= 18 ? "wine" : "water"}`);
// const age = 11;

// const drinkC = age >= 18 ? "you can drink Win" : "you can't drink Win";

// console.log(drinkC);

// // new veriable = last veriable ? "condition" : "condition"

// console.log(`you can drink ${age >= 18 ? "wine" : "water"}`);

// const isPremiumUser = false;

// // اگر کاربر پریمیوم باشد، هزینه ارسال "Free" وگرنه "5$" تعیین شود.
// const shippingCost = isPremiumUser ? "Free" : "5$";
// console.log(`Your shipping cost is ${shippingCost}`);

// // چاپ پیام بر اساس وضعیت کاربر
// console.log(
//   `Since you are ${
//     isPremiumUser ? "a premium user" : "not a premium user"
//   }, your shipping cost is ${shippingCost}.`
// );

// const age = 18;

// const electage = age >= 18 ? "you can" : "you cant elect";

// console.log(electage);

// const score = prompt(`what is your score`);

// allscore = score >= 60 ? "yes" : " no";

// console.log(allscore);

// const isPremiumuser = true;

// check = isPremiumuser ? "you are is premium" : "you ara not premium";

// console.log(check);

// console.log(`deliver is for you ${isPremiumuser ? "Free" : " add 5$"}`);

const stock = 0;

avileble = stock > 0 ? "add to card" : " notify me when avlileble";
console.log(avileble);
