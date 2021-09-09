import React from "react";
import styles from "./locationSuggestionCard.module.scss";
import {LocationSuggestionItemType} from "../../../share/data-types";

export interface SuggestionProps extends React.PropsWithChildren<any> {
    data: LocationSuggestionItemType,
    selected?: LocationSuggestionItemType | null,
    onClick: (data: LocationSuggestionItemType) => void
}

const LocationSuggestionCard: React.FC<SuggestionProps> = ({data, selected, onClick}) => {
    const {title, address} = data
    const isSelected = data && selected && data === selected

    const _onClickHandler = () => {
        onClick(data)
    }

    return (
        <div
            className={isSelected ? `${styles.selected} ${styles.list_card} shadow-sm d-block` : `${styles.list_card} shadow-sm d-block`}
            onClick={_onClickHandler}>
            <div className={`${styles.name} mb-1`}>{title}</div>
            <div className={`${styles.address}`}>{address.label}</div>
        </div>
    );
}

export default LocationSuggestionCard;
