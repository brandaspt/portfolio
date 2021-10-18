import "./WheelItem.css"

interface IWheelItemProps {
  theta: number
  radius: number
  url: string
}

const WheelItem = ({ theta, radius, url }: IWheelItemProps) => {
  const thetaRad = (theta * Math.PI) / 180
  const styles = {
    top: `calc(50% - ${Math.sin(thetaRad) * radius}px)`,
    left: `calc(50% + ${Math.cos(thetaRad) * radius}px)`,
  }

  return (
    <div className="WheelItem" style={styles}>
      <img src={url} alt="technology logo" />
    </div>
  )
}

export default WheelItem
