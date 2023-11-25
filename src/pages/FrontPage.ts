import * as $ from "jquery";
import * as AssetEvent from "../events/AssetEvent";
import * as img from "../data/ImageData";
import * as ts from "../data/TextStyles";
import { applyTextStyle } from "../utils/TextStyleUtils";
import { AssetManager } from "../managers/AssetManager";
import { HorizontalDivide } from "../containers/HorizontalDivide";
import { Margin } from "../utils/Margin";
import "createjs";


/*****************************************************************************/
export class FrontPage extends createjs.Container {


    //===== VARIABLES ======================================//
    private logo: createjs.Bitmap;
    private headline: createjs.Text;
    private body: createjs.Text;
    private div: HorizontalDivide;
    private bucketImage: createjs.Bitmap;
    private bucketHeading: createjs.Text;
    private bucketBody: createjs.Text;
    private overlayImage: createjs.Bitmap;

    private _width: number;
    private _height: number;


    //===== CONSTRUCTOR ====================================//
    constructor() {
        super();

        this._width = -1;
        this._height = -1;

        $("[name=stars]").on("change", (e: Event) => this.onNumStarsChange(e));
        $("[name=overlay]").on("change", (e: Event) => this.onOverlayChange(e));

        this.addElements();
        this.addOverlay();
        this.putDefaultContent();
    }


    //===== FUNCTIONS ======================================//
    /**
     * Instantiate elements and add them to the container.
     */
    addElements(): void {

        // Logo
        this.logo = new createjs.Bitmap(this.am.getAsset(img.LOGO.id));
        this.addChild(this.logo);

        // Headline
        this.headline = new createjs.Text();
        applyTextStyle(this.headline, ts.HEADLINE);
        this.addChild(this.headline);

        // Body
        this.body = new createjs.Text();
        applyTextStyle(this.body, ts.BODY);
        this.addChild(this.body);

        // Divide
        this.div = new HorizontalDivide();
        this.addChild(this.div);

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
     * Adds an overlay of the desired end result.  Aids developer in ensuring
     * design has been match adequarely.
     */
    addOverlay():void {
        this.overlayImage = new createjs.Bitmap(this.am.getAsset(img.OVERLAY.id));
        this.overlayImage.alpha = 0.5;
        this.overlayImage.visible = $("[name=overlay]")[0].checked;
        this.addChild(this.overlayImage);
    }

    /**
     * Set default content for elements.
     */
    putDefaultContent(): void {

        // Headline
        this.headline.text = "Partnerships That Last";

        // Body
        this.body.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere est sodales est lobortis interdum. Cras a turpis ullamcorper elit dignissim mattis. Mauris dignissim aliquet est, vel vestibulum nisi fermentum vel. Fusce sit amet dolor eu tellus tincidunt pellentesque et vitae mauris. Praesent convallis magna sem. Sed vel mi nunc. In porta justo urna, ac tristique mauris lobortis et. Nam imperdiet lacinia augue eu vehicula. Duis nec consequat libero. Aenean et sapien volutpat, ultricies ante sit amet, ornare leo. Proin orci felis, lacinia ac commodo vitae, suscipit eget ipsum. Sed egestas justo non dolor molestie, eu iaculis enim lobortis. Suspendisse id ipsum vel lectus luctus viverra. Donec quam neque, fringilla quis justo sagittis, malesuada vestibulum leo. Nam eget lorem at elit vestibulum molestie nec quis est.";

        // Bucket
        this.bucketImage.image = this.am.getAsset(img.IMAGE_0.id);
        this.bucketHeading.text = "CONSULTING";
        this.bucketBody.text = "Nunc posuere nibh sed urna posuere rutrum. Ut eu turpis id arcu consequat sagittis. Pellentesque at purus velit. Suspendisse sit amet massa augue. In sit amet arcu ac quam sagittis ornare sit amet ac elit. Donec tempus eu nulla ac pretium. Vivamus laoreet finibus leo. Donec ut massa aliquam, tincidunt nulla ut, mollis nibh.";
    }

    /**
     * Size and position elements and update the CreateJS stage.
     * This should be called whenever the layout changes.
     */
    updateSizeProperties(): void {

        // Margin
        const m: Margin = new Margin(48, 36, 60, 36);

        // Logo
        const logoWidth: number = 116;
        const logoScale: number = logoWidth / img.LOGO.width;

        this.logo.x = this.width - logoWidth - 36;
        this.logo.y = 48;
        this.logo.scaleX = logoScale;
        this.logo.scaleY = logoScale;

        // Headline
        this.headline.x = m.left;
        this.headline.y = 113;
        this.headline.lineWidth = this.width - m.horizontal;

        // Body
        this.body.x = m.left;
        this.body.y = 162;
        this.body.lineWidth = this.width - m.horizontal;

        // Divide
        this.div.x = m.left;
        this.div.y = 40;

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


    //===== EVENT LISTENERS ================================//
    private onNumStarsChange(e: Event = null) {

        // Update stage display
        this.updateSizeProperties();
    }

    private onOverlayChange(e: Event = null) {
        this.overlayImage.visible = (e.currentTarget as HTMLInputElement).checked;
        this.updateSizeProperties();
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
}