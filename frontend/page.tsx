// frontend/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

export default function Wallet() {
  const [wallet, setWallet] = useState<any>(null);

  useEffect(() => {
    fetch('/api/wallet', {
      headers: { Authorization: `Bearer TOKEN` },
    })
      .then(res => res.json())
      .then(data => setWallet(data));
  }, []);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Wallet</h1>
      {wallet ? (
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
          <p>User: {wallet.user}</p>
          <p>Balance: {wallet.balance} {wallet.currency}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
