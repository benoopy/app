function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  
  function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    document.getElementById('cookieConsent').style.display = 'none';
    loadFacebookPixel();
  }
  
  function rejectCookies() {
    setCookie('cookieConsent', 'rejected', 365);
    document.getElementById('cookieConsent').style.display = 'none';
  }
  
  function loadFacebookPixel() {
    if (getCookie('cookieConsent') !== 'accepted') return;
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.getElementById('facebookPixel').appendChild(script);
  
    script.onload = function() {
        fbq('init', '613901937331653');
        fbq('track', 'PageView');
    };
  }
  
  window.onload = function() {
    const cookieConsent = getCookie('cookieConsent');
    if (!cookieConsent) {
      document.getElementById('cookieConsent').style.display = 'block';
    } else if (cookieConsent === 'accepted') {
      loadFacebookPixel();
    }
  };