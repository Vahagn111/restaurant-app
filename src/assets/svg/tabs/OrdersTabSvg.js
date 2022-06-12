import * as React from "react"
import Svg, { Path } from "react-native-svg"

const OrdersTabSvg = (props) => (
  <Svg
    width={27}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 18.191c.169-.4.278-.845.524-1.187.224-.312.584-.527.906-.752.128-.089.182-.159.183-.317.024-2.471.715-4.726 2.108-6.733 1.363-1.962 3.154-3.348 5.36-4.147.26-.095.525-.177.79-.254.257-.075.518-.133.798-.204-.45-1.302-.202-2.412.932-3.179.865-.584 1.804-.553 2.637.076 1.037.782 1.257 1.856.821 3.092.402.113.8.208 1.19.337 3.348 1.114 5.692 3.37 7.05 6.717.547 1.347.802 2.766.814 4.228 0 .2.04.316.24.41.99.46 1.511 1.548 1.324 2.708-.161 1.001-1.034 1.848-2.04 1.976-.157.02-.317.037-.475.037H3.568c-1.057 0-1.858-.453-2.33-1.449-.115-.244-.16-.524-.237-.787L1 18.191Zm22.534-2.194c-.158-3.73-1.635-6.688-4.757-8.56-3.545-2.125-7.128-1.952-10.498.446-2.705 1.924-3.97 4.72-4.079 8.114h19.334Zm-9.698 3.338h10.248c.1 0 .201.004.301-.006a.823.823 0 0 0 .728-.74.815.815 0 0 0-.567-.873 1.411 1.411 0 0 0-.396-.044H3.579c-.076 0-.151-.003-.226.004a.824.824 0 0 0-.744.832c.003.433.328.79.753.824.092.007.184.004.276.004h10.198Zm.83-15.807c.003-.45-.354-.83-.788-.836-.445-.008-.82.373-.817.834.003.45.365.824.8.824.436.001.8-.372.804-.822Z"
      fill="#5F6368"
      stroke="#202124" 
      strokeWidth={0.3}
    />
    <Path
      d="M14.267 7.686c1.821.127 3.433.786 4.822 2.011.235.208.453.438.67.665.366.382.39.878.063 1.223-.337.358-.803.328-1.204-.05-.382-.361-.759-.736-1.18-1.042C16.412 9.748 15.25 9.397 14 9.35a1.474 1.474 0 0 1-.37-.048.814.814 0 0 1-.567-.873.818.818 0 0 1 .75-.742c.151-.01.302-.002.453-.002Z"
      fill="#5F6368"
      stroke="#202124"
      strokeWidth={0.3}
    />
  </Svg>
)

export default OrdersTabSvg