import './Cart.css';
import { CartBar } from './CartBar';
export const Cart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            { props.dataPoints.map((dataPoint) => (
                <CartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}