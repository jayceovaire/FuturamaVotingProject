
interface InfoCardProps {
    hoverState: number
}

export default function InfoCard(props: InfoCardProps) {

    const {hoverState} = props

    return (
        <div className={'border border-8 border-black sticky top-0'}>
            <img src={""} alt={""} />
            <p>Card Description</p>
        </div>
    )
}