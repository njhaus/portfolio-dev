class ContactInfo {
    type: string;
    text: string;
    constructor (type: string,
    text: string) {
        this.type = type;
        this.text = text;
    }
}

const email = new ContactInfo('Email', 'njhaus@gmail.com');
const phone = new ContactInfo("Phone", "913-203-0504");
const discord = new ContactInfo("Discord", "njhaus");

export const contactArr = [email, phone, discord];