import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";

import { db } from "../config/firebase";

export function useList({ list_id }) {
  const [items, setItems] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (list_id) {
      const q = query(collection(db, "items"), where("list_id", "==", list_id));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const items_db = [];
        querySnapshot.forEach((doc) => {
          items_db.push(doc.data());
        });
        setItems(items_db);
        const completed_items = items_db.filter(
          (item) => item.completed
        ).length;
        setProgress(
          items_db.length > 0 ? completed_items / items_db.length : 0
        );
      });
      return unsubscribe;
    }
  }, []);

  return {
    items,
    progress,
  };
}
