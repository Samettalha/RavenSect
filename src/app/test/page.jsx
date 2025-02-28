"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function TestSupabase() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) console.error("Supabase Hatası:", error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
