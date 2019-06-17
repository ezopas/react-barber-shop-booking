## Projekto paleidimas (vatotojo vadovas žemiau)

### `npm install`
### `npm start`

Pasirinkti vasario paskutinę savaitę, kad matyti įrašus.

Nors suprantu PHP ir OOP, galėjau rinktis man lengvesnį pirmą variantą, Šią (antrą) užduotį pasirinkau todėl, nes ji man sunkesnė ir galėjau ją atlikti su kitomis technologijomis negu pratęs darbuotis (nesenai pradėjau plačiau domėtis JS technologjijomis).
Pradžioje planavau kurti savo logiką šiam projektui ir jeigu reiks panaudoti axios ar redux, nes norėjau pasirodyti, kad gebu kažkiek savo logika daryti nevien pavyzdžiais, tačiau tas užėmė per daug laiko ir pradėjau darbuotis su kalendoriaus package'u, tikiuosi už tai stirpriai nebausite.

Noriu stipriai patobūlėti, todėl rinkausi šį variantą.

- Dizainui naudojau SASS'ą. Jis perkompiliuojamas per node-sass vendorių.
- Laikas kas 15min suskirstytas.
- Responsive dizainas
- Temizuotos dalys
- Rėžiai 10-20, darbo dienos.
- JSON duomenų importas, per 50 įrašų. vasario paskutinė savaitė
- Bendra UI stilistika
- Projektas suskirstitas į dalis: komponentai, konteineriai...
- Modifikuota pagal poreikius tema
- SPA puslapis veikia be puslapio refresh, visi įvykiai tame pačiame sąraše(kalendoriuje).
- Galimos peržiūros: sąrašas, savaitės vaizdas, dienos vaizdas.
- Specializuotas puslapis klientams ir kirpėjoms
- Klientas gali matyti laikus, tik vieną kartą įvesti savo rezervacija, po to ją ištrinti jei nori.
- Kirpėja gali keisti rezervazijų laikus, trinti, pridėti, mato klientų vardus.


Logika sudėta container index.js failuose, nenorėjau hardkodinti bet ėjosi kaip ėjosi, reikia daugiau patirties (tikiuosi jeigu priimsite jos daugiau įgyti). Norėjau atlikus pakeitimus su rezervacijomis siųsti POST metodu, bet reikėjo tam šiek tiek pasižaisti su backend dalimi. 

Puslapiai:
- "/" Klientmas. Reikia scroolinti žemyn arba paspauti mygtuką "book now", kuris gražiai(pasistengiau) nuscroolins žemyn.
- "/barber/" kirpėjoms

Turėtų veikti ant: [http://localhost:3000](http://localhost:3000) .

*Kas blogai veikia, nepabaigta:
-Kartais klientų listas nėra korektiškai atvaizduojamas, reikia pakeisti dieną/savaitę, tada gryžus kalendoriuje rodo.
Nežinau kodėl taip yra patebėjau gana vėlai, kai projektą po savaitgalio perkėliau į kitą kompiuterį. Norėčiau sutvarkyti, tačiau nebeturiu laiko... :(
![screenshot](https://i.imgur.com/ctDms29.png)

## Vartotojo vadovas
Klientas:
1. Klientas nueina iki kalendoriaus (tai gali padaryti paspaudęs 'book now' arba nuslinkęs žemyn)
2. Klientas turi nuspręsti kokią dieną jis nori rezervuotis ir ją pairinkti
3. Klientas matydamas tos dienos laisvą laiką spaudžia ant laisvo ploto
4. Klientas užpildo savo vardą ir pavardę
5. Jeigu klientas suklydo arba persigalvojo, gali įrašą ištrinti ir rezervuotis iš naujo.*

Kirpėja
1. Kirpėja nueina į jai skirtą puslapį (/barber)
2. Pasirenka jai aktualias datas peržiūrai:savaitė, diena, sąrašas. (Šiuo atvėju vasario paskutinė savaitė)
3. Jeigu nori ištrinti įrašą spaudžia X. Jei nori įterpti spaudžia ant laisvo ploto ir įveda kliento duomenis. Jei nori pakeisti laiką perkelia rezervaciją į kitą laukelį.
