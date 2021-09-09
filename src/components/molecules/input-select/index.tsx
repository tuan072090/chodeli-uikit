import React from "react";
import styles from "./inputSelect.module.scss";

type InputSelectProps = {
    data: string[] | number[];
};

const InputSelect: React.FC<InputSelectProps> = ({data}) => {
    return (
        <select className={`form-select my-2 ${styles.wrapper}`}>
            {data.map((e, i) =>
                i === 0 ? (
                    <option key={i} value={e} selected>
                        {e}
                    </option>
                ) : (
                    <option key={i} value={e}>
                        {e}
                    </option>
                )
            )}
        </select>
    );
};

export default InputSelect;
