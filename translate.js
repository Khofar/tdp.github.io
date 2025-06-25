 function googleTranslateElementInit() {
   new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
 }
 
 // Dropdown language switch
 document.getElementById('languageSelect').addEventListener('change', function() {
   const lang = this.value;
   const currentUrl = window.location.origin + window.location.pathname;
   const newUrl = currentUrl + '#googtrans(en|' + lang + ')';
   window.location.href = newUrl;
   setTimeout(() => {
     window.location.reload();
   }, 100);
 });
 
 // Load Google Translate script
 (function() {
   const gtScript = document.createElement('script');
   gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
   document.body.appendChild(gtScript);
 })();