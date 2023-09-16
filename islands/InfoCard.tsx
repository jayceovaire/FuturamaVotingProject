
interface InfoCardProps {
    hoverState: number
    imageState: string
}

export default function InfoCard(props: InfoCardProps) {

    const {hoverState, imageState} = props

    return (
        <div className={'border border-4 border-black sticky top-0 rounded-md'}>
            <img src={imageState} alt={""} className={''} />
            <div>Episode #{hoverState}</div>
            <p>Card Description</p>
        </div>
    )
}