

/*****************************************************************************/
/**
 * Object properties for PreloadJS manifest.
 */
export interface IImageData {
	id: string;
	src: string;
	width: number;
	height: number;
}


/*****************************************************************************/
export const IMAGE_0: IImageData = {
	id: "image0",
	src: "res/image_0.png",
	width: 800,
	height: 500
};

export const LOGO: IImageData = {
	id: "logo",
	src: "res/logo_acme.png",
	width: 400,
	height: 180
};

export const STAR: IImageData = {
	id: "star",
	src: "res/star.png",
	width: 34,
	height: 32
};

export const OVERLAY: IImageData = {
	id: "overlay",
	src: "res/overlay.png",
	width: 678,
	height: 960
};


/*****************************************************************************/
/**
 * An array of all images to be loaded by PreloadJS.
 */
export const MANIFEST: Array<IImageData> = [
	IMAGE_0,
	LOGO,
	STAR,
    OVERLAY
];


/*****************************************************************************/
export function getImageDataById(id: string): IImageData | null {

	let ary: Array<IImageData> = MANIFEST.filter((item: IImageData, index, array) => {

		if (item.id === id)
			return item;

	});

	if (ary.length > 0)
		return ary[0];

	return null;
}