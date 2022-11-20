import { RotatingSquare } from "react-loader-spinner"

export const TextWrapper = ({props}) => {
    if (props.isLoading) return <RotatingSquare
        height="100"
        width="100"
        color="#fff"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        visible={true}
    />

    return (
        <div>{props.content[props.type]?.fields?.copy}</div>
    )
}