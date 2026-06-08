
// function downloadVCard() {
//   const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:Zein abdallah
// TITLE:Sales Manager
// ORG:Diplomat Properties
// TEL;TYPE=WORK,VOICE:+971503250084
// TEL;TYPE=WORK,VOICE:+97145665109
// EMAIL:Zeinabdallah08@gmail.com
// URL:http://www.riseproperties.ae
// ADR;TYPE=WORK:;;PO Box No 455979, Office NO.807, Opal Tower, Business Bay;Dubai;;UAE
// END:VCARD
//   `.trim();

//   const blob = new Blob([vCardData], { type: 'text/vcard' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'Zein abdallah.vcf';
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
// }

// // Attach to button
// document.querySelector('.action-button[onclick*="download-vcard"]').addEventListener('click', function (e) {
//   e.preventDefault();
//   downloadVCard();
// });


function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Zein Abdallah
TITLE:Sales Manager
ORG:Diplomat Properties
TEL;TYPE=WORK,VOICE:+971503250084
EMAIL:Zeinabdallah08@gmail.com
URL:http://www.dpdxb.com
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.807, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Zein Abdallah.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});
