// msg and img objects
const slides = [
  {
    message: "I took this picture of the Sunken Garden because back then, we're not close enough yet to randomly take pictures of one another. It's pretty dibaa 🥰",
    image: "./selected-img/IMG20240819141632.jpg",
  },
  {
    message: "Before you proceed, I just wanna give thanks to your parents for raising you to be such a pretty and cool and kind person. Cute mo talaga dto AHHAHAHA",
    image: "./selected-img/83018072_2794905450531392_3413475531088199680_n.jpg",
  },
  {
    message: "Our First ever picture together!📸 Am I really harmless?",
    image: "./selected-img/Messenger_creation_338A6181-3495-4413-B5B2-A9E7FB4A3437.jpeg"
  },
  {
    message: "You and Zam were my first friends in UP. In all honesty, I was too nervous arround the both of you but little did you know, I'm happy inside since yeyyy d me mag iisaaa hehe",
    image: "./selected-img/IMG20240827110459.jpg"
  },
  {
    message: "It's peaceful to be with you.",
    image: "./selected-img/38a3e55b-5b9c-4cd1-9a94-9dc3b2207833.jpg"
  },
  {
    message: "This was the time I thought we're all just going to be friends. That maybe I just adopted and yeyyy! Needless to say, this was all peaceful for me. It was fun, and a mark that we're in our freshie days! 'You smile so sweet pala,' I thought to myself.",
    image: "./selected-img/Messenger_creation_7462D8F3-3F4D-484A-821E-AFA1DCBB6411.jpeg"
  },
  {
    message: "First timee sa TimeZoneee with you. I never expected na mag gagala tayo ng... tayo lang. But yeyy there we are, nakapag billiards pa tayo and all hehe. I was really glad na naging friends tayo during these times",
    image: "./selected-img/IMG20240821141205.jpg"
  },
  {
    message: "Yeyyy, the time I figured this is the program you'll love. This day was also your birthday!! Kinda hurts tho after hearing you aren't used to celebrating them. NAUURRR",
    image: "./selected-img/IMG20240831131749.jpg"
  },
  {
    message: "Looking at Sunken with you by my side was one of the best I felt! I thought to myself, 'why do you look so dreamy?'",
    image: "./selected-img/IMG20240831154952.jpg"
  },
  {
    message: "I'll always have this on my laptop. Thank you so much!!",
    image: "./selected-img/IMG20240928110148.jpg"
  },
  {
    message: "Hi po Kuya Melvin! hehehehehe Magkaklase lang po talagaaa... Hehe?😂",
    image: "./selected-img/Messenger_creation_6B4872C2-329C-4C57-801C-70C30565ED70_1.jpeg"
  },
  {
    message: "I already loved books before going to college. But after our first fully booked tour, I bought this one because I wanted to be closer to your interests. 'Lyebrary' is such a cute and fitting name don't you think?",
    image: "./selected-img/IMG20240824201254.jpg"
  },
  {
    message: "Best UPD Snack everrr!! But we really should start eating healthy HAHAHAHAHAHA",
    image: "./selected-img/IMG20240912122344.jpg"
  },
  {
    message: "We both secretly took a picture of each other... I've never felt being one-sided with you. I hope you felt the same too.",
    image: "./selected-img/IMG20240909174227.jpg"
  },
  {
    message: "Our first movie together!! Gone girl and an anime movie about cats hehe. Appearently, I took yet another picture of a cat mwehehehehehe. Never been fond of movies but with you, I like watching them naaa yeyyy!🥰",
    image: "./selected-img/IMG20240918164852.jpg"
  },
  {
    message: "My in-denial and kind self... I was contemplating whether I should let you borrow my jacket, since I know it's going to be a sussy. I still gave you either way. Damn, it still looks great on you!😍 It can get cold sometimes, but always remember that I'm here to warm you up! (What)",
    image: "./selected-img/IMG20240927200751.jpg"
  },
  {
    message: "Coincidences can be scary don't you think? Naissue na at lahat, ngiti pa rin dibaaa🥰",
    image: "./selected-img/Messenger_creation_692BADFC-AF6D-46FE-A811-50F0E71BFACE.jpeg"
  },
  {
    message: "There really came a point when we were so accustomed with each other right? That not eating with you was so unusual. Someday pag pumaldo na, I'll buy you all your foods haaa🥹",
    image: "./selected-img/IMG20241017132621.jpg"
  },
  {
    message: "I was told you like tall with glasses drip. Here it is! My first attempt HAHAHAHA",
    image: "./selected-img/Messenger_creation_E6476DAB-68CF-4B2A-B72C-7F1B01E33D18.jpeg"
  },
  {
    message: "QCPL Timeee! You look lovely with this one! Nice curves~",
    image: "./selected-img/Messenger_creation_E74B68A3-83D0-429B-A084-0358703AEEC2.jpeg"
  },
  {
    message: "You held on my arms, made me your personal assistant, we saw sheeps, joked about being carried... Stop, I'm falling too hard, Dora🌻",
    image: "./selected-img/Messenger_creation_337A634C-428C-4EF1-8C44-7E5E344194CE.jpeg"
  },
  {
    message: "Mapanakit ka magsalita ha... You better not settle for less😤",
    image: "./selected-img/Messenger_creation_E47578A1-2C4A-411B-96A7-FA80D3074917.jpeg"
  },
  {
    message: "Larawan bago ang LAHAT: You held my hand on the train... Enjoyed yourself while we're getting lost. We watched the sunset together and ate our own words — 'May meaning ba ang lahat nang to sayo?'",
    image: "./selected-img/IMG20241005164902.jpg"
  },
  {
    message: "How comfortable are we??? Really? We're like so domesticated you knoww HAHHAHAHAHA. May we get to the point where we can wash each other's clothes (no weirdness intended)",
    image: "./selected-img/IMG20241027101056.jpg"
  },
  {
    message: "Me and my bitch face:",
    image: "./selected-img/Messenger_creation_9456E895-B9DF-459C-BC34-9B340AB2D6AA.jpeg"
  },
  {
    message: "Oh shoot, you caught me again. Hehe first time ko mangharana gagu HAHAHAHAHAAHAH Oh well, look at that kahihiyann!",
    image: "./selected-img/Messenger_creation_5EB1BA26-1069-4325-80F4-EABABD4CCBC2.jpeg"
  },
  {
    message: "Why do I always keep looking at you like that?? ackk😖",
    image: "./selected-img/Messenger_creation_BBD5184C-66B5-4217-9657-EEF1278EBCED.jpeg"
  },
  {
    message: "Happy First Monthsaryy!💜",
    image: "./selected-img/Messenger_creation_7B2AF0F1-B9E4-41E4-B25A-C583BD5AE99F.jpeg"
  },
  {
    message: "Your friends called. I'm anxious as to what your friends thought of me, even now. I'm glad you introduced me to them bits by bits Even still, I hope they greeted you todayy <3",
    image: "./selected-img/IMG20241026170954.jpg"
  },
  {
    message: "A long trip we had! HAHAHAHHAAH This was the highest I have ever been. Sabe ko na nga ba, my greatest achievement in life is you!",
    image: "./selected-img/IMG20241109144719.jpg"
  },
  {
    message: "The korean milktea we tried was so Sarapp dbaaa WHAHAHAHA Let's go here ulit pag may sahod naa🥤",
    image: "./selected-img/IMG20241109193352.jpg"
  },
  {
    message: "You can rest you head on my shoulder... Wala lang malisya? Nopeeee I kenatt!! Malice malicee! No seriously, I remember always hugging you because I want you to rest on my shoulders pero di ka naman daw antok so sge :( HAHAHAH EME",
    image: "./selected-img/IMG20250221172841.jpg"
  },
  {
    message: "OTW to Friedayss, OTW to my heartt ackkk (what??) HAHAHAAHA ang Pogandaa naman gwbeilbawigbw that's my jacket!! yeyyy",
    image: "./selected-img/IMG20250310123146.jpg"
  },
  {
    message: "That was cold. Zam is still left in the dark that I felt guilty at the time HAHAHAHAAH but heyyy, you really love your scrambles and shakes don't you?🥤",
    image: "./selected-img/IMG20241122163756.jpg"
  },
  {
    message: "Uy alam na ni zam?? Oh...",
    image: "./selected-img/Messenger_creation_CB6CFDD1-46B5-4D28-B59B-8ADE6E59A2BA.jpeg"
  },
  {
    message: "No heaven is waiting for us for this one...",
    image: "./selected-img/Messenger_creation_662F3277-B510-4447-B523-CCEB6C1B6F20.jpeg"
  },
  {
    message: "I placed it here to acknowledge who Aye is to your life. She's like your confidant besides be, knowing about us before Zam (sorry zam). You smile differently when with me and your friends, and she touches the other side of your humor that I'm not able to. That may have sounded sad, but geuninely, I'm happy you have a real friend that you can be yourself with. Treasure her ahhh",
    image: "./selected-img/IMG20250128194429.jpg"
  },
  {
    message: "CARDS!! I guess this is my version of seeing you being nerdy. I remember I was struggling to focus on the game because I was too distracted looking at you. Literall 'Heart Attack'😉",
    image: "./selected-img/IMG20241203163225.jpg"
  },
  {
    message: "Woops... How did that get in here?? HAAHAHAHAHAAH IHGBDSIYOBGASY",
    image: "./selected-img/IMG20241203163226.jpg"
  },
  {
    message: "I know you keep telling yourself na tinatamad ka ganito ganyan, pero gagawin mo pa rin naman HAHAHHHAAH. You look so cool here you know? Go gooo aral well my future archivist!✨",
    image: "./selected-img/IMG20241215185608.jpg"
  },
  {
    message: "Remii!! I miss having picnics with you naaa! I still have it now sooo if you're feeling goofy again, just tell meee I gotchu🐭",
    image: "./selected-img/Messenger_creation_229F1A48-4050-4D7A-A14F-A940E9CF15BD.jpeg"
  },
  {
    message: "I remember having this pic for my speech class. It helped me brush my shyness of loving you in public. I'm sorry if it took time, Thank you for letting me💜",
    image: "./selected-img/Messenger_creation_8A3CFDB1-B89B-44CB-AD42-AC3DF970C2BE.jpeg"
  },
  {
    message: "Thank you for celebrating my birthday with me <3 Balik tayo SM North for that hammer🤣",
    image: "./selected-img/received_1821173962034550.jpeg"
  },
  {
    message: "Yeyy Going on dates with you is the best! I'on wanna studyyy anymoree~ eme HAHAHAAHAHAHA Thank youu",
    image: "./selected-img/Messenger_creation_2B2CD972-0D40-4791-89C3-D01C68ABC5B4.jpeg"
  },
  {
    message: "Intramuross!! Your cheeks are giving everywhere you goo~ Also the time na may pride pa tayo as UP students outside campus😆",
    image: "./selected-img/IMG20241219124622.jpg"
  },
  {
    message: "I have this kind of smug face pala... It's because I'm dating such a pretty girl~🥰",
    image: "./selected-img/Messenger_creation_13C807BF-89AE-4CEC-972C-23164B869BC2.jpeg"
  },
  {
    message: "Now would you look at that. No seriously, take your time to look. I hope you could imagine how I see you beneath the sunshine and how much those cheeks of yours are glowing. Looks like a cute blob, I like it so muchh!!",
    image: "./selected-img/IMG20241219144315.jpg"
  },
  {
    message: "It's your gang! You guys may have your own lives but rely on them din haaa! You shine but different din pag kasama mo silaaa, and I'm loving that side of you~",
    image: "./selected-img/Messenger_creation_3CF19E6C-D0BF-4B11-95D7-7782DCCDC17C.jpeg"
  },
  {
    message: "We were left alone in the room as tita thought of us only being friends😭 See that smilee againn ohhhh. Grrrr tapusin natin yung art plaeseeeee hehe",
    image: "./selected-img/IMG20250114162332.jpg"
  },
  {
    message: "Naka-ilang dates na sa UP pati ba naman sa Lucenaa?? Aba abaaa hehe (more more more!!) Time to make you the best chess player of all time!!♟️",
    image: "./selected-img/Messenger_creation_7D45BB24-9898-4940-B0D1-61EB757F0B12.jpeg"
  },
  {
    message: "Yeyyy pabalik naaa! Pasabi kay tita Thank you for the free ride hehe. It was one of my accomplishments during the Christmas break, to meet your family hehe, di pa proper but oh well, we'll get there soon",
    image: "./selected-img/IMG20250118133714.jpg"
  },  
  {
    message: "Thank you for going out with me in Lucena. We didn't really knew each other back here but you proved them wrong didn't you? Ang gandaa nung lightings nilaa pero pucha ang ingayy HAHAHAHAHAHA",
    image: "./selected-img/IMG20250110181959.jpg"
  },
  {
    message: "It's the Eyes and hair for meeee. You look so stunning in this picture✨",
    image: "./selected-img/Messenger_creation_80C20C6C-1068-4D5B-A4A2-35912EA96B13.jpeg"
  },
  {
    message: "Arghhh long liness sa museum HAHAHAHAHAAHA. Worth the pagod naman dibaa Yeyyy!",
    image: "./selected-img/IMG20250201175033.jpg"
  },
  {
    message: "Happy Valentine's Day, Lyee!!🥰",
    image: "./selected-img/Messenger_creation_EA278798-7948-4339-896A-17B4D8F5600F.jpeg"
  },
  
  {
    message: "YES YES YESS!! So Pogandaa naman nitong taong toooo. Taken ka na ba ate? Please pleaseee Papa jesus sana hindi paa",
    image: "./selected-img/IMG20250214171142.jpg"
  },
  {
    message: "From poganda to this real quick... HAHAHAHAHAHAAHAHA Namanifest ang pagiging manok eh",
    image: "./selected-img/564594ac-142f-4173-aa54-2ac96cce60e1.jpg"
  },
  {
    message: "I'm sorry you had to walk so long this day. We'll buy a car na soon <3",
    image: "./selected-img/Messenger_creation_67697DB4-C5C1-4A7A-BE44-69B037C1A9B5.jpeg"
  },
  {
    message: "I may get busy but I'll always look at you the same way🥰",
    image: "./selected-img/Messenger_creation_6D0B0BC9-3927-4565-947C-659A2E218062.jpeg"
  },
  {
    message: "You look like a puppy heree! I love how you always tilt your head when meeting my eyes🥰",
    image: "./selected-img/Messenger_creation_C3FD3DD3-7A56-47E8-95DE-9D97DF838BE7.jpeg"
  },
  {
    message: "Yeyyyy! Lecture with you and Liam!! AAHAHAAHAHA Also my new jacket Yeyyy! You wore it too this dayy and damn it, why did you have to look way more visual",
    image: "./selected-img/IMG20250313094959.jpg"
  },
  {
    message: "The Substance. I could never unsee that........ NAURRRR",
    image: "./selected-img/received_2009461599467428.jpeg"
  },
  {
    message: "Yeyyy Let's goo gang!! I hope you're having fun!",
    image: "./selected-img/received_1276663466926843.jpeg"
  },
  {
    message: "Goofyyy natin HAHAHAHAHAHAAHA",
    image: "./selected-img/Messenger_creation_5C392157-2D9D-446D-8EF6-0EEB3876FA0C.jpeg"
  },
  {
    message: "Kyu-kyuuu!! Tho masarap pa rin Jangss hehe",
    image: "./selected-img/IMG20250214171142.jpg"
  },
  
  {
    message: "Our shadow really looks cute dbaa? I guess this is what it feels like ending the day with walking you home. The 24hrs isn't enough for a dayy😆",
    image: "./selected-img/IMG20250313193357.jpg"
  },
  
  {
    message: "You're glowingg!! Likeee really glowingg!! Made me think that 'geezz, I want to give you all the happiness in the world, and a house and lot ig' HAHAHHAHAHA Thank you for the lap pillowww hehe😼",
    image: "./selected-img/IMG20250315171708.jpg"
  },
  {
    message: "REV Fair!! This could've been a fun ride instead of being traumatisingg HAHAHAAHAAA Oh well, you were hugging me rin so my heart rate was like 139bpm (could've died that night🤣)",
    image: "./selected-img/IMG20250406001021.jpg"
  },
  {
    message: "Let's gooo this is very Maroon!❤️",
    image: "./selected-img/Messenger_creation_0A534F24-95EF-468E-8AC8-80360CDD32B7.jpeg"
  },
  {
    message: "A cat with a cat😸",
    image: "./selected-img/Messenger_creation_6595E853-C57F-43C6-A55F-0AA417944AB7.jpeg"
  },
  {
    message: "See how you guys smileee? Wahhh I can't get tired watching the both of you laughing so out of nowhere HAHAHAHAHHAHA. As I'm writing this, I hope you can laugh din together for your birthady!🍰",
    image: "./selected-img/IMG20250315171742.jpg"
  },
  {
    message: "Bon-Chon Pips!! Everytime we eat, I actually give you my last bites. Why? not because I'm full but it's spicy and I know you want more hehe. That's a love language I recently discovered🥰",
    image: "./selected-img/IMG20250520184050.jpg"
  },
  {
    message: "Going home for the Election. I'm just so proud and happy of you that I intendedly sent it sa Family ko HAHAHAHAHHAHA. Thank you for letting meee! I hope you can meet them soon when you're ready<3",
    image: "./selected-img/IMG20250328190431.jpg"
  },
  {
    message: "Yes of course, anything for you, my BLK babyyy🥹 Don't worry, we'll get rich that we could afford buying two for the both of us... OR BIGGER ONE😃",
    image: "./selected-img/IMG20250401151013.jpg"
  },
  {
    message: "Yeyy another iconic pose of yours! I love your facial features talagaa + the hat!! It looks great on youu~ So kissable btw🤣",
    image: "./selected-img/Messenger_creation_8D263E75-73FC-4722-A8FB-4F7AD033D506.jpeg"
  },
  {
    message: "Would you look at that, just a regular day but your eyess!! I may have a crow's feet at the corner of my eye but you have it underneath!👀 I love those big eyes talagaaaa. Lyeeeee What do you see my little owl🦉",
    image: "./selected-img/IMG20250502183053.jpg"
  },
  {
    message: "I'm just sorry for this day. I almost cried while working listening to 'little things' and then all I could think off was you, thinking you were hurt because of me. Thank you for letting me make bawi🥹",
    image: "./selected-img/IMG20250507184940.jpg"
  },
  {
    message: "You really love this cheeks pose haaa HAHAHAHHAHAHA MORE MORE!! My physical touch started with your cheeks, but now, I can do so whenever hehe. Thank you🥰",
    image: "./selected-img/IMG20250522170844.jpg"
  },
  {
    message: "I took this pic after you taught me how. I was shocked to see it as your FB profile actually. As we were seating there, I felt like crying... In all honesty, 'I want to be the reason for your smiles' was what's running in my head",
    image: "./selected-img/IMG_20250530_234950_069.jpg"
  },
  {
    message: "This is one of my favorite pictures of us. It's my perfect hair length and your flowy hair. I love how we're so close here, it's just... Perfect yk🙌",
    image: "./selected-img/IMG20250530152509.jpg"
  },
  {
    message: "Oh look ohh Third Space!! Favorite 'sweet' spot heheheheh (landi nyo naman teh sino ba kayoo! HAHAHAAH eme) ",
    image: "./selected-img/Messenger_creation_7F988B64-AD87-4584-A0FB-36AAC8F26C34.jpeg"
  },
  {
    message: "I'm just relieved and happy I got there in time. I was panting, blaming myself on the way. This was the ordeal you explicitly considered me as your partner, yet I couldn't be there? I made it in time. Thank you!",
    image: "./selected-img/8afd33e0-8987-47f8-a741-be54421428ca.jpg"
  },
  {
    message: "Finally, binasa na rin nyaaa hehe. Ansarap sa pwet nung massage chair dbaaa. Should've been me tbh HAHAHAHAHAHAHA JK😆",
    image: "./selected-img/IMG20250603175857.jpg"
  },
  {
    message: "Another Cafe find tapos mas malapit pa sa kanilaa ehh talaga naman. Tho I should've brought DOST documents nga ano? hehe Ok lang, I met with someone cute this day",
    image: "./selected-img/Messenger_creation_A8802675-8BC5-4A6D-903C-FC22204900C4.jpeg"
  },
  {
    message: "I included this because you love Ming~😻",
    image: "./selected-img/IMG20250711163658.jpg"
  },
  {
    message: "Thank you for the movie nights we had this vacation! I really missed you hereee wah wah wahhh parang everynight akong naiiyak eh HAHAHAHAHAHA OA",
    image: "./selected-img/Screenshot 2025-07-31 232834.png"
  },
  {
    message: "You look like a wife... Shet kinikilig akooo rn BF8YGWAYIBEIYGBB HELP ay sorry AHHAAHHAHAH",
    image: "./selected-img/IMG20250728175841.jpg"
  },
  {
    message: "I was really nervous meeting your father, pero ang FUNNY NYA!!🤣 Parang one of the fam pala ang peg but hehe, I'll do my best to reach that soon! Wait for mee, okay?🥰",
    image: "./selected-img/Messenger_creation_A86EA3C3-519A-496A-866C-D07EA6931D2C.jpeg"
  },
  {
    message: "Wow so domesticated naman ng pogandang ito HAHAHAHAHAHAHAH Go goo momshieee. I love how you're too detail-oriented when shopping HAHAHAHAHAHA. I could never😭",
    image: "./selected-img/IMG20250730154227.jpg"
  },
  {
    message: "THE PIN!! It looks great on you talagaa!",
    image: "./selected-img/Messenger_creation_7329F710-5B63-48F3-9DA4-EDE151FA2E81.jpeg"
  },
  {
    message: "Can't get enough so here's another🥰",
    image: "./selected-img/Messenger_creation_76841C64-AFE0-4415-8EA9-FAF5F0B18C17.jpeg"
  },
  {
    message: "I love this cafe. It's aesthetic and the VIEW is giving that visuals💅 I could always meet you here whenever we're too lazy to go sa bayan🥰",
    image: "./selected-img/IMG20250802145414.jpg"
  },
  {
    message: "I'm in my yearning stages in this pic huhu. Wahhh I miss you so muchh! (OA di pa naman naalis🤣)",
    image: "./selected-img/Messenger_creation_72E3CC5A-4663-46B4-9F51-12FFD922B65A.jpeg"
  },
  {
    message: "Gotta love this Ipad kid you knoww~ So Pretty😍",
    image: "./selected-img/Messenger_creation_0F72AE08-8878-4ED2-AB78-C0BC09C69C3F.jpeg"
  },
  {
    message: "Soooo Cuteeee. I guess we matured a bit here, ako pa lang hindi😆 Thank you for letting me stay sa dorm nyo hehe. I love bringing you lunches/dinner sooo yeyy keep em coming ^^",
    image: "./selected-img/Messenger_creation_00AC530C-1168-43C1-B818-A8C2B973B8C3.jpeg"
  },
  {
    message: "Maybe it's a messy hair for you... But to me, it feels like I'm dating a beauty queen! We should wear blue sometimes, It looks great on you!",
    image: "./selected-img/Messenger_creation_7FBCDECB-2B8B-412E-A611-99E1EA3B80B3.jpeg"
  },
  {
    message: "Can I get closer? Pleaseeeee~",
    image: "./selected-img/c0e9358a-5aaf-427d-9e47-4da4263e7d75.jpg"
  },
  {
    message: "Nadadaanan na tayo ng kali at lahat, landii pa rin hehehehe. Thank you for always giving me time <3",
    image: "./selected-img/2acca77b-bd21-4f92-945e-1e61f9559a04 (1).jpg"
  },
  {
    message: "I'm way too attached... I love you, Fomodoro Partner!💜",
    image: "./selected-img/Screenshot 2025-08-26 131459.png"
  },
  {
    message: "There we gooo! Happy Birthday Lyeeee!! I wanted to buy you all sorts of things todayy but yeyy Glad you liked it! Mwaaa Enjoy your day!🥰",
    image: "./selected-img/9e28c8be-d920-49fd-b33e-883a7a6ac78e.jpg"
  }
];

const btn = document.querySelector(".btn");
const messageBox = document.getElementById("random-msg");
const clickCountEl = document.getElementById("click-count");
const collage = document.createElement("div");
collage.classList.add("collage");
document.body.appendChild(collage);

const photoPlaceholder = document.querySelector(".photo-placeholder");
const finaleSection = document.querySelector(".finale");
const finaleText = document.querySelector(".finale-text");

let clickCount = 0;

// Handle button click
btn.addEventListener("click", () => {
  if (clickCount < slides.length) {
    const currentSlide = slides[clickCount];

    // Show message + main photo
    messageBox.textContent = currentSlide.message;
    showMainPhoto(currentSlide.image);

    if (clickCount > 0) {
      addImageToCollage(slides[clickCount - 1].image);
    }

    clickCount++;
    clickCountEl.textContent = clickCount;

    if (clickCount === slides.length) {
      setTimeout(triggerFinale, 2000);
    }
  }
});

function showMainPhoto(src) {
  photoPlaceholder.innerHTML = "";
  const img = document.createElement("img");
  img.src = src;
  photoPlaceholder.appendChild(img);
}

function addImageToCollage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("collage-img");

  img.style.top = Math.random() * 90 + "%";
  img.style.left = Math.random() * 90 + "%";
  img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

  collage.appendChild(img);
}

//finale func
function triggerFinale() {
  const mainContainer = document.querySelector(".container");

  // Fade out container
  mainContainer.classList.add("fade-out");
  setTimeout(() => {
    mainContainer.style.display = "none";
  }, 1000);

  // Arrange images into a neat grid
  setTimeout(() => {
    const imgs = document.querySelectorAll(".collage-img");
    const cols = Math.ceil(Math.sqrt(imgs.length));
    const imgSize = 120;
    const padding = 20;
    const startX = (window.innerWidth - (cols * (imgSize + padding))) / 2;
    const startY = (window.innerHeight - (cols * (imgSize + padding))) / 2;

    imgs.forEach((img, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = startX + col * (imgSize + padding);
      const y = startY + row * (imgSize + padding);

      img.style.position = "absolute";
      img.style.width = imgSize + "px";
      img.style.left = x + "px";
      img.style.top = y + "px";
    });

    collage.classList.add("finale-anim"); // enables smooth transitions
  }, 1200);

  // Start confetti 🎉
  startConfetti();
  imgs.forEach((img, i) => {
  const row = Math.floor(i / cols);
  const col = i % cols;
  const x = startX + col * (imgSize + padding);
  const y = startY + row * (imgSize + padding);

  img.style.transition = `all 1.2s cubic-bezier(.25,.8,.25,1) ${i * 50}ms`;
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.opacity = 1;
  img.style.transform = "rotate(0deg) scale(1)";
});
}


// Confetti
function startConfetti() {
  const confetti = document.createElement("canvas");
  confetti.id = "confetti-canvas";
  document.body.appendChild(confetti);

  const myConfetti = confetti.getContext("2d");
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  const pieces = [];
  const numPieces = 150;

  for (let i = 0; i < numPieces; i++) {
    pieces.push({
      x: Math.random() * confetti.width,
      y: Math.random() * confetti.height - confetti.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    });
  }

  function draw() {
    myConfetti.clearRect(0, 0, confetti.width, confetti.height);
    pieces.forEach((p) => {
      myConfetti.beginPath();
      myConfetti.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      myConfetti.fillStyle = p.color;
      myConfetti.fill();
    });
  }

  function update() {
    pieces.forEach((p) => {
      p.y += p.speed;
      if (p.y > confetti.height) {
        p.y = -10;
        p.x = Math.random() * confetti.width;
      }
    });
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }

  loop();
}
