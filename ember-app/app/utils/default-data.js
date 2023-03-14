import ENV from '../config/environment';

export const defaultSpeakerFoto = getDefaultSpeakerFoto();

export const defaultFotoComponent = {
    componentName: 'flexberry-file',
    componentProperties: {
      readonly: true,
      showPreview: true,
      showDownloadButton: false,
      inputClass: "hide-component"
    }
};


function getDefaultSpeakerFoto() {
    const fileUrl = ENV.APP.components.flexberryFile.uploadUrl + "?fileUploadKey=default&fileName=speaker.jpg";
    const defaultFoto = {
        "fileUrl": fileUrl,
        "previewUrl": fileUrl + "&getPreview=true",
        "fileName": "speaker.jpg",
        "fileMimeType":"image/jpeg",
    };
    return JSON.stringify(defaultFoto);
}