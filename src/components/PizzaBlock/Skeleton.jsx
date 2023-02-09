import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="108" cy="102" r="102" />
    <rect x="10" y="224" rx="10" ry="10" width="200" height="30" />
    <rect x="11" y="269" rx="10" ry="10" width="202" height="55" />
    <rect x="19" y="344" rx="10" ry="10" width="64" height="34" />
    <rect x="109" y="341" rx="10" ry="10" width="101" height="42" />
  </ContentLoader>
)

export default Skeleton