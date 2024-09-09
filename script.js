const generateQrCode = () => {
    const qrInput = document.getElementById('qrInput').value;
    const qrImage = document.getElementById('qrImage');

    if(qrInput){
        qrImage.innerHTML = `
        <img src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}' class="mt-5 p-5 mx-auto shadow-xl shadow-gray-500 rounded-xl">
        `;

        document.getElementById('qrInput').value = '';
    }

    else{
        qrImage.innerHTML = `<h1 class=' mt-3 text-white'>Please Enter text or url</h1>`
    }

    
}