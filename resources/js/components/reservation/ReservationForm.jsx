import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUsers, FaUser, FaPhone, FaEnvelope, FaUtensils } from 'react-icons/fa';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    tanggal: '',
    waktu: '',
    jumlahOrang: '',
    permintaanKhusus: '',
    persetujuan: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Hapus error untuk field yang sedang diubah
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) newErrors.nama = 'Nama harus diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.telepon.trim()) {
      newErrors.telepon = 'Nomor telepon harus diisi';
    } else if (!/^[0-9+\-\s]+$/.test(formData.telepon)) {
      newErrors.telepon = 'Format nomor telepon tidak valid';
    }
    
    if (!formData.tanggal) newErrors.tanggal = 'Tanggal harus dipilih';
    if (!formData.waktu) newErrors.waktu = 'Waktu harus dipilih';
    if (!formData.jumlahOrang) newErrors.jumlahOrang = 'Jumlah orang harus dipilih';
    if (!formData.persetujuan) newErrors.persetujuan = 'Anda harus menyetujui syarat dan ketentuan';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulasi pengiriman data ke server
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form setelah 3 detik
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          nama: '',
          email: '',
          telepon: '',
          tanggal: '',
          waktu: '',
          jumlahOrang: '',
          permintaanKhusus: '',
          persetujuan: false
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form Reservasi */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <div className="bg-[#f8f8f5] rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-[#1b1b18]">Form Reservasi</h2>
                
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                  >
                    <p className="font-medium">Reservasi berhasil dibuat!</p>
                    <p>Terima kasih telah melakukan reservasi di GreenCafe. Kami akan mengirimkan konfirmasi melalui email dan SMS.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Nama */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="nama">
                          <div className="flex items-center">
                            <FaUser className="mr-2 text-[#627a4c]" />
                            <span>Nama Lengkap</span>
                          </div>
                        </label>
                        <input
                          type="text"
                          id="nama"
                          name="nama"
                          value={formData.nama}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c] ${
                            errors.nama ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Masukkan nama lengkap"
                        />
                        {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                          <div className="flex items-center">
                            <FaEnvelope className="mr-2 text-[#627a4c]" />
                            <span>Email</span>
                          </div>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c] ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Masukkan alamat email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      {/* Telepon */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="telepon">
                          <div className="flex items-center">
                            <FaPhone className="mr-2 text-[#627a4c]" />
                            <span>Nomor Telepon</span>
                          </div>
                        </label>
                        <input
                          type="tel"
                          id="telepon"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c] ${
                            errors.telepon ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Masukkan nomor telepon"
                        />
                        {errors.telepon && <p className="text-red-500 text-sm mt-1">{errors.telepon}</p>}
                      </div>
                      
                      {/* Tanggal */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="tanggal">
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2 text-[#627a4c]" />
                            <span>Tanggal Reservasi</span>
                          </div>
                        </label>
                        <input
                          type="date"
                          id="tanggal"
                          name="tanggal"
                          value={formData.tanggal}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c] ${
                            errors.tanggal ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.tanggal && <p className="text-red-500 text-sm mt-1">{errors.tanggal}</p>}
                      </div>
                      
                      {/* Waktu */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="waktu">
                          <div className="flex items-center">
                            <FaClock className="mr-2 text-[#627a4c]" />
                            <span>Waktu Reservasi</span>
                          </div>
                        </label>
                        <select
                          id="waktu"
                          name="waktu"
                          value={formData.waktu}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c] ${
                            errors.waktu ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Pilih waktu</option>
                          <option value="08:00">08:00</option>
                          <option value="09:00">09:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                        </select>
                        {errors.waktu && <p className="text-red-500 text-sm mt-1">{errors.waktu}</p>}
                      </div>
                      
                      {/* Jumlah Orang */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="jumlahOrang">
                          <div className="flex items-center">
                            <FaUsers className="mr-2 text-[#627a4c]" />
                            <span>Jumlah Orang</span>
                          </div>
                        </label>
                        <select
                          id="jumlahOrang"
                          name="jumlahOrang"
                          value={formData.jumlahOrang}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c] ${
                            errors.jumlahOrang ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Pilih jumlah orang</option>
                          <option value="1">1 orang</option>
                          <option value="2">2 orang</option>
                          <option value="3">3 orang</option>
                          <option value="4">4 orang</option>
                          <option value="5">5 orang</option>
                          <option value="6">6 orang</option>
                          <option value="7">7 orang</option>
                          <option value="8">8 orang</option>
                          <option value="9">9 orang</option>
                          <option value="10+">10+ orang (akan dikonfirmasi)</option>
                        </select>
                        {errors.jumlahOrang && <p className="text-red-500 text-sm mt-1">{errors.jumlahOrang}</p>}
                      </div>
                    </div>
                    
                    {/* Permintaan Khusus */}
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="permintaanKhusus">
                        <div className="flex items-center">
                          <FaUtensils className="mr-2 text-[#627a4c]" />
                          <span>Permintaan Khusus (opsional)</span>
                        </div>
                      </label>
                      <textarea
                        id="permintaanKhusus"
                        name="permintaanKhusus"
                        value={formData.permintaanKhusus}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#627a4c]"
                        placeholder="Masukkan permintaan khusus (alergi, preferensi tempat duduk, dll)"
                        rows="4"
                      ></textarea>
                    </div>
                    
                    {/* Persetujuan */}
                    <div className="mb-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="persetujuan"
                            name="persetujuan"
                            type="checkbox"
                            checked={formData.persetujuan}
                            onChange={handleChange}
                            className={`w-4 h-4 border rounded focus:ring-2 focus:ring-[#627a4c] ${
                              errors.persetujuan ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="persetujuan" className="text-gray-700">
                            Saya menyetujui <a href="#" className="text-[#627a4c] hover:underline">syarat dan ketentuan</a> serta <a href="#" className="text-[#627a4c] hover:underline">kebijakan privasi</a> GreenCafe.
                          </label>
                        </div>
                      </div>
                      {errors.persetujuan && <p className="text-red-500 text-sm mt-1">{errors.persetujuan}</p>}
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#627a4c] hover:bg-[#4e6039] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Memproses...
                        </>
                      ) : (
                        'Buat Reservasi'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Informasi Reservasi */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[#627a4c] text-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Informasi Reservasi</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaClock className="mr-2" /> Jam Operasional
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Senin - Jumat:</span>
                        <span>08:00 - 22:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sabtu - Minggu:</span>
                        <span>09:00 - 23:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Hari Libur:</span>
                        <span>10:00 - 22:00</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <FaPhone className="mr-2" /> Kontak
                    </h4>
                    <p className="mb-2">Untuk informasi lebih lanjut:</p>
                    <p className="mb-1">Telepon: +62 812-3456-7890</p>
                    <p>Email: reservasi@greencafe.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Catatan Penting</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Reservasi dapat dilakukan minimal 2 jam sebelumnya</li>
                      <li>Konfirmasi akan dikirim melalui email dan SMS</li>
                      <li>Harap datang tepat waktu, toleransi keterlambatan 15 menit</li>
                      <li>Untuk grup besar (10+ orang), harap hubungi kami langsung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
