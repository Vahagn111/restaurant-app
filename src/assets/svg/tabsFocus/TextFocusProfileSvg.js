import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const TextFocusProfileSvg = (props) => (
  <Svg
    width={43}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.264.89V8h-.937V1.662H1.82V8H.879V.89h5.385ZM8.74 3.733v6.3h-.908V2.716h.83l.078 1.015Zm3.56 1.582v.103c0 .384-.046.74-.137 1.07a2.628 2.628 0 0 1-.4.849c-.173.24-.386.428-.64.561a1.85 1.85 0 0 1-.874.2 2.23 2.23 0 0 1-.889-.165 1.753 1.753 0 0 1-.654-.484 2.47 2.47 0 0 1-.43-.761 4.408 4.408 0 0 1-.215-1.001v-.547c.04-.391.112-.74.22-1.05.107-.31.249-.573.425-.791.179-.222.395-.39.65-.503.253-.117.546-.176.878-.176.332 0 .627.065.884.195.257.127.473.31.65.547.175.238.307.523.395.855.09.329.136.695.136 1.098Zm-.909.103v-.103c0-.263-.027-.51-.083-.742a1.874 1.874 0 0 0-.259-.615 1.233 1.233 0 0 0-.439-.42 1.25 1.25 0 0 0-.64-.156c-.228 0-.426.039-.595.117a1.288 1.288 0 0 0-.425.317c-.117.13-.213.28-.288.45a2.581 2.581 0 0 0-.161.517v1.265c.065.228.156.443.273.644.117.199.273.36.469.484.195.12.44.18.737.18.244 0 .454-.05.63-.15.179-.105.325-.247.44-.426.117-.179.203-.384.258-.615a3.24 3.24 0 0 0 .083-.747Zm1.822 0v-.112c0-.381.055-.734.166-1.06.11-.329.27-.613.478-.854.208-.245.46-.433.757-.567a2.35 2.35 0 0 1 .996-.205c.371 0 .705.068 1.001.205.3.134.553.322.762.567.211.24.372.525.483.854.11.326.166.679.166 1.06v.112c0 .38-.055.734-.166 1.06-.11.325-.272.61-.483.854-.209.24-.46.43-.757.566-.293.134-.625.2-.996.2a2.41 2.41 0 0 1-1.001-.2 2.264 2.264 0 0 1-.762-.566 2.58 2.58 0 0 1-.478-.854 3.274 3.274 0 0 1-.166-1.06Zm.903-.112v.112c0 .264.03.513.093.747.062.231.154.436.278.615.127.18.285.32.474.425.188.101.408.151.659.151.247 0 .464-.05.65-.15.188-.105.344-.247.468-.426.124-.179.216-.384.278-.615a2.78 2.78 0 0 0 .098-.747v-.112c0-.26-.033-.506-.098-.738a1.897 1.897 0 0 0-.283-.62 1.346 1.346 0 0 0-.469-.43 1.315 1.315 0 0 0-.654-.156c-.247 0-.465.052-.654.157a1.405 1.405 0 0 0-.47.43 1.962 1.962 0 0 0-.277.62 2.844 2.844 0 0 0-.093.737Zm11.113.146v.103c0 .37-.04.713-.122 1.025a2.44 2.44 0 0 1-.366.806c-.16.228-.358.405-.596.532a1.762 1.762 0 0 1-.825.186c-.257 0-.483-.035-.679-.103a1.384 1.384 0 0 1-.498-.308 1.547 1.547 0 0 1-.322-.478 2.45 2.45 0 0 1-.161-.635V4.235c.03-.25.083-.475.16-.673.082-.199.19-.368.323-.508a1.38 1.38 0 0 1 .493-.323 1.85 1.85 0 0 1 .674-.112c.254 0 .482.046.684.137.205.088.384.215.537.38.156.167.285.367.386.601.104.231.182.492.234.782.052.29.078.6.078.932Zm-.903.103V5.45c0-.228-.017-.444-.049-.65a2.668 2.668 0 0 0-.142-.57 1.623 1.623 0 0 0-.244-.46 1.047 1.047 0 0 0-.85-.41c-.195 0-.357.025-.488.074a.76.76 0 0 0-.454.444V6.94c.04.072.096.14.171.206a.94.94 0 0 0 .303.156c.127.039.286.058.478.058.228 0 .422-.045.581-.136a1.11 1.11 0 0 0 .396-.391c.104-.166.179-.358.225-.576.048-.218.073-.453.073-.703Zm-5.371 0V5.45c0-.332.026-.643.078-.932.052-.29.13-.55.234-.782a2.19 2.19 0 0 1 .386-.6 1.62 1.62 0 0 1 1.226-.518c.25 0 .468.038.654.112.189.075.348.183.478.323s.235.309.313.508c.078.198.133.423.166.673v2.251c-.03.248-.083.47-.161.67-.078.198-.183.369-.313.512-.13.14-.291.247-.483.322-.189.075-.41.113-.664.113-.313 0-.588-.062-.825-.186a1.738 1.738 0 0 1-.601-.532 2.579 2.579 0 0 1-.366-.806 4.062 4.062 0 0 1-.122-1.025Zm.908-.103v.103c0 .25.021.485.063.703.046.218.116.41.21.576.098.166.225.296.381.39.157.092.349.137.576.137.196 0 .357-.024.484-.073a.82.82 0 0 0 .473-.434V3.879a.724.724 0 0 0-.16-.25.743.743 0 0 0-.299-.194 1.378 1.378 0 0 0-.488-.074.994.994 0 0 0-.58.166c-.16.111-.289.262-.387.454a2.524 2.524 0 0 0-.21.67c-.042.25-.063.517-.063.8Zm1.738 4.58V.5h.908v9.531h-.908Zm5.786-3.462 2.437-3.852h.908V8h-.908V4.147L27.387 8h-.898V2.717h.898v3.852Zm8.325-3.852v.747H33.16v-.747h2.553Zm.796 0V8h-.903V2.717h.903Zm-3.569 0h.908l-.136 2.549c-.023.394-.06.742-.113 1.045-.049.299-.117.556-.205.771a1.61 1.61 0 0 1-.322.527 1.18 1.18 0 0 1-.46.298 1.897 1.897 0 0 1-.62.093h-.282v-.796l.195-.015a.834.834 0 0 0 .356-.097.7.7 0 0 0 .254-.244c.069-.111.124-.253.166-.425.046-.173.08-.378.103-.615.026-.238.045-.515.058-.83l.098-2.261Zm5.767 1.816h1.587c.426 0 .786.075 1.079.225.293.146.514.35.664.61.153.257.23.55.23.88 0 .243-.043.473-.128.688a1.546 1.546 0 0 1-.38.556c-.167.16-.373.285-.62.376a2.488 2.488 0 0 1-.845.132h-2.246V2.717h.903v4.54h1.343c.26 0 .468-.046.625-.14a.826.826 0 0 0 .337-.367 1.116 1.116 0 0 0 0-.938.876.876 0 0 0-.337-.38c-.157-.105-.365-.157-.625-.157h-1.587v-.742Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.009}
        y1={5}
        x2={43.009}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#648E00" />
        <Stop offset={1} stopColor="#005100" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default TextFocusProfileSvg