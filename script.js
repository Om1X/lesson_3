var regexp, str;

// Поиск HTML - цвета
str = "good-colors: #999; #223344; #CC22da; #fff bad-colors:f#fddee #fd2 #123";
regexp = /#([a-f0-9]{6}|a{3}|b{3}|c{3}|d{3}|e{3}|f{3}|0{3}|1{3}|2{3}|3{3}|4{3}|5{3}|6{3}|7{3}|8{3}|9{3})/gi;
console.log(str.match(regexp));

// Поиск положительного числа в т.ч. и с десятичной точкой
str = '0.5 1.5 0 12. 123.4.';
regexp = /\d+\.\d+|[1-9]+/g;
console.log(str.match(regexp));

// Поиск времени с разделителями ":" и "-"
str = 'Завтрак: 09:00, Отбой: 21-30';
regexp = /\d\d:\d\d|\d\d\-\d\d/g;
console.log(str.match(regexp));