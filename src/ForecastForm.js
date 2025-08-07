import React, { useState } from 'react';
import { API } from './api';

export default function ForecastForm({ onForecast }) {
  const [productId, setProductId] = useState('');
  const [periods, setPeriods] = useState(30);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/forecast', { product_id: productId, periods });
    onForecast(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <input type="number" value={periods} onChange={(e) => setPeriods(e.target.value)} />
      <button type="submit">Forecast</button>
    </form>
  );
}
