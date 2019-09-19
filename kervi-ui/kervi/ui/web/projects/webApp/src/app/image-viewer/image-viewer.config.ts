import {IvViewerType} from './interfaces/iv-viewer.type';
import {ImgViewerType} from './interfaces/img-viewer.type';

export class ImgViewerConfig {
  ivViewerType?: IvViewerType = {
    zoomValue: 100,
    maxZoom: 500,
    snapView: false,
    refreshOnResize: true,
    zoomOnMouseWheel: true,
  };
  imageViewerType?: ImgViewerType = {
    zoomInToolTip: 'Zoom in',
    zoomOutToolTip: 'Zoom put',
    rotateLeftToolTip: 'Rotate left',
    rotateRightToolTip: 'Rotate right',
    resetToolTip: 'Reset tools',
    fullScreenToolTip: 'Full screen',
    downloadToolTip: 'Download',
  };
}
