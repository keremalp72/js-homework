//yorum satırı

/* toplu yorum satırı */

// ' ' metin -> string

// number(integer (tam sayı) float,double,decimal(küsüratlı sayılar için))

//tarih-> datetime

//binary-> 0 ve 1 false ve true

//alert('Hello Javascript Dünyası');
//console.log('Merhaba javascript console');

// console.log('çalışma sırası');
// console.log(1);
// console.log('1');

// console.log('Sıra 1');
// console.log('Sıra 2');
// console.log('Sıra 3');

// console.log("nihat'ın kodları");
// console.log('nihat "hoca" kodları');
// console.log("nihat\'ın kodları");

//console.log('nihat ' + 'duysak');

//console.clear();

//console.log(1_234_567_891_011);

// küsüratlı sayılara float denir
// tam sayılara integer denir
// ikiside numberdır ->numara

// + , - , * , %
// operatörlerin yanlarına okunurluğu arttırmak için boşluk bırakırız

//console.log(5 + 5);
//console.log(5 * 10);
//console.log(4 + 8 * 12 / 7 + 8 * 4 - 10);

//prompt('adınız nedir ?');
//console.log('Adınız:' + prompt('adınız nedir ?'));
//console.log('Yaşı: ' + (Number(prompt('Yaşınız nedir ?'))));

// JS Case sensitive bir dildir.
// Büyük küçük harfe duyarlıdır.

//console.log(prompt('yaşınız ?'));
//console.log(2024 - prompt('yaşınız'));
//console.log('yaşınız: ' + (2024 - prompt('doğum yılınız')));

//console.log('yaşınız: ' + (prompt('şimdiki yılı girin') - prompt('doğum yılınız')));
//console.log(('Hoşgeldin: ') + (prompt('Adınız')) + ' ' +  prompt('Soyadınız'));
//console.log(('Hoşgeldin: ') + (prompt('Adınız')) + ' ' +  prompt('Soyadınız') + ' ' + ('yaşınız: ') + (prompt('şimdiki yılı girin') - prompt('doğum yılınız')));

//console.log(('üç notun ortalaması: ') + (((Number(prompt('not 1 '))) + (Number(prompt('not 2 ')))+ (Number(prompt('not 3 ')))) / 3));
//console.log(('3.açı: ') + (180 - ((Number(prompt('1.açı: '))) + (Number(prompt('2.açı: ') ) ) ) ) );
//değişkenler-> veriables

//kod yazarken verileri geçici olarak tuttuğumuz alanlardır (ram)
//değişkenlerin mutlaka isimleri olur -> TR karakterleri kullanmalıyız

//değişken tanımlarken let diye tanımlarız.
//değişken isimlerinin standartları vardır

//DEĞİŞKEN TANIMLAMA YÖNTEMİ
//değişken anahtar kelimesi-> değişken ismi -> atama operatörleri-> değer

//let ad = 'Nihat';
//console.log(ad); ->nihat ı verir

//değişken ismimleri camelCase olur.
//değişken ismi tanımlarken ardışık tanımlamalardan mutlaka uzak durmalıyız
//eşittrirlerin solu ve eşittirlerin sağı çok önemlidir

// let ad;
// console.log(ad);

// ad = 'nihat';
// console.log(ad);

// let isim = prompt('adınız ');
// let soyisim=prompt('soyisim: ');

// let tamAd = isim + ' ' + soyisim;
// console.log(tamAd);

//undefined-> tanımsız boş değer
//null -> boş değer
// tanımlama yapılmadıtsa veya veri olmadıysa
//veya içinde bir değer yoksa

//değişken tanımnlarken ardışık isimler vermiyoruz

// let name = 'Nihat';
// let name2 = name;
// let name3 = name2;

// alert('ses');

// console.log(name);
// console.log(name2);
// console.log(name3);

//  name = 'begüm';

//  console.log(name);
//  console.log(name3);

//strring, number, boolean -> bool
//value type -> değer tipi(daha sonradan bakıcaz)

//let this = 'hop';

//constant -> sabit ->const
//değişken bir kere tanımlanır ve değiştirilemez

//const tckn = 123456789;

//içeriğini değiştirmekten korumak istediğimiz verileri burada saklarız.aynı zamanda okuma odaklı oluğu için içerisindeki büyük veriye daha hızlı erişebiliriz.

// let yas = 36;
// console.log(typeof yas);

// console.clear();

// let yas = 36;
// yas = yas + 5;
// yas += 5;
// console.log(yas);

// yas++; //birer yaş arttırır
// yas--; //birer birer azaltır

// let mesaj = "merhaba ";
// mesaj += "arkadaşlar";
// console.log(mesaj);

//boolean - bool tipi değişkenler için isimlendirme önemlidir
//değişken ismi bool sonucunu ifade edecek şekilde veri verilmelidir

// let isStudent = true;
// let ogrenciMi = false;
// let resitMi = true;

//karşılaştırma operatörleri bir veya birden fazla durmu karşılaltırıp karşılaştırma sonucunu evet yada hayır -> true yada false olarak verir

//KARŞILAŞTIRMA OPERATÖRLERİ

// eşitlik == veya ===tip kontrolü
//! getirdiğimizde o işlemi tersine çevirir
// != eşit değildir
// !== (TİP KONTROLÜ)
// > büyüktür
// < küçüktür
// >= büyük eşittir
// <= küçük eşittir
//ternary operatörleri

// let age = 70;
// let gender = "male";
// let legalAge = 18;
// console.log(age >= legalAge);

//yaş, yasal yaştan büyük mü ?
// let isAdult = age >= legalAge; //adult -> yetişkin

// eğer başına ! işareti koyarsak durumu tersine çevirir
// bool sadece true false olur
// !true -> false
// !false -> true

// && -> ve operatörü -> hepsi true olmalı
// || - veya operatörü -> herhangi biri true olsa yeter
// | -> pipe
// mantıksal operatörler boolean döner
//mantıkasal operatörler içinde boolean veya karşılaştırma operatörleri kullanırız

// let askereGidebilirMi = age >= 18 && gender === "male";
// console.log(askereGidebilirMi);

// let topluTasımaUcretsizMi = age >= 65 || age <= 6;

// // let İnputAge = prompt('Yaşınızı giriniz: ');
// İnputAge = Number(İnputAge);

// let İsUserAdult = İnputAge >= 18;

// İF İN ÇALIŞMA ŞEKLİ
if (true) {
  //parantez içi koşulu ifade eder
  //parantez içi true ise scope içindeki kodlar çalışır
}

// İnputName = prompt("Adınızı giriniz");

// if(İnputName === 'Nihat'){
//   //süslü parantez içinde kod yazdığımızda
//   //bu kısım scope(kapsama alanı) diyoruz
//   //koşul gerçekleştiğinde bu scope içindeki
//   //kodlar çalışır
//   console.log('Hoşgeldin ' + İnputName);
// } else { //eğer if içindeki koşul sağlanmazsa bu kodu çalıştır
//   console.log('Seni tanıyamadım ');
// }

// if (İnputName !== "Nihat") {
//   console.log("Seni tanıyamadım");
// }

// if (İnputName === "Nihat" || İnputName === "nihat") {
//   console.log("Hoşgeldin Hocam");
// } else {
//   console.log("seni tanıyamadım");
// }

// if(İnputName === 'Nihat' || İnputName === 'Begüm'){
//   console.log('Hoşgeldin Hocam');
// }else if(İnputName === 'Mücahit'){
//   console.log('Bu arkadaş öğrenci');
// }else{
//   console.log('Tanıyamadım');
// }

// Kullanıxıya adını ve soyadını ayrı olarak soralım
//eğer hem ad hem soyad koşulu sağlıyor ise hoşgeldin ad soyad
//hem  begüm hoca hem nihat hocayı karşılayacak koşulu sağlıyor ise hoşgeldiniz hocalar mesajı çıkacak.
//koşulu sağlamıyor ise lütfen kayıt olunuz yazsın.

// let Ad = prompt("Adınızı giriniz " );
// let SoyAd = prompt("Soyadınızı giriniz ");

// if(Ad === 'kerem' && SoyAd ==='alp' ){
//   console.log('Hoşgeldin: ');
// }else if(Ad === 'Orhan' && SoyAd ==='Ekici' ){
//   console.log('Hoşgeldiniz Hocalar');
// }else{
//   console.log('lütfen kayıt olunuz');
// }

// taş kağıt makas

// let bilgisayarinHamlesi = ["taş", "kağıt", "makas"].at(Math.floor(Math.random()*3));
// console.log(bilgisayarinHamlesi);


















