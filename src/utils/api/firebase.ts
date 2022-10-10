import * as fireApp from "firebase/app";
import * as fireFirestore from "firebase/firestore";

let database: null | fireFirestore.Firestore = null;

if (!fireApp.getApps().length) {
    try {
        database = fireFirestore.getFirestore(
            fireApp.initializeApp({
                apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                messagingSenderId:
                    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
            })
        );
    } catch (err) {
        database = null;
    }
} else {
    database = fireFirestore.getFirestore(fireApp.getApps()[0]);
}

export { database };

export const getAllDocs = async function (collection: string) {
    return await fireFirestore.getDocs(
        fireFirestore.collection(database, collection)
    );
};

export const updateDocs = async function (
    collection: string,
    data: Record<string, string>
): Promise<string> {
    try {
        const docRef = await fireFirestore.addDoc(
            fireFirestore.collection(database, collection),
            {
                ...data
            }
        );
        return `Document written with Id: ${docRef.id}`;
    } catch (e) {
        return `Failed to write document: ${(e as Error).message}`;
    }
};
