export class teamclass {
    public teamName: string;
    public url: string;
    public phoneNumber: string;
    public imagePath: string;

    constructor(teamName: string, url: string, phoneNumber: string, imagePath: string) {
        this.teamName = teamName;
        this.url = url;
        this.phoneNumber = phoneNumber;
        this.imagePath = imagePath;
    }
}