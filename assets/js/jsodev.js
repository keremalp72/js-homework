// alert('1.SORU Basit İndirim Hesaplama:Bir ürünün fiyatını ve indirim yüzdesini kullanıcıdan alarak, indirimli fiyatı hesaplayan bir program yazın.Örn: 100 TL olan bir ürüne %20 indirim yapıldığında ne kadar ödenmesi gerektiğini hesaplayıp alert ile gösterin.');

let urunFiyat = Number(prompt("Ürünün fiyatını giriniz :"));
let indirimTurari = Number(prompt("İndirim yüzdesini giriniz:"));

alert(
  "Ödenmesi gereken tutar: " + (urunFiyat - (urunFiyat * indirimTurari) / 100)
);
// ---------------------------------------------------------------------------------------------------------------------------------------

// alert(' 2.SORU Vize ve Final Notu ile Ortalama:Kullanıcıdan vize ve final notunu alarak dönem ortalamasını hesaplayan bir program yazın (vize %40, final %60 etkili olsun).Eğer not 50’den büyükse "Geçtiniz", 50den küçükse ve 40’tan büyükse "Şartlı geçtiniz", 40’tan küçükse "Kaldınız" mesajını verin.');

let vizeNotu = Number(prompt("Vize notunuzu giriniz :") * 0.4);
let finalNotu = Number(prompt("Final notunuzu giriniz :") * 0.6);

if (vizeNotu + finalNotu > 50) {
  alert("Geçtiniz");
} else if (vizeNotu + finalNotu < 50 && vizeNotu + finalNotu > 40) {
  alert("Şartlı geçtiniz");
} else if (vizeNotu + finalNotu < 40) {
  alert("Kaldınız");
}
// ---------------------------------------------------------------------------------------------------------------------------------

// alert('3.SORU Haftanın Günü:​​​​​​​​​​Kullanıcıdan bir sayı alın ve o sayıya karşılık gelen günü yazdırın (1 = Pazartesi, 7 = Pazar). Switch case araştırabilirsiniz.');

let weekDays = prompt(
  "Lütfen haftanın günlerini 1 den 7 ye kadar olacak şekilde yazınız: "
);

switch (weekDays) {
  case "1":
    alert("Pazartesi");
    break;

  case "2":
    alert("Salı");
    break;

  case "3":
    alert("Çarşamba");
    break;

  case "4":
    alert("Perşembe");
    break;

  case "5":
    alert("Cuma");
    break;

  case "6":
    alert("Cumartesi");
    break;

  case "7":
    alert("Pazar");
    break;
}
// -------------------------------------------------------------------------------------------------------------------------------------

// alert('4.SORU Büyük Sayıyı Bulma:Kullanıcıdan üç sayı alarak, bu sayılardan en büyüğünü bulan bir program yazın.');

let ilkSayi = Number(prompt("İlk Sayıyı Giriniz: "));
let ikinciSayi = Number(prompt("İkinci Sayıyı Giriniz: "));
let ucuncuSayi = Number(prompt("Üçüncü Sayıyı Giriniz: "));

if (ilkSayi > ikinciSayi && ikinciSayi > ucuncuSayi) {
  alert("En büyük sayı: " + ilkSayi);
} else if (ilkSayi > ucuncuSayi && ucuncuSayi > ikinciSayi) {
  alert("En büyük sayı: " + ilkSayi);
} else if (ikinciSayi > ilkSayi && ilkSayi > ucuncuSayi) {
  alert("En büyük sayı: " + ikinciSayi);
} else if (ikinciSayi > ucuncuSayi && ucuncuSayi > ikinciSayi) {
  alert("En büyük sayı: " + ikinciSayiSayi);
} else if (ucuncuSayi > ikinciSayi && ikinciSayi > ilkSayi) {
  alert("En büyük sayı: " + ucuncuSayi);
} else if (ucuncuSayi > ilkSayi && ilkSayi > ikinciSayi) {
  alert("En büyük sayı: " + ucuncuSayi);
}
// -------------------------------------------------------------------------------------------------------------------------------

// alert('5.SORUSaniyeyi Saate Çevirme:Kullanıcıdan bir saniye değeri alıp bunu saat, dakika ve saniye cinsine çevirin (Örn: 3661 saniye = 1 saat, 1 dakika, 1 saniye).');

let alınanCevap = Number(prompt("Saniye giriniz"));
let saat = alınanCevap / 3600;
let kalanSaniye = alınanCevap % 3600;
let kalanDakika = kalanSaniye / 60;
let saniye = kalanSaniye % 60;

alert(
  alınanCevap +
    " saniye= " +
    "Saat: " +
    Math.floor(saat) +
    " " +
    "Dakika: " +
    Math.floor(kalanDakika) +
    " " +
    " Saniye: " +
    Math.floor(saniye)
);
// ---------------------------------------------------------------------------------------------------------------------------------

// alert('6.SORU Güncel Yaş Hesaplama:Kullanıcıya önce yıl, sonra ay, sonra gün sorarak tam yaşını gün, ay ve yıl cinsinden hesaplayan bir program yazın.');

let dogumYili = Number(prompt("Doğum yılınızı sayı olarak giriniz: "));
let dogumAyi = Number(prompt("Doğum ayınızı sayı olarak giriniz: "));
let dogumGunu = Number(prompt("Doğum gününüzü sayı olarak giriniz: "));
let bugun = new Date();
let gun = bugun.getDate();
let ay = bugun.getMonth();
let yil = bugun.getFullYear();
let kullaniciYasi = yil - dogumYili;
let kullaniciAyi = ay - dogumAyi;
let kullaniciGun = gun - dogumGunu;

if (ay < dogumAyi) {
  kullaniciYasi -= 1;
  kullaniciAyi += 12;
  alert(kullaniciYasi + " " + kullaniciAyi + " " + kullaniciGun);
}
if (gun < dogumGunu) {
  kullaniciAyi -= 1;
  kullaniciGun += new Date(yil, ay, 0).getDate();
  alert(kullaniciYasi + " " + kullaniciAyi + " " + kullaniciGun);
}

// -------------------------------------------------------------------------------------------------------------------------------

// alert('7.SORUSaatlik Ücret Hesaplama:Kullanıcıdan çalıştığı saat sayısını ve saat başı ücretini alarak toplam kazancını hesaplayın.');

let calisilanSaat = Number(prompt("Kaç Saat Çalıştınız ?"));
let saatUcret = Number(prompt("Saat Başı Aldığınız Para ?"));

alert("Toplam kazancınız: " + calisilanSaat * saatUcret);
// ------------------------------------------------------------------------------------------------------------------------

// alert('8.SORU Aylık Taksit Hesaplama:Kullanıcıdan kredi miktarını ve taksit sayısını alarak aylık taksiti hesaplayın.v2 toplam faiz oranını da sorup aylık faizli taksiti hesaplayın.');

let krediMiktari = Number(prompt("Kredi miktarını giriniz: "));
let taksitSayisi = Number(prompt("Taksit Sayısını giriniz: "));
alert("Ödeyeceğiniz aylık taksit tutarı: " + krediMiktari / taksitSayisi);

// alert(' SORU 8 - V2');

let krediMiktarii = Number(prompt("Kredi Tutarını Giriniz: "));
let taksitSayisii = Number(prompt("Taksit Sayısını Giriniz: "));
let faizOrani = Number(prompt("Faiz Oranını Giriniz: ")) / 100;
let faizliKrediMiktarı = krediMiktari * (1 + faizOrani);
let aylikTaksit = faizliKrediMiktarı / taksitSayisi;
alert("Ödenecek aylık taksit fiyatı: " + aylikTaksit);
// ------------------------------------------------------------------------------------------------------------------------------

// alert('9.SORU Kullanıcı Adı ve Şifre Kontrolü:Kullanıcıdan hem kullanıcı adını hem de şifresini alın.Eğer kullanıcı adı "admin" ve şifre "1234" ise “Giriş başarılı” mesajı verin, aksi halde “Kullanıcı adı veya şifre hatalı” deyin.');

let kullaniciAdi = prompt("Kullanıcı adınızı giriniz: ");
let sifre = prompt("Şifrenizi giriniz: ");

if (kullaniciAdi == "admin" && sifre == "1234") {
  alert("Giriş başarılı");
} else {
  alert("Kullanıcı adı veya şifre hatalı");
}
// ---------------------------------------------------------------------------------------------------------------------------------

// alert('10.SORU Net Kar Hesaplama:Satış bedelini ve maliyet (0 girilebilir) girerek; kdv dahil toplam ve net kar bilgilerini gösterin.kdv %20, gelir vergisi %25 olarak hesaplanmalıdır. Eğer 100 TL satış yaparsanız bu tutarın %25i gelir vergisi olarak hesaplanır.100 TLlik satış bedelini toplam satış bedeli için kdv dahil 120 TL olarak hesaplarız. Eğer maliyet olduysa (satış bedeli - maliyet) + kdv olacak.');

let satisBedeli = Number(prompt("Satış Bedelini giriniz: "));
let maaliyet = Number(prompt("Maaliyet Tutarını giriniz: "));
let kdv = satisBedeli * 0.2;
let toplamSatısBedeli = satisBedeli + kdv;
let kar = satisBedeli - maaliyet;
let netKar = kar - satisBedeli * 0.25;

alert("KDV DAHİL TOPLAM:" + toplamSatısBedeli + " " + "NET KAR: " + netKar);
// ------------------------------------------------------------------------------------------------------------------------------------

// alert('TAŞ KAĞIT MAKAS SORUSU Açıklama : Oyuncuya prompt ile seçeneğini (taş, kağıt veya makas) soralım    Bilgisayarın hamlesi için "let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));" kodunu kullanın.if else ile consolea "kazandın, berabere veya kaybettin" yazdıralım.');

let kullaniciHamle = prompt("TAŞ, KAĞIT, MAKAS HAMLENİZİ GİRİNİZ: ");
let bilgisayarHamlesi = ["taş", "kağıt", "makas"].at(
  Math.floor(Math.random() * 3)
);

if (kullaniciHamle == "taş" && bilgisayarHamlesi == "taş") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "BERABERE"
  );
} else if (kullaniciHamle == "taş" && bilgisayarHamlesi == "kağıt") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "KAYBETTİN!"
  );
} else if (kullaniciHamle == "taş" && bilgisayarHamlesi == "makas") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "KAZANDIN"
  );
}

if (kullaniciHamle == "kağıt" && bilgisayarHamlesi == "kağıt") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "BERABERE!"
  );
} else if (kullaniciHamle == "kağıt" && bilgisayarHamlesi == "taş") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "KAZANDIN!"
  );
} else if (kullaniciHamle == "kağıt" && bilgisayarHamlesi == "makas") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "KAYBETTİN"
  );
}

if (kullaniciHamle == "makas" && bilgisayarHamlesi == "makas") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "BERABERE"
  );
} else if (kullaniciHamle == "makas" && bilgisayarHamlesi == "taş") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "KAYBETTİN!"
  );
} else if (kullaniciHamle == "makas" && bilgisayarHamlesi == "kağıt") {
  alert(
    "kullanıcının hamlesi: " +
      kullaniciHamle +
      " " +
      "bilgisayar hamlesi: " +
      bilgisayarHamlesi +
      " " +
      "KAZANDIN"
  );
}
// -------------------------------------------------------------------------------------------------------------------------------------------

// alert('DOĞRU YANLIŞ SORUSU Açıklama : 10 soru sorup soruların cevaplarına göre kaç doğru kaç yanlış olduğunu söyleyin.Ek olarak yanlış cevapların doğrularını da göstermeye çalışın.');

alert("SORULACAK SORULARI BÜYÜK HARFLERLE TUŞLAYINIZ!");
let soru1 = prompt(
  "HTML’de başlık etiketlerinden hangisi en büyük metni gösterir? " +
    " " +
    "A)<h1> B)<h6>"
);
soru1Cevap = "A";
let soru2 = prompt(
  "CSS’te hangi özellik yazı rengini belirler? " + " " + "A)font-size B)color"
);
soru2Cevap = "B";

let soru3 = prompt(
  "JavaScript’te hangi anahtar kelime değişken tanımlamak için kullanılır? " +
    " " +
    "A)let B)set"
);
soru3Cevap = "A";
let soru4 = prompt(
  "Hangisi bir CSS display değeridir? " + " " + "A)block B)margin"
);
soru4Cevap = "A";

let soru5 = prompt(
  "Hangisi bir JavaScript veri türüdür? " + " " + "A)margin B)boolean"
);
soru5Cevap = "B";
let soru6 = prompt(
  "HTML de resim eklemek için hangi etiket kullanılır? " +
    " " +
    "A)<img> B)<div>"
);
soru6Cevap = "A";

let soru7 = prompt(
  "JavaScript’te bir fonksiyonu çağırmak için kullanılan sembol nedir? " +
    " " +
    "A){} B)()"
);
soru7Cevap = "B";
let soru8 = prompt(
  "Hangisi CSS’te bir renk tanımlama yöntemidir? " +
    " " +
    "A)text-align B)rgb(255, 0, 0)"
);
soru8Cevap = "B";

let soru9 = prompt(
  "JavaScript’te bir koşul ifadesi nasıl başlar? " + " " + "A)if B)while"
);
soru9Cevap = "A";
let soru10 = prompt(
  "HTML formlarında kullanıcıdan bilgi almak için kullanılan etiket hangisidir? " +
    " " +
    "A)<input> B)<span>"
);
soru10Cevap = "A";
dogru = 0;
yanlis = 0;
if (soru1 == soru1Cevap) {
  dogru++;
} else if (soru1 != soru1Cevap) {
  yanlis++;
  console.log("SORU 1 -> DOĞRU CEVAP: A ");
}
if (soru2 == soru2Cevap) {
  dogru++;
} else if (soru2 != soru2Cevap) {
  yanlis++;
  console.log("SORU 2 -> DOĞRU CEVAP: B ");
}
if (soru3 == soru3Cevap) {
  dogru++;
} else if (soru3 != soru3Cevap) {
  yanlis++;
  console.log("SORU 3 -> DOĞRU CEVAP: A ");
}
if (soru4 == soru4Cevap) {
  dogru++;
} else if (soru4 != soru4Cevap) {
  yanlis++;
  console.log("SORU 4 -> DOĞRU CEVAP: A ");
}
if (soru5 == soru5Cevap) {
  dogru++;
} else if (soru5 != soru5Cevap) {
  yanlis++;
  console.log("SORU 5 -> DOĞRU CEVAP: B ");
}
if (soru6 == soru6Cevap) {
  dogru++;
} else if (soru6 != soru6Cevap) {
  yanlis++;
  console.log("SORU 6 -> DOĞRU CEVAP: A ");
}
if (soru7 == soru7Cevap) {
  dogru++;
} else if (soru7 != soru7Cevap) {
  yanlis++;
  console.log("SORU 7 -> DOĞRU CEVAP: B ");
}
if (soru8 == soru8Cevap) {
  dogru++;
} else if (soru8 != soru8Cevap) {
  yanlis++;
  console.log("SORU 8 -> DOĞRU CEVAP: B ");
}
if (soru9 == soru9Cevap) {
  dogru++;
} else if (soru9 != soru9Cevap) {
  yanlis++;
  console.log("SORU 9 -> DOĞRU CEVAP: A ");
}
if (soru10 == soru10Cevap) {
  dogru++;
} else if (soru10 != soru10Cevap) {
  yanlis++;
  console.log("SORU 10 -> DOĞRU CEVAP: A ");
}
alert("DOĞRU SAYISI: " + dogru + " " + "YANLIŞ SAYISI: " + yanlis);

// alert('HİKAYE ÖDEVİ');

let hikaye1 = prompt(
  "Bir sabah ormanda yürüyüşe çıkıyorsun. Yürürken iki yol ayrımına geliyorsun.\nHangi yolu seçersin?\n a) Sağdaki patika\n b) Soldaki orman yolu"
);

if (hikaye1 === "a") {
  let hikaye2 = prompt(
    "Sağdaki patikayı seçtin ve ileride bir göl gördün. Göl kenarında biraz dinlenmek ister misin?\n a) Evet, dinlenmek isterim\n b) Hayır, yürümeye devam edeyim"
  );

  if (hikaye2 === "a") {
    console.log(
      "Göl kenarına oturup dinleniyorsun, suyun sesi sana huzur veriyor."
    );
  } else if (hikaye2 === "b") {
    console.log("Yürüyüşe devam ediyorsun, doğanın tadını çıkarıyorsun.");
  } else {
    hikaye2 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
  }

  let hikaye3 = prompt(
    "Yoluna devam ederken bir ağaç ev gördün. İçeri girmek ister misin?\n a) Evet\n b) Hayır"
  );

  if (hikaye3 === "a") {
    console.log("Ağaç evin içine girdin ve eski bir kitap buldun.");
    let hikaye4 = prompt(
      "Kitabı açıp okumaya başlar mısın?\n a) Evet, okurum\n b) Hayır, evden çıkarım"
    );
    if (hikaye4 === "a") {
      console.log("Kitabı okumaya başladın ve büyülü bir hikayeye daldın.");
    } else if (hikaye4 === "b") {
      console.log("Evi terk edip yürümeye devam ettin.");
    }
  } else if (hikaye3 === "b") {
    console.log("Ağaç evi sadece dışarıdan izleyip yoluna devam ettin.");
  } else {
    hikaye3 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
  }

  let hikaye5 = prompt(
    "Ormanın derinliklerinde ilerlerken, karşına bir geyik çıktı. Ona yaklaşmak ister misin?\n a) Evet\n b) Hayır"
  );
  if (hikaye5 === "a") {
    console.log(
      "Geyik seni fark etti ve birkaç adım yaklaştı, göz göze geldiniz."
    );
  } else if (hikaye5 === "b") {
    console.log("Geyiği uzaktan izleyip yoluna devam ettin.");
  } else {
    hikaye5 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
  }
} else if (hikaye1 === "b") {
  let hikaye2 = prompt(
    "Soldaki orman yolunu seçtin. Bir süre ilerledikten sonra bir mağara fark ettin. İçeri girmek ister misin?\n a) Evet, gireyim\n b) Hayır, dışarıda kalayım"
  );

  if (hikaye2 === "a") {
    console.log("Mağaraya girdin ve içerde antik bir resim buldun.");
  } else if (hikaye2 === "b") {
    console.log("Mağaranın önünde durup bir süre ormanı dinledin.");
  } else {
    hikaye2 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
  }

  let hikaye3 = prompt(
    "Yürümeye devam ederken bir grup tavşan gördün. Onları takip etmek ister misin?\n a) Evet\n b) Hayır"
  );

  if (hikaye3 === "a") {
    console.log("Tavşanları takip ettin ve bir çiçek bahçesine ulaştın.");
  } else if (hikaye3 === "b") {
    console.log("Tavşanları izlemekle yetinip yoluna devam ettin.");
  } else {
    hikaye3 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
  }

  let hikaye4 = prompt(
    "Bir su kaynağı buldun. Burada kamp kurmak ister misin?\n a) Evet\n b) Hayır"
  );

  if (hikaye4 === "a") {
    console.log("Kamp kurup ateş yaktın, doğanın tadını çıkarıyorsun.");
  } else if (hikaye4 === "b") {
    console.log("Su kaynağında biraz dinlenip yoluna devam ettin.");
  } else {
    hikaye4 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
  }
}

let hikaye6 = prompt(
  "Güneş batarken, geri dönmeye karar verdin. Eve dönerken ne düşünüyorsun?\n a) Bugün harika geçti\n b) Yarın tekrar keşfe çıkmalıyım"
);

if (hikaye6 === "a") {
  console.log(
    "Eve mutlu bir şekilde dönüyorsun, doğanın sana sunduğu güzellikleri düşünüyorsun."
  );
} else if (hikaye6 === "b") {
  console.log("Yarın tekrar çıkacağın keşfi heyecanla planlıyorsun.");
} else {
  hikaye6 = prompt("Yanlış seçim yaptınız, lütfen doğru seçim yapınız.");
}
//   ------------------------------------------------------------------------------------------------------------------------------
