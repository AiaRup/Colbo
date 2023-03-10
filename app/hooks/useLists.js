import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";

import { db } from "../config/firebase";

export function useLists() {
  const [lists, setLists] = useState();

  useEffect(() => {
    const q = query(collection(db, "lists"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lists_db = [];
      querySnapshot.forEach((doc) => {
        lists_db.push(doc.data());
      });
      setLists(lists_db);
    });

    return unsubscribe;
  }, []);

  return {
    lists,
  };
}
