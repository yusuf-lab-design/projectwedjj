document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    const actionBtn = document.getElementById('actionBtn');
    
    // Cek cookie untuk melihat apakah pop-up sudah ditampilkan sebelumnya
    if (!getCookie('popupShown')) {
      // Tampilkan pop-up
      popup.style.display = 'flex';
    }
    
    // Fungsi untuk mengatur cookie
    function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days*24*60*60*1000));
      const expires = "expires="+ d.toUTCString();
      document.cookie = name + "=" + (value || "")  + ";" + expires + ";path=/";
    }
    
    // Fungsi untuk mendapatkan cookie
    function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    
    // Tutup pop-up dan set cookie
    function closePopup() {
      popup.style.display = 'none';
      setCookie('popupShown', 'true', 1); // Set cookie selama 1 hari
    }
  
    closeBtn.addEventListener('click', closePopup);
    actionBtn.addEventListener('click', closePopup);
  });

const displayElement =  document.getElementById('demo');
const query = window.location.search;
const urlParams = new URLSearchParams(query);
const untuk = urlParams.get('untuk');

displayElement.textContent = untuk;