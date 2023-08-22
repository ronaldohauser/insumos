function rotateClockHands() {
    const now = new Date();
    const seconds = now.getSeconds() * 6;
    const minutes = now.getMinutes() * 6 + seconds / 60;
    const hours = (now.getHours() % 12) * 30 + minutes / 12;
  
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hours}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutes}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${seconds}deg)`;
  
    const timeDisplay = document.querySelector('.time-display');
    const hoursDisplay = document.querySelector('.hours');
    const minutesDisplay = document.querySelector('.minutes');
    hoursDisplay.textContent = padZero(now.getHours());
    minutesDisplay.textContent = padZero(now.getMinutes());
  }
  
  function padZero(value) {
    return value.toString().padStart(2, '0');
  }
  
  // Atualiza as mãos do relógio e o horário a cada segundo
  setInterval(rotateClockHands, 1000);
  
  // Chama a função uma vez para iniciar o relógio imediatamente
  rotateClockHands();
  