import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeTabSvg = (props) => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} 
  >
    <Path
      d="M8.976 0a.739.739 0 0 0-.44.166L1.43 5.908A3.885 3.885 0 0 0 0 8.928v9.79C0 19.418.568 20 1.25 20h5c.682 0 1.25-.583 1.25-1.282V13.59c0-.151.102-.256.25-.256h2.5c.148 0 .25.105.25.256v5.128c0 .7.568 1.282 1.25 1.282h5c.682 0 1.25-.583 1.25-1.282v-9.79a3.885 3.885 0 0 0-1.43-3.02L9.464.166A.738.738 0 0 0 8.976 0ZM9 1.75l6.643 5.367c.542.438.857 1.104.857 1.811v9.534H12V13.59c0-.982-.793-1.795-1.75-1.795h-2.5c-.957 0-1.75.813-1.75 1.795v4.872H1.5V8.928c0-.707.315-1.373.857-1.811L9 1.749Z"
      fill="#5F6368"
    />
  </Svg>
)

export default HomeTabSvg