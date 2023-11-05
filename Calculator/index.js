// Ekranı seçme
const screen = document.querySelector('.screen');

// Butonları seçme
const buttons = document.querySelectorAll('.calc-button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent.trim();

        switch (buttonText) {
            case '←':
               
                screen.textContent = screen.textContent.slice(0, -1);
                break;
            case '÷':
                
                screen.textContent += '/';
                break;
            case '×':
                
                screen.textContent += '*';
                break;
            case '−':
                
                screen.textContent += '-';
                break;
            case 'C':
               
                screen.textContent = '';
                break;
            case '=':
                
                try {
                    screen.textContent = eval(screen.textContent);
                } catch (error) {
                    screen.textContent = 'Hata!';
                }
                break;
            default:
                // Diğer durumlar için (sayılar ve toplama işlemleri)
                screen.textContent += buttonText;
        }
    });
});

 

