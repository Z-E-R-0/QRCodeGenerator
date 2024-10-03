document.addEventListener("DOMContentLoaded", function () {
    const qr = new QRious({
        element: document.getElementById('qrCanvas'),
        size: 250,
        value: 'Enter your text'
    });

    const qrText = document.getElementById('qrText');
    const qrColor = document.getElementById('qrColor');
    const bgColor = document.getElementById('bgColor');
    const qrSize = document.getElementById('qrSize');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    // Generate QR Code based on the inputs
    generateBtn.addEventListener('click', function () {
        qr.value = qrText.value || ' ';
        qr.foreground = qrColor.value;
        qr.background = bgColor.value;
        qr.size = parseInt(qrSize.value);
    });

    // Download QR Code
    downloadBtn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = document.getElementById('qrCanvas').toDataURL('image/png');
        link.click();
    });
});
