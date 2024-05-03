//Создание переменных 
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const totalChars = document.getElementById('totalSimvols');
    const vowelChars = document.getElementById('vowelword');
    const defaultValue = 'Введите слово';
//Функция при помощи которой пропадает слово(запрос) в input при вводе слова     
    textInput.addEventListener('focus', function() {
        if (this.value === defaultValue) {
          this.value = '';
          this.className = '';
        }
      });

    textInput.value = defaultValue;
//Функция определеющая длинну слова 
    textInput.addEventListener('input', function() {
      const inputText = this.value;
      const totalLength = inputText.length;
      const vowelsCount = (inputText.match(/[аеёиоуыэюя]/gi) || []).length;
      const isVowelsEven = vowelsCount % 2 === 0;

      totalChars.textContent = `Всего символов: ${totalLength}`;
      vowelChars.textContent = `Гласных букв: ${vowelsCount}`;
      if (isVowelsEven) {
        totalChars.className = 'even';
        vowelChars.className = 'even';
      } else {
        totalChars.className = 'odd';
        vowelChars.className = 'odd';
      }
    });
});
