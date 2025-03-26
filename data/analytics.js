import PropTypes from 'prop-types';

export const AnalyticsItemPropTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    bmi: PropTypes.number.isRequired,
    bloodPressure: PropTypes.number.isRequired,
    bloodSugar: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

const calculateBMI = (height, weight) => {
    return (weight / ((height / 100) ** 2)).toFixed(1);
};

let data = [
    {
        name: 'Jan',
        height: 175.00.toFixed(2),
        weight: 109.00.toFixed(2),
        age: 25,
        bmi: calculateBMI(175, 109),
        bloodPressure: 144.00.toFixed(2),
        bloodSugar: 95.00.toFixed(2),
        date: '09/01/2025',
    },
    {
        name: 'Jan',
        height: 175.00.toFixed(2),
        weight: 110.00.toFixed(2),
        age: 25,
        bmi: calculateBMI(175, 110),
        bloodPressure: 144.00.toFixed(2),
        bloodSugar: 96.01.toFixed(2),
        date: '08/01/2025',
    },
    {
        name: 'Jan',
        height: 175.00.toFixed(2),
        weight: 108.00.toFixed(2),
        age: 25,
        bmi: calculateBMI(175, 108),
        bloodPressure: 144.00.toFixed(2),
        bloodSugar: 95.00.toFixed(2),
        date: '07/01/2025',
    },
    {
        name: 'Jan',
        height: 175.00.toFixed(2),
        weight: 107.00.toFixed(2),
        age: 25,
        bmi: calculateBMI(175, 107),
        bloodPressure: 144.00.toFixed(2),
        bloodSugar: 95.00.toFixed(2),
        date: '06/01/2025',
    },
    {
        name: 'Jan',
        height: 175.00.toFixed(2),
        weight: 106.00.toFixed(2),
        age: 25,
        bmi: calculateBMI(175, 106),
        bloodPressure: 144.00.toFixed(2),
        bloodSugar: 95.00.toFixed(2),
        date: '05/01/2025',
    },
    // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
];

export const addHealthData = (newEntry) => {
    data = [newEntry, ...data].slice(0, 5); // เก็บข้อมูลได้สูงสุด 5 รายการ
};

export const getHealthData = () => {
    return data;
};

export default data;