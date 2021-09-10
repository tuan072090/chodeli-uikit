
export type ErrorProps = {
    error?: {
        type: "required" | "minLength" | "maxLength" | "min" | "max",
        message: string
    }
}
