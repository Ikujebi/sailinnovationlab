import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { PacmanLoader } from 'react-spinners';

const QRCodeScanner: React.FC = () => {
    const [scannedText, setScannedText] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleVerification = () => {
        // Perform verification logic here
        // For demonstration, let's assume verification is successful after clicking the button
        setIsVerified(true);
    };

    const handleScanResult = (text: string, _result: any) => {
        setScannedText(text);
        setIsScanning(false);
        // You can perform additional actions based on the scanned text here
    };

    const handleError = (error: any) => {
        console.error(error);
        setError(error.message);
        setIsScanning(false);
        // Handle error
    };

    /*  const handleScanStart = () => {
       setIsScanning(true);
     }; */

    return (
        <div>
            {isVerified ? (
                <p>QR Code is verified!</p>
            ) : (
                <div className='mx-auto w-[40%] mt-[20%]'>
                    <Scanner

                        onError={handleError}
                        onResult={handleScanResult}

                    />

                    {isScanning && (
                        <div style={{ textAlign: 'center' }}>
                            <PacmanLoader color={'#36D7B7'} size={25} />
                            <p>Scanning...</p>
                        </div>
                    )}
                    {error && <p>Error: {error}</p>}
                    {scannedText && <p>Scanned Text: {scannedText}</p>}
                </div>
            )}
            <div className=' flex justify-center mt-10 text-blue-400 '>
                <button className='shadow w-[40%] p-2 rounded-xl' onClick={handleVerification}>Verify QR Code</button>
            </div>
        </div>
    );
};

export default QRCodeScanner;
