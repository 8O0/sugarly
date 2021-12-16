export class Avatar {
    private name: string;
    private sex: string;
    private imageDefault: string;
    private imageGrin: string;
    private imageLove: string;
    private imageSmile: string;
    private imageTalking: string;

    /**
     * Kontruktor für den Avatar
     * @param name Name des Avatars
     * @param sex Geschlecht des Avatars
     * @param imageDefault Pfad zum Default-Bild des Avatars
     * @param imageGrin Pfad zum Grin-Bild des Avatars
     * @param imageLove Pfad zum Love-Bild des Avatars
     * @param imageSmile Pfad zum Smile-Bild des Avatars
     * @param imageTalking Pfad zum Talking-Bild des Avatars
     */
    constructor (name: string, 
                sex: string, 
                imageDefault: string, 
                imageGrin: string, 
                imageLove: string, 
                imageSmile: string, 
                imageTalking: string){
        this.name = name;
        this.sex = sex;
        this.imageDefault = imageDefault;
        this.imageGrin = imageGrin;
        this.imageLove = imageLove;
        this.imageSmile = imageSmile;
        this.imageTalking = imageTalking;
    }

    /**
     * Get-Funktion
     * @returns Name des Avatars
     */
    getName():string{
        return this.name;
    }

    /**
     * Get-Funktion
     * @returns Geschlecht des Avatars
     */
    getSex():string{
        return this.sex;
    }

    /**
     * Get-Funktion
     * @returns Pfad zum Default-Bild des Avatars
     */
    getImageDefault():string{
        return this.imageDefault;
    }

    /**
     * Get-Funktion
     * @returns Pfad zum Grin-Bild des Avatars
     */
    getImageGrin():string{
        return this.imageGrin;
    }

    /**
     * Get-Funktion
     * @returns Pfad zum Love-Bild des Avatars
     */
    getImageLove():string{
        return this.imageLove;
    }

    /**
     * Get-Funktion
     * @returns Pfad zum Smile-Bild des Avatars
     */
    getImageSmile():string{
        return this.imageSmile;
    }

    /**
     * Get-Funktion
     * @returns Pfad zum Default-Bild des Avatars
     */
    getImageTalking():string{
        return this.imageTalking;
    }
}