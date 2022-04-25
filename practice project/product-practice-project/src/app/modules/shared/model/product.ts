import firebase from 'firebase/compat/app';

export interface IProduct {
    id? : string
    productName : string,
    category : string,
    price : number,
    description : string,
    image? : any,
    timeStamp : firebase.firestore.FieldValue,
    fileName?  : string
}