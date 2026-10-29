# KUKANG EV ITERA — AI Agent Guidelines

Dokumen panduan untuk AI collaborator dalam mengembangkan & memelihara kode situs resmi **KUKANG EV ITERA**.

---

## 1. Aesthetic & Design System

Situs ini mengusung tema **Professional Electric Vehicle & Motorsport Research Team** (Minimalist, High-Tech, Premium, & Engineering-Oriented).

### Color Tokens
- **Background Utama:** `#050816`
- **Secondary Background:** `#0F172A`
- **Primary Text:** `#FFFFFF`
- **Secondary Text:** `#94A3B8`
- **Metallic Gold (Aksen Utama):** `#D4AF37`
- **Engineering Cyan (Aksen Sekunder/Tech):** `#00E5FF`
- **Subtle Red (Identitas Brand):** `#C62828`

### Typography Hierarchy
- **Headings / Big Titles:** `Space Grotesk` (uppercase, cinematic feel)
- **Body Text / Description:** `Inter` (regular/medium, clean readability)
- **Special Accents / Badges:** `Sora` atau `Space Grotesk` (font-mono/uppercase)

---

## 2. Architecture & Performance Rules

1. **Pemisahan Data & UI (Data-Driven Components):**
   - Jangan menyatukan data konstan (misal: milestone sejarah, spesifikasi, tim, FAQ) langsung di dalam JSX.
   - Pisahkan ke dalam array/object terstruktur di bagian atas file komponen (contoh: `HISTORY_MILESTONES`, `ENGINEERING_MILESTONES`).

2. **Performa & Animasi (GPU Accelerated):**
   - Hindari penggunaan efek `blur-[100px+]` atau `backdrop-blur` berlebih pada elemen besar karena menyebabkan frame lag di perangkat mobile/laptop low-end.
   - Gunakan `radial-gradient` murni untuk efek pencahayaan latar belakang.
   - Gunakan akselerasi GPU (`gpu-accelerate` / `translateZ(0)`) untuk elemen yang memiliki animasi scroll atau transisi.
   - Selalu sertakan `loading="lazy"` dan fallback visual saat memuat gambar lokal.

3. **Prinsip Tampilan (Clean & Editorial):**
   - Hindari komponen yang terlihat seperti "dashboard admin" atau "UKM biasa".
   - Utamakan *whitespace* yang luas, garis aksen tipis (*thin metallic borders*), dan tipografi yang kuat.

---

## 3. Component Map Key
- `app/page.tsx`: Halaman utama / Landing Page.
- `app/tentang/sejarah-visi-misi/page.tsx`: Halaman Sejarah, Visi, & Misi.
- `components/HeroSlider.tsx`: Carousel slider bergerak otomatis di Hero section.
- `components/HistorySection.tsx`: Komponen rekam jejak, visi, misi, dan milestone engineering.