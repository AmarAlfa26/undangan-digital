// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ message: 'Method Not Allowed' });
//     }
  
//     const { nama, kehadiran, pesan } = req.body;
  
//     if (!nama) {
//       return res.status(400).json({ message: 'Nama wajib diisi' });
//     }
  
//     // nanti kita hubungkan ke Supabase
//     console.log({ nama, kehadiran, pesan });
  
//     res.status(200).json({ message: 'Terima kasih atas konfirmasi kehadirannya 🙏' });
//   }
  