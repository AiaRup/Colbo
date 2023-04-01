import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

import { db } from "../config/firebase";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "categories"), orderBy("name"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const categories_db = [];
      querySnapshot.forEach((doc) => {
        categories_db.push(doc.data());
      });
      setCategories(categories_db);
    });

    return unsubscribe;
  }, []);

  return {
    categories,
  };
}
