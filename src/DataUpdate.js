import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/Firebase"
import { onMounted } from "vue";

const violations = ref([]);

onMounted(() => {
    onSnapshot(collection(db, "violations"), (snapshot) => {
        violations.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
});