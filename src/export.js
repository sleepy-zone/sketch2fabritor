import SketchDom from 'sketch/dom';
import UI from 'sketch/ui';
// documentation: https://developer.sketchapp.com/reference/api/

const getGroupItems = (layers) => {
  const items = [];
  for (let layer of layers) {
    if (layer.hidden) continue;

    let layerConfig;
    switch (layer.type) {
      case 'Text':
        break;
      case 'Image':
        break;
      case 'Group':
        break;
    }
  
    if (layerConfig) {
      items.push(layerConfig);
    }
  }

  return items;
}

const handleTemplateJson = (layer) => {
  const { frame } = layer;
  const { width, height } = frame;
  const json = {
    width,
    height,
    desc: layer.name || '',
    items: getGroupItems(layer.layers)
  }
  return json;
}

export default function () {
  const document = SketchDom.getSelectedDocument();
  const { layers, length, isEmpty } = document.selectedLayers;

  if (isEmpty) {
    UI.alert('提示', '未选中任何内容');
    return;
  }
  if (length > 1) {
    UI.alert('提示', '只能选中一个组或一个画板');
    return;
  }

  const layer = layers[0];

  if (layer.type !== 'Group' && layer.type !== 'Artboard') {
    UI.alert('提示', '未选中组或者画板');
    return;
  }

  const json = handleTemplateJson();
  console.log(json);
}
