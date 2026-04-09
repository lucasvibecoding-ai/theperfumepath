import type { Metadata } from "next";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import CountdownBar from "./CountdownBar";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Create Your Own Signature Perfume at Home in a Single Weekend",
  description:
    "Learn to create custom fragrances at home without expensive ingredients or years of trial and error. Even if you're a complete beginner.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CountdownBar />

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #f9f6f2;
          --bg-warm: #f2ede5;
          --card: #ffffff;
          --ink: #1e1a14;
          --ink-soft: rgb(43, 43, 43);
          --ink-muted: #7d7568;
          --green: #3a6347;
          --green-deep: #264432;
          --green-soft: #5a8f6c;
          --green-pale: rgba(58,99,71,0.06);
          --gold: #b08d3a;
          --gold-light: #d4b35c;
          --gold-pale: rgba(176,141,58,0.08);
          --terra: #946b42;
          --sand: #d9cfc0;
          --stone: #c4b9a8;
          --cream: #fdfbf7;
          --radius: 10px;
        }

        /* BASE TYPOGRAPHY — one size for all body text */
        .bonsai-page { font-family: 'Lora', 'Lora Fallback', serif; color: rgb(43, 43, 43); line-height: 1.8; font-weight: 400; font-size: 20px; }
        .bonsai-page .container { max-width: 1080px; margin: 0 auto; padding: 0 40px; }

        /* Headings */
        .bonsai-page h1, .bonsai-page h2, .bonsai-page h3 { font-family: 'Lora', serif; color: var(--ink); line-height: 1.25; }
        .bonsai-page h1 { font-size: clamp(2.4rem, 6vw, 3.6rem); font-weight: 600; letter-spacing: -0.5px; text-align: center; margin-bottom: 20px; }
        .bonsai-page h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 500; margin-bottom: 24px; }
        .bonsai-page h3 { font-size: 30px; font-weight: 600; color: var(--green-deep); margin-bottom: 8px; }

        /* Body text */
        .bonsai-page p { margin-bottom: 24px; }
        .bonsai-page strong { color: var(--ink); font-weight: 600; }
        .bonsai-page em { font-style: italic; }
        .bonsai-page a { color: var(--green); text-decoration: none; }

        /* Utilities */
        .bonsai-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--sand), transparent); margin: 20px 0; }
        .sm-divider { width: 36px; height: 2px; background: var(--gold); margin: 0 auto; opacity: 0.5; }
        .bonsai-center { text-align: center; }

        /* Badge */
        .badge { display: inline-block; padding: 6px 16px; border: 1.5px solid var(--green); border-radius: 100px; font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; }
        .no-exp { font-size: 16px; letter-spacing: 2.5px; margin-bottom: 20px; }
        .hero-sub { font-size: clamp(1.1rem, 2.5vw, 1.5rem); }
        .course-intro { padding: 80px 0 0; }

        /* Hero */
        .hero-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; }
        .hero-img-ph { text-align: center; padding: 36px; color: var(--ink-muted); font-size: 14px; line-height: 1.5; }
        .hero-img-ph .em { font-size: 48px; display: block; margin-bottom: 8px; }
        .hero h1 .accent { color: var(--green-deep); font-style: italic; }

        /* Philosophy blocks */
        .phil-block { margin-bottom: 32px; padding: 28px 32px; background: var(--card); border-radius: 12px; border: 1px solid var(--sand); }
        .phil-kanji { font-size: 32px; color: var(--gold); margin-bottom: 6px; }
        .phil-title { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .phil-rom { font-size: 15px; color: var(--ink-muted); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; font-weight: 600; }
        .phil-block p { margin-bottom: 0; }

        /* Transform quote */
        .transform { padding: 48px 0; text-align: center; }
        .transform-line { font-size: clamp(1rem, 2.2vw, 1.3rem); color: var(--ink); font-weight: 400; font-style: italic; max-width: 560px; margin: 0 auto; line-height: 1.5; }

        /* Instructor */
        .instructor { padding: 56px 0; display: flex; gap: 32px; align-items: flex-start; }
        .instructor-img { width: 420px; min-width: 420px; border-radius: var(--radius); flex-shrink: 0; overflow: hidden; }

        /* Students */
        .students { padding: 48px 0; text-align: center; }
        .students-img { width: 100%; max-width: 860px; margin: 0 auto; border-radius: 12px; aspect-ratio: 2.2/1; background: var(--bg-warm); border: 1px solid var(--sand); display: flex; align-items: center; justify-content: center; color: var(--ink-muted); font-size: 16px; }

        /* Objections */
        .objection { padding: 56px 0; }

        /* Module cards */
        .modules-grid { display: flex; flex-direction: column; gap: 16px; }
        .module-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 16px; border: 1px solid var(--sand); }
        .module-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }
        .module-sub { font-size: 18px; color: var(--ink); margin-bottom: 14px; }
        .module-body { display: flex; gap: 28px; align-items: flex-start; }
        .module-card ul { list-style: none; padding: 0; flex: 1; }
        .module-card li { padding: 6px 0; font-size: 18px; line-height: 1.6; }
        .module-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }

        .hereswhatyouget-mobile { display: none; }
        .hero-text-mobile { display: none; }

        /* CTA */
        .cta-block { text-align: center; padding: 56px 0; }
        .price-old { font-size: 34px; color: var(--ink-muted); text-decoration: line-through; margin-bottom: 4px; }
        .price { font-size: 56px; color: var(--green-deep); margin-bottom: 4px; font-weight: 700; }
        .price-note { font-size: 20px; color: var(--ink-muted); margin-bottom: 24px; font-weight: 400; }
        .lifetime-break { display: none; }
        .guarantee-badge { display: flex; align-items: center; gap: 10px; justify-content: center; margin-top: 20px; font-size: 15px; color: var(--ink-muted); }
        .guarantee-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--cream); border: 1.5px solid var(--gold); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .payment-icons { display: flex; gap: 6px; justify-content: center; margin-top: 14px; opacity: 0.4; }
        .payment-icons span { font-size: 12px; padding: 4px 10px; border: 1px solid var(--stone); border-radius: 3px; color: var(--ink-muted); font-weight: 500; }
        .ps-note { margin-top: 16px; font-size: 18px; color: var(--ink-muted); font-style: italic; }

        /* Guarantee section */
        .guarantee-section { padding: 48px 0; text-align: center; }
        .guarantee-section p { max-width: 640px; margin: 0 auto 16px; font-size: 20px; }

        /* Bonus cards */
        .bonus-card { background: var(--card); border-radius: 12px; padding: 28px; margin-bottom: 16px; border: 1px solid var(--sand); }
        .bonus-body { display: flex; gap: 28px; align-items: flex-start; }
        .bonus-img { width: 280px; min-width: 280px; height: 260px; border-radius: 8px; background: linear-gradient(135deg, var(--bg-warm), var(--sand)); display: flex; align-items: center; justify-content: center; font-size: 28px; border: 1px solid var(--sand); overflow: hidden; position: relative; }
        .bonus-card ul { flex: 1; }
        .bonus-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .bonus-label { font-size: 12px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); }
        .bonus-value { font-size: 12px; color: var(--green); font-weight: 700; background: rgba(58,99,71,0.1); padding: 2px 10px; border-radius: 100px; letter-spacing: 0.5px; }
        .bonus-card h3 { font-size: 30px; color: var(--gold); margin-bottom: 4px; }
        .module-card h3 { color: var(--gold); }
        .bonus-desc { font-size: 18px; color: var(--ink-muted); margin-bottom: 14px; }
        .bonus-card ul { list-style: none; padding: 0; }
        .bonus-card li { padding: 6px 0; font-size: 18px; line-height: 1.6; }
        .mega { border-color: rgba(176,141,58,0.3); background: linear-gradient(135deg, var(--card), var(--gold-pale)); }

        /* Stack */
        .stack-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.05); max-width: 520px; margin-left: auto; margin-right: auto; }
        .stack-row .label { color: var(--ink-soft); }
        .stack-row .val { color: var(--green-deep); font-weight: 800; font-size: 17px; }
        .stack-total { font-weight: 700; border-bottom: 2px solid var(--green); padding-bottom: 10px; margin-bottom: 6px; }
        .stack-total .label { color: var(--ink); }

        /* FAQ — individual cards */
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item { background: var(--cream); border-radius: 12px; padding: 4px 20px; border: 1px solid var(--sand); }
        .faq-q { width: 100%; display: flex; align-items: center; gap: 14px; padding: 18px 0; background: none; border: none; cursor: pointer; text-align: left; font-family: 'Lora', serif; font-size: 18px; }
        .faq-badge { width: 28px; height: 28px; border-radius: 50%; background: var(--green-pale); color: var(--green); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .faq-q-text { flex: 1; font-weight: 700; color: var(--ink); }
        .faq-icon { color: var(--green); font-size: 20px; transition: transform 0.2s; flex-shrink: 0; }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s; }
        .faq-answer.open { max-height: 400px; padding-bottom: 18px; }
        .faq-answer-inner { padding-left: 42px; }
        .faq-a { color: var(--ink-muted); line-height: 1.75; margin: 0; }

        /* Closing */
        .closing { padding: 56px 0; text-align: center; }
        .closing-quote { font-size: clamp(1.3rem, 2.5vw, 1.8rem); color: var(--ink); font-style: italic; max-width: 520px; margin: 0 auto 28px; line-height: 1.5; }

        /* Footer */
        .bonsai-footer { padding: 44px 0; text-align: center; font-size: 14px; color: #c4b9a8; background: #1e1a14; margin-top: 48px; }
        .bonsai-footer a { color: #d4b35c; }
        .bonsai-footer p { color: #c4b9a8; }

        /* Split layout */
        .split { display: flex; gap: 40px; align-items: center; padding: 56px 0; }
        .split-text { flex: 1; }
        .split-text h2 { font-size: clamp(1.6rem, 4vw, 2.4rem); }
        .split-img { flex: 1 1 50%; height: 380px; border-radius: 12px; background: transparent; border: none; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .split-img-ph { text-align: center; padding: 24px; color: var(--ink-muted); font-size: 14px; line-height: 1.5; }
        .split-img-ph .em { font-size: 42px; display: block; margin-bottom: 8px; }

        @media (max-width: 768px) {
          .bonsai-page .container { padding: 0 24px; }
          .bonsai-page section { padding-left: 0; padding-right: 0; }
          .split { flex-direction: column; gap: 24px; }
          .bonsai-gallery { grid-template-columns: repeat(2, 1fr) !important; }
          .split-img { flex: none; width: 100%; height: auto; }
          .split-text { flex: 1 !important; }
          .module-body { flex-direction: column; }
          .module-img { width: 100%; min-width: unset; height: auto; aspect-ratio: 1/1; }
          .bonus-body { flex-direction: column; }
          .bonus-img { width: 100%; min-width: unset; height: auto; aspect-ratio: 1/1; }
          .module-card, .bonus-card { padding: 20px; }
          .instructor { flex-direction: column; align-items: center; }
          .instructor-text { text-align: left; }
          .course-intro { padding-top: 20px !important; }
          .hero-divider { display: none !important; }
          .price-old { font-size: 28px !important; }
          .checkout-box { padding: 24px 16px !important; padding-bottom: 16px !important; }
          .cta-btn { font-size: 1.3rem !important; }
          .ps-note { font-size: 16px !important; margin-bottom: 0 !important; }
          .instructor-img { width: 100% !important; max-width: 400px !important; height: auto !important; padding: 0 24px; border-radius: 16px; }
          .phil-block { padding: 20px; }
          .stack-row { max-width: 100%; }
          .closing-quote { font-size: 1.2rem; }
          .bonus-header { flex-wrap: wrap; }
          .no-exp { font-size: 14px !important; letter-spacing: 1.5px !important; margin-bottom: 12px !important; }
          .hero-sub { font-size: 18px !important; }
          .hero-split { padding-top: 12px !important; }
        }
        @media (max-width: 480px) {
          .lifetime-break { display: block; }
          .bonsai-page .container { padding: 0 24px; }
          .bonsai-page { font-size: 20px; }
          .bonsai-page p:not(.now-only):not(.no-exp):not(.hero-sub):not(.guarantee-text):not(.ps-note), .bonsai-page li { font-size: 20px !important; }
          .hero-sub { font-size: 18px !important; }
          .module-img, .bonus-img { height: auto; aspect-ratio: 1/1; }
          .hereswhatyouget-desktop { display: none !important; }
          .hereswhatyouget-mobile { display: block !important; }
          .hero-text-desktop { display: none !important; }
          .hero-text-mobile { display: block !important; }
          .no-exp { font-size: 14px !important; letter-spacing: 1.5px !important; margin-bottom: 12px !important; }
          .bonus-card h3, .module-card h3 { margin-bottom: 14px !important; }
          .bonus-desc, .module-sub { margin-bottom: 22px !important; }
          .badge { font-size: 10px; letter-spacing: 1.5px; padding: 5px 12px; }
          .payment-method-btn { font-size: 13px; padding: 10px 12px; }
          #hero { width: 100% !important; margin-top: 16px; }
          .perfume-pic { width: 100% !important; }
          .now-only { font-size: 36px !important; }
          .price-old { font-size: 28px !important; }
          .cta-btn { font-size: 1.3rem !important; }
          .faq-q-text { font-weight: 500 !important; font-size: 18px !important; }
          .faq-q { font-size: 18px !important; }
          .stack-row { padding: 6px 0 !important; font-size: 18px; }
          .stack-row .val { font-size: 18px !important; }
          .checkout-box { padding: 24px 20px !important; }
        }
      `}} />

      <div className="bonsai-page">
        <div className="container">

          {/* HERO */}
          <section style={{ paddingTop: 64, paddingBottom: 48, textAlign: 'center' }}>
            <p className="no-exp" style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Even if you&apos;re a complete beginner</p>
            <h1>Create Your Own <span style={{ backgroundImage: 'linear-gradient(135deg, #b08d3a, #d4b35c, #b08d3a)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', filter: 'drop-shadow(0 0 8px rgba(212,179,92,0.4))' }}>Signature Perfume</span> at Home in a Single Weekend</h1>
            <p className="hero-sub" style={{ color: 'var(--ink-muted)', marginTop: 8, fontStyle: 'italic' }}>That smells just as good as a $150 bottle and lasts just as long.</p>

            <div className="split hero-split" style={{ paddingTop: 28, paddingBottom: 0 }}>
              <div className="split-text hero-text-desktop" style={{ textAlign: 'left', flex: '2' }}>
                <p style={{ marginBottom: 0, textAlign: 'left' }}>
                  Once you create your own scent, <strong>you&apos;ll use it everywhere.</strong>
                  <br /><br />
                  On a <strong>date night</strong>. Around the house. In <strong>your car</strong>. Even at <strong>the gym</strong>.
                  <br /><br />
                  And then… <strong>you&apos;ll want to create another one.</strong>
                  <br /><br />
                  <strong>Everyone does.</strong>
                </p>
              </div>
              <div style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image id="hero" src="/hero_fresh.jpg" alt="Handcrafted perfume bottles" width={600} height={600} style={{ width: '75%', height: 'auto', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)' }} />
              </div>
            </div>
            <div className="hero-text-mobile" style={{ textAlign: 'left', marginTop: 36 }}>
              <p style={{ marginBottom: 0 }}>
                  Once you create your own scent, <strong>you&apos;ll use it everywhere.</strong>
                  <br /><br />
                  On a <strong>date night</strong>. Around the house. In <strong>your car</strong>. Even at <strong>the gym</strong>.
                  <br /><br />
                  And then… <strong>you&apos;ll want to create another one.</strong>
                  <br /><br />
                  <strong>Everyone does.</strong>
              </p>
            </div>
          </section>

          {/* IMAGINE IF YOU COULD */}
          <section style={{ padding: '24px 0 56px' }}>
            <div style={{ maxWidth: 672, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 500, marginBottom: 16 }}>
                Imagine if you could:
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', lineHeight: 1.75 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: '#C0392B', marginTop: 4, flexShrink: 0 }}>→</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: '#C0392B' }}>wear a scent that feels completely yours.</strong> Have people stop to ask what you&apos;re wearing (only to hear you made it yourself)
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: '#1A8F7D', marginTop: 4, flexShrink: 0 }}>→</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: '#1A8F7D' }}>make your home, car, or office smell exactly how you want.</strong> Not &quot;close enough.&quot; Exactly.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: '#D4621A', marginTop: 4, flexShrink: 0 }}>→</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: '#D4621A' }}>actually understand what makes a fragrance smell good.</strong> No more guessing. Just confidently combining scents that work together.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: '#7B2D8E', marginTop: 4, flexShrink: 0 }}>→</span>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: '#7B2D8E' }}>have the best smelling hobby in the world.</strong> Creative, calming, and without any screens. (Plus, it makes one hell of a gift 🎁)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* THE MOMENT IT CLICKS */}
          <section style={{ padding: '64px 0 24px' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 44 }}>You might be thinking this is impossible.</h2>
            <p>Your own perfume? It sounds like something <strong>only professionals can pull off.</strong></p>
            <p>But what if I told you that <strong>you don&apos;t need lab equipment, expensive ingredients or years of practice.</strong></p>
            <p>Maybe you&apos;ve tried mixing scents before, or maybe you&apos;ve never tried at all.</p>
            <p>But something about creating your own scent pulls you in. You just don&apos;t know where to start.</p>
          </section>

          <section style={{ padding: '48px 0 32px' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 44 }}>Here&apos;s what most people don&apos;t realize.</h2>
            <p><strong>Your perfume doesn&apos;t need to be complicated.</strong></p>
            <p>Three notes layered well can outperform a $200 bottle with forty ingredients.</p>
            <p>As long as the balance between top, middle, and base is right, <strong>your nose does the rest.</strong></p>
            <p>You add one note. Then another. Then another. And the scent comes alive.</p>
          </section>

          <div style={{ maxWidth: 860, margin: '0 auto', paddingTop: 16 }}>
            <Image className="perfume-pic" src="/perfume_pic.jpg" alt="Perfume crafting" width={1024} height={1024} style={{ width: '60%', height: 'auto', borderRadius: 12, border: '1px solid var(--sand)', display: 'block', margin: '0 auto' }} />
          </div>

          <section style={{ padding: '48px 0 64px' }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;Isn&apos;t perfume-making expensive?&quot;</h2>
              <p><strong>Your first perfume costs less than a coffee.</strong></p>
              <p>A starter kit of essential oils is <strong>$15-20</strong>. Carrier oil and bottles cost <strong>under $15.</strong></p>
              <p>That&apos;s it. No $300 niche ingredients. No professional lab equipment.</p>
          </section>

          <section style={{ padding: '0 0 64px' }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;I don&apos;t have a good nose. I&apos;m not a perfumer.&quot;</h2>
              <p>You&apos;re not trying to identify 47 notes blindfolded. You&apos;re picking from a small set, following a structure, and asking yourself one question: <strong>&quot;Do I like this?&quot;</strong></p>
              <p>That&apos;s it. Your nose is already good enough for that.</p>
              <p>The course gives you the framework. <strong>Your instincts do the rest.</strong></p>
          </section>

          <section style={{ padding: '0 0 64px' }}>
              <h2 style={{ marginBottom: 44, textAlign: 'center' }}>&quot;Will it smell as good as store-bought? Will it last on my skin?&quot;</h2>
              <p><strong>Yes — and you&apos;ll understand exactly why.</strong></p>
              <p>Store-bought perfumes aren&apos;t magic. They follow the same principles you&apos;ll learn in this course: <strong>balance, layering, and concentration.</strong></p>
              <p>The difference between a scent that fades in 20 minutes and one that lasts 8 hours comes down to a few simple choices: base note selection, oil-to-alcohol ratio, and curing time.</p>
          </section>

          {/* ANYONE CAN LEARN */}
          <section style={{ padding: '48px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 64 }}>Anyone can make perfume.</h2>
            <div style={{ maxWidth: 640, margin: '0 auto', fontSize: 20 }}>
              <p><span style={{ color: 'var(--gold)', fontWeight: 700 }}>&rarr; Even if you&apos;ve never blended anything before.</span> A simple step-by-step method that works with any ingredients, any skill level.</p>
              <p><span style={{ color: 'var(--gold)', fontWeight: 700 }}>&rarr; Even if you think perfume-making is too hard.</span> It&apos;s not. You just never had the right method.</p>

              <p><span style={{ color: 'var(--gold)', fontWeight: 700 }}>&rarr; Even if perfectionism usually stops you.</span> The best scents come from experimenting, not overthinking.</p>

              <p><span style={{ color: 'var(--gold)', fontWeight: 700 }}>&rarr; Even if you don&apos;t think of yourself as &quot;creative.&quot;</span> A few oils, a dropper, and 20 minutes. That&apos;s it.</p>
            </div>
          </section>

          {/* INSTRUCTOR */}
          <section className="instructor">
            <div className="instructor-img">
              <Image src="/hero2.jpg" alt="Claire Beaumont" width={440} height={550} sizes="(max-width: 768px) 400px, 420px" style={{ width: '100%', height: 'auto', borderRadius: 16 }} />
            </div>
            <div className="instructor-text">
              <h2>My name is Claire Beaumont.</h2>
              <p><strong>15+ years in fragrance.</strong> Trained with master perfumers in Grasse, France. Over <strong>200 original formulas</strong> created. Taught <strong>500+ students</strong> in real-life workshops to make their first perfume from scratch.</p>
              <p>I&apos;ve spent years learning the chemistry, the art, and the shortcuts that make perfume-making accessible to anyone.</p>
              <p>Best part about being a perfumer? Watching someone smell something they made themselves for the first time. <strong>That never gets old.</strong></p>
            </div>
          </section>

          {/* COURSE INTRO */}
          <section className="bonsai-center course-intro">
            <h2 style={{ marginBottom: 4, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 600 }}>Introducing: The Perfume<br />Masterclass</h2>
            <p style={{ fontStyle: 'italic', color: 'var(--ink-muted)' }}>L&apos;art du parfum: the art of fragrance</p>
          </section>

          {/* MODULES */}
          <section style={{ padding: '20px 0 40px' }}>
            <div className="bonsai-center" style={{ marginBottom: 24 }}>
              <Image className="hereswhatyouget-desktop" src="/hereiswhatyouget.jpg" alt="Here's what you get" width={800} height={400} sizes="700px" style={{ width: '100%', maxWidth: 700, height: 'auto', margin: '0 auto 24px' }} />
              <Image className="hereswhatyouget-mobile" src="/hereiswhatyouget_mobile.jpg" alt="Here's what you get" width={400} height={400} sizes="400px" style={{ width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto 24px' }} />
            </div>
            <h2 className="bonsai-center" style={{ marginTop: 86, marginBottom: 24 }}>&#10022; What&apos;s Inside &#10022;</h2>

            <div className="module-card">
              <div className="module-label">Module 1</div>
              <h3>Why $200 Perfumes Smell So Good (And How Yours Will Too)</h3>
              <div className="module-sub">The principles behind every great fragrance, broken down for beginners.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module1_fresh2.png" alt="Fragrance fundamentals" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; What makes a <strong>$200 perfume smell expensive</strong> and how to replicate it</li>
                  <li>&#10022; The <strong>fragrance pyramid</strong>: the structure behind every great scent</li>
                  <li>&#10022; Why <strong>3 notes layered right</strong> can outperform 40 random ingredients</li>
                  <li>&#10022; How to <strong>train your nose</strong> to pick the right combinations instantly</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 2</div>
              <h3>What Ingredients to Buy (And What&apos;s a Waste of Money)</h3>
              <div className="module-sub">Your complete shopping list and workspace setup.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module2_fresh.png" alt="Perfume ingredients and supplies" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; The <strong>$30 shopping list</strong> that replaces a $300 collection</li>
                  <li>&#10022; The <strong>5 essential oils every beginner should have</strong></li>
                  <li>&#10022; The <strong>drop-by-drop method</strong> that prevents ruining a batch</li>
                  <li>&#10022; <strong>Natural vs synthetic</strong>, the decision that determines everything</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 3</div>
              <h3>Your First Perfume: The Method Behind Every $200 Bottle</h3>
              <div className="module-sub">This is where raw ingredients become YOUR perfume. The moment that hooks you.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module3_fresh.png" alt="Blending perfume" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>visualize a fragrance</strong> before you add a single drop</li>
                  <li>&#10022; Your first <strong>before-and-after transformation</strong> with 3-5 ingredients</li>
                  <li>&#10022; The <strong>one blending mistake 80% of beginners make</strong> (and the fix)</li>
                  <li>&#10022; <strong>Quick adjustments</strong> to refine your blend from good to &quot;I can&apos;t believe I made this&quot;</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 4</div>
              <h3>The 8-Hour Scent: How To Make Your Perfume Last</h3>
              <div className="module-sub">The technique that gives perfumes their depth and longevity. Easier than it sounds.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module4_fresh.png" alt="Layering techniques" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; How to <strong>layer notes without muddying the scent</strong></li>
                  <li>&#10022; The right <strong>concentration</strong> for each note</li>
                  <li>&#10022; The <strong>over-blending mistake</strong> and exactly when to stop</li>
                  <li>&#10022; Create a scent that <strong>evolves over 8 hours</strong> from a 20-minute formula</li>
                </ul>
              </div>
            </div>

            <div className="module-card">
              <div className="module-label">Module 5</div>
              <h3>18 Iconic Scent Profiles: From James Bond to Unicorn Farts</h3>
              <div className="module-sub">Perfume recipes inspired by iconic characters, personalities, and vibes.</div>
              <div className="module-body">
                <div className="module-img"><Image src="/module5_newnew.jpg" alt="18 Iconic Scent Profiles" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>8 character-inspired formulas</strong>: James Bond, Barbie, Cleopatra, Gatsby, Wednesday Addams, Tony Montana, Catwoman, and Batman</li>
                  <li>&#10022; <strong>10 fun &amp; creative recipes</strong>: Unicorn Farts, Low Battery, Sugar Daddy, Old Money, Pillow Talk, Late Night Drive, Do Not Disturb, Stolen Kiss, Whiskey &amp; Wildflowers, and Heaven</li>
                  <li>&#10022; <strong>Full recipes with ingredient lists</strong> for every scent</li>
                  <li>&#10022; <strong>Tweak any formula</strong> to make it your own version</li>
                </ul>
              </div>
            </div>
          </section>


          {/* CTA after modules */}
          <section style={{ padding: '56px 0' }}>
            <div className="bonsai-center" style={{ marginBottom: 32 }}>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>You&apos;ve seen what&apos;s inside. Five modules. A complete system for choosing, blending, and perfecting custom fragrances at home.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>The full price for this course is <strong><s>$97</s></strong>.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>You&apos;re not going to pay that today. And the reason is simple.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>This is the first time I&apos;ve offered this course to the public. I want <strong>50 people</strong> to go through it. I want to read your emails, answer your questions, see where you get stuck and where you surprise yourself.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>That feedback is worth more to me right now than charging full price. Honestly, I also need to find out if I can handle 50 support inboxes without forgetting to eat.</p>
              <p style={{ maxWidth: 720, textAlign: 'left', fontSize: 24, margin: '0 auto 20px' }}>So for this first group, the price is <strong>dramatically lower</strong>. Once those 50 spots fill, this page comes down and the full price goes live.</p>
            </div>
            <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(58,99,71,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div className="price-old">Normally $97</div>
              <p id="get-access" className="now-only" style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
              <div className="price-note">One-time payment. <span className="lifetime-break" />Lifetime access.</div>
              <div style={{ marginTop: 20 }}><CheckoutButton /></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
                <p style={{ margin: 0, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap', color: 'var(--ink-muted)' }} className="guarantee-text">90-Day Money-Back Guarantee</p>
                <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
              </div>
              <p style={{ color: 'var(--ink-muted)', marginBottom: 12, marginTop: 20 }}>🔒 Secure payment 🔒</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
                <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              </div>
              <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
              <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
            </div>
          </section>

          {/* GUARANTEE */}
          <section className="guarantee-section">
            <Image src="/guarantee1.webp" alt="90-Day Money Back Guarantee" width={160} height={160} style={{ width: 130, height: 130, marginBottom: 16, margin: '0 auto 16px', display: 'block' }} />
            <h2 style={{ textAlign: 'center' }}>Try it risk-free</h2>
            <p style={{ fontSize: 20 }}><strong>You don&apos;t have to make the final decision now.</strong></p>
            <p style={{ textAlign: 'left', fontSize: 20 }}>Get access to the full course. Choose your first ingredients. Learn how to blend properly. Create your first signature scent. Watch your skills sharpen with every new batch.</p>
            <p style={{ textAlign: 'left', fontSize: 20 }}>If you don&apos;t love it, email hello@clairedoesperfumes.com within 90 days for a full refund. Within 24 hours. <strong>No questions asked.</strong></p>
          </section>

          <div className="bonsai-divider" />

          {/* BONUSES */}
          <section style={{ padding: '36px 0' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>But wait, there&apos;s more</p>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Order today and you also get:</h2>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 1</div><div className="bonus-value">$47 value</div></div>
              <h3>Bottle, Label, Gift: Make It Look Like It Came From a Boutique</h3>
              <div className="bonus-desc">The final step that separates amateurs from artisans.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/module5_fresh.png" alt="Bottling perfume" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; Why <strong>a fresh blend smells nothing like the finished product</strong></li>
                  <li>&#10022; <strong>Bottling demystified</strong>: preserving your fragrance for months</li>
                  <li>&#10022; The <strong>signs your blend needs more curing time</strong></li>
                  <li>&#10022; Choosing the right <strong>bottle and presentation</strong> for a professional finish</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 2</div><div className="bonus-value">$37 value</div></div>
              <h3>The Blend Perfector</h3>
              <div className="bonus-desc">Fine-tune any scent until it&apos;s exactly right.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus2_fresh.jpg" alt="The Blend Perfector" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>Scent fades in an hour?</strong> The 4 possible causes and fixes</li>
                  <li>&#10022; <strong>Smells different on skin vs paper?</strong> How to tell why in 30 seconds</li>
                  <li>&#10022; <strong>Top notes disappeared?</strong> The adjustment that restores them</li>
                  <li>&#10022; <strong>15+ common problems</strong> with step-by-step solutions</li>
                </ul>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-header"><div className="bonus-label">Bonus 3</div><div className="bonus-value">$27 value</div></div>
              <h3>Your Scent DNA Profile</h3>
              <div className="bonus-desc">Discover your scent personality and build a fragrance that&apos;s unmistakably yours.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/bonus3_fresh.png" alt="Your Scent DNA Profile" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>The scent personality quiz</strong> to find your 3 ideal fragrance families</li>
                  <li>&#10022; How to <strong>build your &quot;scent DNA&quot; profile</strong> from everyday smells</li>
                  <li>&#10022; The <strong>signature scent formula</strong>, a repeatable method that feels like &quot;you&quot;</li>
                  <li>&#10022; How to <strong>evolve your signature</strong> so it never feels stale</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FIRST STACK + CTA */}
          <section style={{ padding: '36px 0' }} id="pricing">
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>
            <div className="stack-row"><span className="label">&#10003; Bottle, Label, Gift</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; The Blend Perfector</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; Your Scent DNA Profile</span><span className="val">$27</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$250</span></div>
          </section>

          <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(58,99,71,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $97</div>
            <p className="now-only" style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
            <div className="price-note">One-time payment. <span className="lifetime-break" />Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
              <p style={{ margin: 0, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap', color: 'var(--ink-muted)' }} className="guarantee-text">90-Day Money-Back Guarantee</p>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
            </div>
            <p style={{ color: 'var(--ink-muted)', marginBottom: 12, marginTop: 20 }}>🔒 Secure payment 🔒</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
            </div>
            <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
            <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          <div className="bonsai-divider" />

          {/* MEGA BONUS */}
          <section style={{ padding: '192px 0 64px' }}>
            <p className="bonsai-center" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>One last thing...</p>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Order today and you also get:</h2>

            <div className="bonus-card mega">
              <div className="bonus-header"><div className="bonus-label">Mega Bonus</div><div className="bonus-value">$79 value</div></div>
              <h3>The Dupe Lab: Recreate 10 Iconic Perfumes at Home</h3>
              <div className="bonus-desc">The exact formulas to recreate the world&apos;s most popular fragrances for under $10 a bottle.</div>
              <div className="bonus-body">
                <div className="bonus-img"><Image src="/megabonus.jpg" alt="The Dupe Lab" fill style={{ objectFit: 'cover' }} /></div>
                <ul>
                  <li>&#10022; <strong>5 iconic women&apos;s fragrances</strong> inspired by Baccarat Rouge 540, Miss Dior, Chanel No. 5, and more</li>
                  <li>&#10022; <strong>5 iconic men&apos;s fragrances</strong> inspired by Dior Sauvage, Bleu de Chanel, Tom Ford Oud Wood, and more</li>
                  <li>&#10022; <strong>Full ingredient lists and cost breakdowns</strong> for each formula</li>
                  <li>&#10022; How to <strong>tweak each recipe to make it your own</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bonsai-divider" />

          {/* FAQ */}
          <section style={{ padding: '40px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 24 }}>Frequently Asked Questions</h2>
            <FaqAccordion />
          </section>

          <div className="bonsai-divider" />

          {/* SECOND STACK + CTA */}
          <section style={{ padding: '36px 0' }}>
            <h2 className="bonsai-center" style={{ marginBottom: 18 }}>Here&apos;s everything you get:</h2>
            <div className="stack-row stack-total"><span className="label">&#10003; 5 Core Modules</span><span className="val">$139</span></div>
            <div className="stack-row"><span className="label">&#10003; Bottle, Label, Gift</span><span className="val">$47</span></div>
            <div className="stack-row"><span className="label">&#10003; The Blend Perfector</span><span className="val">$37</span></div>
            <div className="stack-row"><span className="label">&#10003; Your Scent DNA Profile</span><span className="val">$27</span></div>
            <div className="stack-row"><span className="label">&#10003; The Dupe Lab: 10 Iconic Perfume Formulas</span><span className="val">$79</span></div>
            <div className="stack-row" style={{ borderBottom: 'none' }}><span className="label" style={{ fontWeight: 700, color: 'var(--ink)' }}>Total Value</span><span className="val" style={{ fontSize: 16 }}>$329</span></div>
          </section>

          <div className="checkout-box" style={{ maxWidth: 520, margin: '0 auto', padding: '40px 44px', borderRadius: 14, border: '2px solid rgba(58,99,71,0.25)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div className="price-old">Normally $97</div>
            <p className="now-only" style={{ fontSize: 44, color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>Now Only <span style={{ color: 'var(--gold)' }}>$47</span></p>
            <div className="price-note">One-time payment. <span className="lifetime-break" />Lifetime access.</div>
            <div style={{ marginTop: 20 }}><CheckoutButton /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
              <p style={{ margin: 0, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap', color: 'var(--ink-muted)' }} className="guarantee-text">90-Day Money-Back Guarantee</p>
              <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.12)' }} />
            </div>
            <p style={{ color: 'var(--ink-muted)', marginBottom: 12, marginTop: 20 }}>🔒 Secure payment 🔒</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Image src="/visa.svg" alt="Visa" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/mastercard.svg" alt="Mastercard" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/american-express.svg" alt="Amex" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/discover.svg" alt="Discover" width={40} height={26} style={{ height: 26, width: 'auto' }} />
              <Image src="/paypal.svg" alt="PayPal" width={40} height={26} style={{ height: 26, width: 'auto' }} />
            </div>
            <div style={{ width: 48, height: 1, background: 'rgba(0,0,0,0.1)', margin: '20px auto' }} />
            <p className="ps-note">P.S. If the next page doesn&apos;t load... I&apos;m sorry, but the deal has ended!</p>
          </div>

          <div className="bonsai-divider" />


        </div>
      </div>

      {/* FOOTER */}
      <footer className="bonsai-footer" style={{ paddingBottom: 100 }}>
        <p>&copy; 2026 Claire Does Perfumes. All rights reserved.</p>
        <p style={{ marginTop: 5 }}><a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a></p>
        <p style={{ marginTop: 16, fontSize: 11, color: '#8a7f72', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.5 }}>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
      </footer>
    </main>
  );
}
