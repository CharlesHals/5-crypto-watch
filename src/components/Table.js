import React, { useState } from 'react';

const Table = ({ coinsData }) => {
    const [rangeNumber, setRangeNumber] = useState(100)
    const tableHeader = [
        "Prix",
        "MarketCap",
        "Volume",
        "1h",
        "1j",
        "1m",
        "6m",
        "1a",
        "ATH"]
    return (
        <div className="table-container">
            <div className="table-header">
                <div className="range-container">
                    <span>Top <input type="text" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)} /></span>
                    <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Table;