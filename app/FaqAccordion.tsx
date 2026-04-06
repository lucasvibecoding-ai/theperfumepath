'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any experience with perfume or fragrance?',
    a: "None at all. This course is built for complete beginners, including people who've never smelled an essential oil outside of a candle store. Module 1 starts by teaching you how scent works and walks you through your very first blend step by step.",
  },
  {
    q: 'How much does everything cost to get started?',
    a: "Under $35 total. A starter set of essential oils ($15-20), carrier oil ($5-8), and a few small bottles ($5-7). The course includes a complete shopping guide with links. You do NOT need expensive niche ingredients or professional lab equipment.",
  },
  {
    q: 'Will you tell me which ingredients to buy and where to get them?',
    a: "Yes. Module 2 walks you through exactly which oils to start with based on the scent profiles you're drawn to. It also includes a shopping guide with specific links so you know exactly where to buy everything and what to avoid.",
  },
  {
    q: 'Can I make perfume in a small apartment with no special setup?',
    a: "Yes. All you need is a table, good ventilation (an open window works), and the ingredients. No lab, no special room, no expensive equipment. Most of our students blend at their kitchen table or desk.",
  },
  {
    q: 'Will this work with ingredients available in my country?',
    a: "Yes. The essential oils and carrier oils used in this course are available worldwide through online retailers. The course covers both natural and synthetic options, and the shopping guide includes international suppliers. If you can order online, you can get everything you need.",
  },
  {
    q: 'How much time does each blending session take?',
    a: "Your first blend takes about 30-45 minutes including setup. After that, most sessions are 15-20 minutes. Curing happens on its own over 48 hours — you just let it sit. It's one of the most rewarding creative hobbies for the time invested.",
  },
  {
    q: 'How long until my perfume actually smells professional?',
    a: 'Your first blending session produces something you\'ll want to wear. That happens in one afternoon, not one year. Going from "random mix of oils" to "people ask what I\'m wearing" can happen on day one with the right formula. Depth and complexity build with practice, but the initial "wow" moment is immediate.',
  },
  {
    q: "I have a terrible sense of smell. Can I still do this?",
    a: "Unless you have a medical condition affecting your smell, your nose is far more capable than you think. Most people simply haven't trained it. The Scent Journal bonus includes daily exercises that sharpen your ability to detect and distinguish notes. Within a week, you'll notice scents you never picked up before.",
  },
  {
    q: 'What if my blend turns out terrible?',
    a: "The Troubleshooting Guide covers every common mistake so you can fix or salvage almost any blend. But honestly, even experienced perfumers create duds. It's part of the process. That's exactly why we start you with affordable ingredients. A failed $3 experiment is a lesson, not a disaster. And the next one will be better because of what you learned.",
  },
  {
    q: "What's the refund policy?",
    a: "90-day money-back guarantee. Try the entire course. Choose your ingredients. Make your first blends. If you don't love it, email us within 90 days and we'll refund you in full. No questions asked. No hoops.",
  },
  {
    q: 'How is the content delivered?',
    a: "Instant access to our private course platform. All video lessons and downloadable PDFs organized by module. Watch on any device: phone, tablet, or computer. Lifetime access, so go at your own pace. There's no schedule and no expiration.",
  },
  {
    q: 'Is it safe to purchase online?',
    a: "Yes. Payments are processed through Stripe, the same secure payment platform used by millions of businesses worldwide (including Amazon, Google, and Shopify). We never see your card details.",
  },
  {
    q: 'Have a specific question?',
    a: "Email us at hello@theperfumepath.com and we'll get back to you as soon as possible.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            type="button"
          >
            <span className="faq-q-text">{faq.q}</span>
            <span className={`faq-icon ${openIndex === i ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <div className="faq-answer-inner">
              <p className="faq-a">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
