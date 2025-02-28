const PolicyPage = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 text-white min-h-screen">
        <br></br>     <br></br>     <br></br>     <br></br>
        <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Toplanan Bilgiler</h2>
          <p className="text-gray-300">
            Ravensect, kullanıcı deneyimini geliştirmek amacıyla kişisel ve anonim veriler toplayabilir. 
            Bunlar, kullanıcı adı, e-posta adresi, IP adresi ve site içi etkileşimler gibi bilgileri içerebilir.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Bilgilerin Kullanımı</h2>
          <p className="text-gray-300">
            Toplanan veriler, hizmetlerimizi iyileştirmek, güvenliği sağlamak ve kişiselleştirilmiş içerik sunmak için kullanılır. 
            Üçüncü taraflarla asla izinsiz paylaşılmaz.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Çerezler ve Takip</h2>
          <p className="text-gray-300">
            Ravensect, kullanıcı deneyimini optimize etmek için çerezler ve izleme teknolojileri kullanabilir. 
            Çerez ayarlarınızı tarayıcınızdan yönetebilirsiniz.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Üçüncü Taraf Hizmetleri</h2>
          <p className="text-gray-300">
            Sitemiz, üçüncü taraf hizmetlerini (örneğin, ödeme sistemleri veya reklam ağları) içerebilir. 
            Bu hizmetlerin gizlilik politikaları, Ravensect'in politikalarından farklı olabilir.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Veri Güvenliği</h2>
          <p className="text-gray-300">
            Kullanıcı bilgilerinizin güvenliği bizim için önemlidir. Güçlü şifreleme ve güvenlik önlemleri ile korunmaktadır.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Politika Güncellemeleri</h2>
          <p className="text-gray-300">
            Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemelerden haberdar olmak için sayfamızı düzenli olarak kontrol edebilirsiniz.
          </p>
        </section>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">Son Güncelleme: 2025</p>
        </div>
        
        <div className="mt-6 flex items-center justify-center">
          <input type="checkbox" id="acceptPolicy" className="mr-2" />
          <label htmlFor="acceptPolicy" className="text-gray-300">Gizlilik politikasını okudum ve kabul ediyorum.</label>
        </div>
        
        <div className="mt-4 text-center">
          <button className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 transition">
            Onayla
          </button>
        </div>
      </div>
    );
  };
  
  export default PolicyPage;