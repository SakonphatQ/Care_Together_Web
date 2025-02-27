import PropTypes from 'prop-types';

export const AnalyticsItemPropTypes = {
    name: PropTypes.string.isRequired,
    hight: PropTypes.number.isRequired,
    wight: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    BMI: PropTypes.number.isRequired,
    BloodPre: PropTypes.number.isRequired,
    sugar: PropTypes.number.isRequired,
};

const calculateBMI = (height, weight) => {
    return (weight / ((height / 100) ** 2)).toFixed(1);
};

const data = [
    {
        name: 'Jan',
        hight: 175,
        wight: 100,
        age: 25,
        BMI: calculateBMI(175, 100),
        BloodPre: 144,
        sugar: 95,
    },
    // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
];

export default data;