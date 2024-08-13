"use strict";
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadImageFromDisk();
    }
    loadImageFromDisk() {
        console.log(`Loading image from disk: ${this.filename}`);
    }
    display() {
        console.log(`Displaying image: ${this.filename}`);
    }
}
class ImageProxy {
    constructor(filename) {
        this.realImage = null;
        this.filename = filename;
    }
    display() {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}
const image = new ImageProxy("test_image.png");
image.display();
image.display();
