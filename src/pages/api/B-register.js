const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('/lib/supabase.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  

        
    const data = await res.json();
    if (res.ok) {
      console.log('Kayıt başarılı:', data);
    } else {
      console.error('Hata:', data.error);
    }
  };
  