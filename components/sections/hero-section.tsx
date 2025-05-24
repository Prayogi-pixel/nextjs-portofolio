export const HeroSection = () => {
  return (
      <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // gradien gelap modern
        color: "#ffffff", // warna font terang
      }}
    >
      <h1
        style={{
          fontWeight: "700",
          fontSize: "3rem",
          marginBottom: "20px",
          maxWidth: "800px",
          lineHeight: "1.2",
        }}
      >
        Thoughtfully Designed and Engineered
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#d1d5db", // abu terang
          maxWidth: "600px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed sint
        magnam voluptatibus sunt reprehenderit!
      </p>

      {/* Tombol Read Blog */}
      <div
        style={{
          padding: "12px 24px",
          backgroundColor: "#38bdf8", // biru terang modern
          color: "#0f172a", // warna gelap untuk teks tombol
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Read Blog
      </div>
    </section>
  );
};