const tableStyles = {
  dotsToCutNote: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  lineHeight: '22px',
  paddingRight: '30px'
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
  }
}
  export default tableStyles;