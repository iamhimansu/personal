export default class ImageUploadBinary {

    static imageIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" style="display: inline-block" fill="currentColor" class="bi bi-file-earmark-binary" viewBox="0 0 16 16">\n' + '  <path d="M7.05 11.885c0 1.415-.548 2.206-1.524 2.206C4.548 14.09 4 13.3 4 11.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203zm-1.524-1.612c-.542 0-.832.563-.832 1.612 0 .088.003.173.006.252l1.559-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614 0-.085-.003-.17-.006-.25l-1.556 1.146zm6.061.624V14h-3v-.595h1.181V10.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633h1.125z"/>\n' + '  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>\n' + '</svg>';

    constructor({data, api, config}) {
        this.data = data;
        this.api = api;
        this.config = config || {};
        this.statusText = 'Reading...';
        this.filePath = null;

    }

    static get toolbox() {
        return {
            title: 'Image', icon: ImageUploadBinary.imageIcon
        };
    }

    render() {
        const self = this;
        const wrapper = document.createElement('div');

        const input = document.createElement('input');
        input.type = 'file';
        input.style['width'] = '0';
        input.style['height'] = '0';
        input.style['display'] = 'none';

        const button = document.createElement('button');
        button.addEventListener('click', () => {
            return input.click();
        });
        button.innerHTML = ImageUploadBinary.imageIcon + 'Select an image';
        button.classList.add('cdx-button');
        button.style['width'] = '100%';
        button.appendChild(input);
        button.click();

        const previewImage = document.createElement('img');

        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            // Check if a file was selected
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = async (e) => {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                    wrapper.appendChild(previewImage);
                    // use call back function
                    if (typeof self.config.uploadHandler === 'undefined') {
                        console.warn('No upload handler found');
                    }
                    reader.fileObject = {
                        file: file
                    };
                    await self.config.uploadHandler(reader).then((response)=>{
                        this.filePath = response.data.content.download_url;
                    });
                };

                reader.onerror = error => console.log(error);
            }
            return false;
        });

        const overlay = document.createElement('div');
        overlay.classList.add('cdx-overlay');
        overlay.style['width'] = '100%';
        overlay.style['height'] = '150px';
        overlay.style['background'] = 'white';
        overlay.style['border'] = '1px solid rgba(201,201,204,.48)';
        overlay.style['display'] = 'flex';
        overlay.style['margin'] = '10px 0';
        overlay.style['border-radius'] = '5px';
        overlay.style['justify-content'] = 'center';
        overlay.style['align-items'] = 'center';
        overlay.style['flex-direction'] = 'row';
        overlay.style['align-content'] = 'center';
        overlay.style['flex-wrap'] = 'nowrap';

        overlay.innerHTML = 'loading..';

        wrapper.appendChild(button);
        return wrapper;
    }

    save() {
        return {
            url: this.filePath
        }
    }
}