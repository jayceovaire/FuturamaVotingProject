
interface InfoCardProps {
    setHoverState: (state: number) => void;
}

export default function InfoCard(props: InfoCardProps) {

    const {setHoverState} = props

    return (
        <>
            <img src={""} alt={""} />
            <p>Card Description</p>
            <div>{props.setHoverState}</div>
        </>
    )
}