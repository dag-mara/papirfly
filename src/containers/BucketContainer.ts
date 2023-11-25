import * as $ from "jquery";
import * as AssetEvent from "../events/AssetEvent";
import * as img from "../data/ImageData";
import * as ts from "../data/TextStyles";
import { applyTextStyle } from "../utils/TextStyleUtils";
import { AssetManager } from "../managers/AssetManager";
import { Margin } from "../utils/Margin";
import "createjs";


/*****************************************************************************/
export class BucketContainer extends createjs.Container {


    //===== VARIABLES ======================================//
  
    private bucketImage: createjs.Bitmap;
    private bucketHeading: createjs.Text;
    private bucketBody: createjs.Text;

    private _width: number;
    private _height: number;


    //===== CONSTRUCTOR ====================================//
    constructor(imageId: string, headingText: string, bodyText: string) {
        super();

        this._width = -1;
        this._height = -1;

        this.addElements();
        this.setContent(imageId, headingText, bodyText);
    }


    //===== FUNCTIONS ======================================//
    /**
     * Instantiate elements and add them to the container.
     */
    addElements(): void {

        // Logo

        // Bucket Image
        this.bucketImage = new createjs.Bitmap(this.am.getAsset(img.IMAGE_0.id));
        this.addChild(this.bucketImage);

        // Bucket Header
        this.bucketHeading = new createjs.Text();
        applyTextStyle(this.bucketHeading, ts.BUCKET_HEADLINE);
        this.addChild(this.bucketHeading);

        // Bucket Body
        this.bucketBody = new createjs.Text();
        applyTextStyle(this.bucketBody, ts.BUCKET_BODY);
        this.addChild(this.bucketBody);
    }

   
    /**
     * Size and position elements and update the CreateJS stage.
     * This should be called whenever the layout changes.
     */
    updateSizeProperties(): void {

        // Margin
        const m: Margin = new Margin(48, 36, 60, 36);

        this.setBounds(0, 0, 190, 400);

        // Image
        const bucketWidth: number = 190;
        const imageData: img.IImageData | null = img.getImageDataById(img.IMAGE_0.id);
        const imageScale: number = (imageData) ? bucketWidth / imageData.width : 1;

        this.bucketImage.x = m.left;
        this.bucketImage.y = 432;
        this.bucketImage.scaleX = imageScale;
        this.bucketImage.scaleY = imageScale;

        // Header
        this.bucketHeading.x = m.left;
        this.bucketHeading.y = this.bucketImage.y + 146;
        this.bucketHeading.lineWidth = bucketWidth;

        // Body
        this.bucketBody.x = m.left;
        this.bucketBody.y = this.bucketImage.y + 175;
        this.bucketBody.lineWidth = bucketWidth;

        // Update Stage
        if (this.stage)
            this.stage.update();
    }
  


    //===== GETTERS / SETTERS ==============================//
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
        this.updateSizeProperties();
    }

    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
        this.updateSizeProperties();
    }


    //===== CONVENIENCE ====================================//
    private get am(): AssetManager {
        return AssetManager.instance;
    }

    public setContent(imageId: string, headingText: string, bodyText: string): void {
        this.bucketImage.image = AssetManager.instance.getAsset(imageId);
        this.bucketHeading.text = headingText;
        this.bucketBody.text = bodyText;
    }
}