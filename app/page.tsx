export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          HR &amp; Hiring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Aggregate Interview Feedback,{" "}
          <span className="text-[#58a6ff]">Make Better Hires</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Centralize structured feedback from every interviewer, every round — then let AI surface a clear hiring recommendation so your team decides faster and fairer.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📋", title: "Structured Forms", desc: "Interviewers fill consistent scorecards so feedback is always comparable." },
          { icon: "🤖", title: "AI Recommendations", desc: "GPT-powered summaries highlight strengths, gaps, and a hire/no-hire signal." },
          { icon: "📊", title: "Unified Dashboard", desc: "All rounds, all scores, all comments in one place for the hiring manager." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited interview rounds",
              "Up to 20 interviewers per round",
              "AI-powered hiring recommendations",
              "Email invitations & reminders",
              "Decision audit trail",
              "CSV export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do interviewers submit feedback?",
              a: "They receive a unique email link to a structured scorecard. No account needed — they fill it out and submit in minutes."
            },
            {
              q: "How does the AI recommendation work?",
              a: "After all feedback is collected, the system summarizes scores and comments using GPT and produces a hire/no-hire recommendation with reasoning."
            },
            {
              q: "Can I export the feedback data?",
              a: "Yes. Every interview round can be exported as a CSV for your ATS or internal records."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Interview Feedback Aggregator. All rights reserved.
      </footer>
    </main>
  );
}
