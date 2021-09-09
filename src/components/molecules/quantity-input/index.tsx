import React, { memo } from "react";
import { Minus, Plus } from "react-feather";
import styles from "./quantityInput.module.scss";
import Colors from "../../../share/utils/colors";

type QuantityProps = {
    quantity: number,
    onChange: (quantity: number) => void
}
const QuantityInput: React.FC<QuantityProps> = ({ quantity, onChange }) => {

    const _handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const value = Math.max(0, parseInt(event.currentTarget.value))
        onChange(value)
    }

    return (
        <div className={styles.wrap}>
            <button onClick={() => onChange(quantity - 1)} className="btn">
                <span><Minus size='14' color={Colors.primary} /></span>
            </button>
            <input
                onChange={_handleInput}
                type="text"
                value={quantity}
                disabled={true}
                className={styles.input}
            />
            <button onClick={() => onChange(quantity + 1)} className="btn">
                <span><Plus size='14' color={Colors.primary} /></span>
            </button>
        </div>
    );
};

export default memo(QuantityInput);
