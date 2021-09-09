import React, { ChangeEventHandler } from "react";

//  text input
export type StatusType =
    | "primary"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "default";

export type MessageType = {
    status: StatusType,
    title: string,
    body?: string
}

export type InputType = "text" | "number" | "tel" | "email" | "password";

export type SizeType = "small" | "medium" | "large";
export type colorIcon =
    | "primary"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "default";


export interface TextInputProps extends React.PropsWithChildren<any> {
    status?: StatusType;
    type?: InputType;
    value?: string;
    placeholder?: string;
    size?: SizeType,
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface ButtonProps extends React.PropsWithChildren<any> {
    text: string;
    status?: StatusType;
    outline?: boolean;
    disable?: boolean;
    size?: SizeType
}


export interface IconProps extends React.PropsWithChildren<any> {
    fontSize?: SizeType;
    color?: colorIcon;
}

export type { ProductType, ProductCardProps, ProductListProps } from "./product";

export type { UserType, CoordinatesType, UserLocationType, LeaderType, GroupType, LocationSuggestionItemType, ProfileType } from './user';

export type HeaderType = {
    title: string
}
export interface PageProps extends React.PropsWithChildren<any>{
    header?: HeaderType,
    params?:any,
    query?:any
}
