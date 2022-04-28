import firebase from 'firebase/compat/app';

export interface IProduct {
    docId? : string,
    uid : string,
    displayName : string,
    title : string,
    fileName : string,
    url : URL,
    timeStamp : firebase.firestore.FieldValue
}