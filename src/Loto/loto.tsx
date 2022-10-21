import React from 'react';

interface LotoProps {
    getNumber: number;
}

const Loto: React.FC<LotoProps> = props => {
    return (
        <div className="numbers">
            <p className="number">{props.getNumber}</p>
        </div>
    );
};

export default Loto;