let burger = document.querySelector('.burger');
let nav = document.querySelector(".nav");
burger.addEventListener('click', function(){
  if(window.innerWidth < 701){
    this.classList.toggle('active');
    nav.classList.toggle('open');
  }
});
sort = document.querySelector('.sort')
// if(window.innerWidth < 701){
//   sort.style.display = 'none'
// }
mmain = document.querySelector('.mmain')
if(mmain && window.innerWidth < 701){
  div = document.createElement('div')
  div.id = 'newid'
  div.textContent = 'Div'
  div.appendChild(sort)
}
else {
  console.log('No')
}
let gods = [
  '30с41нж Ру16', '30с941нж Ру16 под электропривод', 
  '30с64нж Ру25', '30с15нж Ру40', '30ч6бр Ру16 и Ру10',
  '30ч906бр под эл.привод', 'МЗВ или еще аналог 30ч39р Ру10 и Ру16 — с обрезиненным клином (обрезинка в народе)',
  'Задвижки шиберные (ножевые)', 'Задвижки на трубу - разные', 
  'Затворы - разные(Баттерфляй, бабочка и т. д.)', 
  'Клапаны (вентили) фланцевые — стальные и чугунные, запорные и обратные',
  'Фильтры чугунные фланцевые — сетчатые и магнитные',
  'Отводы', 'Тройники', 'Переходы', 'Фланцы', 
  'Краны стальные - фланец', 'Краны стальные - приварка', 
  'Краны стальные - муфта', 'краны латунные — разные, все'
];

for (let i = 1; i <= 20; i++) {
    let button = document.getElementById('btn' + i);
    button.addEventListener('click', () => {
        let str = gods[i - 1];
        let newWindow = window.open('cont.html', '_blank');
        newWindow.onload = () => {
            let block = newWindow.document.getElementById('block');
            if (block) {
                block.textContent = "Хочу взять - " + str;
            } else {
                console.error('Элемент с id="block" не найден в cont.html');
            }
        };
    });
}