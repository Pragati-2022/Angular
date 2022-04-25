import firebase from 'firebase/compat/app';

export interface IProduct {
    uid : string,
    displayName : string,
    title : string,
    fileName : string,
    url : URL,
    timeStamp : firebase.firestore.FieldValue
}