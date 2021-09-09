import React from "react";
import {Star} from "react-feather";
import Image from "../../atoms/image";
import styles from "./leaderCard.module.scss";
import {LeaderType} from "../../../share/data-types";
import Button from "../../atoms/button";

type LeaderCardType = {
    leader: LeaderType,
    callback?: (leader: LeaderType) => void
    distance?: number
};

const LeaderCard: React.FC<LeaderCardType> = ({leader, callback, distance = 0}) => {
    const {profile} = leader;

    const _onClick = () => {
        if (callback) callback(leader)
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.avatarWrapper}>
                <Image src={profile.avatar} className={styles.avatar}/>
            </div>
            <div className={styles.info}>
                <p className={styles.leaderName + " mb-2"}>{profile.fullName}</p>

                <p className={styles.detail + " mb-2"}>
                    <span className={styles.distance}>{distance + " km"}</span>|
                    <span className={styles.rate}>
                        {"4.5 "}
                        <span>
                           <Star size={24} color="yellow"/>
                        </span>{" "}
                    </span>
                    |<span className={styles.members}>{33} members</span>
                </p>
                <p className={styles.address + " mb-2"}>Address detail here</p>
                <Button
                    text="Chọn"
                    type="button"
                    size="small"
                    status="primary"
                    className="btn-sm"
                    onClick={_onClick}/>
            </div>
        </div>
    );
};

export default LeaderCard;
