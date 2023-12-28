export const getTextBorder = (borders) => {
  const border = borders?.[0];
  if (border && border.enable) {
    return {
      stroke: border.color,
      strokeWidth: border.thickness
    }
  }
  return {};
}

export const getTextShadow = (shadows) => {
  const shadow = shadows?.[0];
  if (shadow && shadow.enable[0]) {
    return {
      color: shadow.color,
      offsetX: shadow.x,
      offsetY: shadow.y,
      blur: shadow.blur
    }
  }
  return null;
}

export const handleTextLayer = () => {

}

export const handleImagelayer = () => {

}

export const handleGroupLayer = () => {
  
}