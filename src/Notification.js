import { collection, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { db } from "@/Firebase";

const addNotification = async (message) => {
    await addDoc(collection(db, "notifications"), {
        message,
        timestamp: serverTimestamp(),
        read: false
    });
};

onMounted(() => {
    onSnapshot(collectio(db, "notifications"), (snapshot) => {
        Notification.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
});