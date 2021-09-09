import React, {ChangeEventHandler, useState} from "react";
import InputIcon from "../../molecules/input-icon";
import {LocationSuggestionItemType} from "../../../share/data-types";
import LocationSuggestionCard from "../../molecules/location-suggestion-card";

interface PropsType extends React.PropsWithChildren<any> {
    defaultAddress?: string,
    suggestionList?: LocationSuggestionItemType[]
}

const AddressSuggestionInput: React.FC<PropsType> = ({defaultAddress = "", suggestionList = []}) => {
    const [address, setAddress] = useState(defaultAddress);
    const [locationSelected, setLocationSelected] = useState<LocationSuggestionItemType | null>(null)

    const _onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setAddress(event.currentTarget.value)
    }

    const _onCancelClickHandler = () => {
        setAddress("");
    }

    const _setLocationSelected = (data: LocationSuggestionItemType | null) => {
        setLocationSelected(data)
    }

    return (
        <>
            <InputIcon
                placeholder="số nhà, căn hộ, đường, phường..."
                onChange={_onChangeHandler}
                value={address}
                onClearText={_onCancelClickHandler}
            />

            {/* render suggestion list */}
            <div className="d-block pt-3">
                {
                    suggestionList ? suggestionList.map((item, index) => {
                        return (
                            <div className="pb-3" key={index}>
                                <LocationSuggestionCard
                                    selected={locationSelected}
                                    data={item}
                                    onClick={_setLocationSelected}
                                />
                            </div>
                        );
                    }) : null}
            </div>
        </>
    )
}

export default AddressSuggestionInput
