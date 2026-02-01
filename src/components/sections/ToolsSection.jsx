import { motion } from 'framer-motion'

const toolsData = {
  mainPlatform: {
    title: "🌐 Main Platform",
    icon: "🌐",
    items: [
      { name: "100xSolutions Home", url: "https://100xsolutions.live/" }
    ]
  },
  career: {
    title: "🎓 Career • Skills • Decisions",
    icon: "🎓",
    items: [
      { name: "Placement Probability Meter", url: "https://placement-probability-meter.100xsolutions.live/" },
      { name: "Career Switch Risk Calculator", url: "https://career-switch-risk-calculator.100xsolutions.live/" },
      { name: "Reality-Based Income Path Finder", url: "https://reality-based-income-path-finder.100xsolutions.live/" },
      { name: "Future Skill Gap Visualizer", url: "https://future-skill-gap-visualizer.100xsolutions.live/" },
      { name: "Time-to-Goal Money Visualizer", url: "https://time-to-goal-money-visualizer.100xsolutions.live/" },
      { name: "Get-Rich-Fast Reality Simulator", url: "https://get-rich-fast-reality-simulator.100xsolutions.live/" },
      { name: "Desire Cycle Explainer", url: "https://desire-cycle-explainer.100xsolutions.live/" }
    ]
  },
  finance: {
    title: "📊 Finance • Markets • Risk Awareness",
    icon: "📊",
    items: [
      { name: "Retail Investor Mistake Simulator", url: "https://retail-investor-mistake-simulator.100xsolutions.live/" },
      { name: "Sentiment vs Data Visualizer", url: "https://sentiment-vs-data-visualizer.100xsolutions.live/" },
      { name: "Market Difference Visualizer", url: "https://market-diff-visualizer.100xsolutions.live/" },
      { name: "Best Exchange Rate Today", url: "https://best-exchange-rate-today.100xsolutions.live/" },
      { name: "Passive Income Tax Estimator", url: "https://passive-income-tax-estimator.100xsolutions.live/" },
      { name: "Silent Risk Exposure Map", url: "https://silent-risk-exposure-map.100xsolutions.live/" },
      { name: "Macro Reality Tool", url: "https://macro-reality-tool.100xsolutions.live/" }
    ]
  },
  youtube: {
    title: "🎥 YouTube • Creator Tools",
    icon: "🎥",
    items: [
      { name: "YouTube Revenue Calculator", url: "https://youtube-revenue-calculator.100xsolutions.live/" },
      { name: "YouTube Tags Generator", url: "https://youtube-tags-generator.100xsolutions.live/" },
      { name: "YouTube Title Tester", url: "https://youtube-title-tester.100xsolutions.live/" }
    ]
  },
  psychology: {
    title: "🧠 Psychology • Attention • Reality Checks",
    icon: "🧠",
    items: [
      { name: "Attention Hijack Meter", url: "https://attention-hijack-meter.100xsolutions.live/" },
      { name: "Beauty ROI Calculator", url: "https://beauty-roi-calculator.100xsolutions.live/" }
    ]
  },
  developer: {
    title: "🧩 Developer • Utility Tools",
    icon: "🧩",
    items: [
      { name: "API Visualizer", url: "https://api-visualizer.100xsolutions.live/" },
      { name: "Regex Explainer", url: "https://regex-explainer.100xsolutions.live/" },
      { name: "Crop Photo Tool", url: "https://crop-photo.100xsolutions.live/" },
      { name: "Apology Message Generator", url: "https://apology-message-generator.100xsolutions.live/" }
    ]
  },
  information: {
    title: "📰 Information • Context • News",
    icon: "📰",
    items: [
      { name: "Top 5 News", url: "https://top5-news.100xsolutions.live/" },
      { name: "Historical Context Checker", url: "https://historical-context-checker.100xsolutions.live/" }
    ]
  },
  health: {
    title: "🥗 Health • Lifestyle • Environment",
    icon: "🥗",
    items: [
      { name: "Daily Food Plan Generator", url: "https://daily-food-plan-generator.100xsolutions.live/" },
      { name: "Daily Health Risk Signal", url: "https://daily-health-risk-signal.100xsolutions.live/" },
      { name: "Micro-Climate Lifestyle Planner", url: "https://micro-climate-lifestyle-planner.100xsolutions.live/" },
      { name: "Today Weather Risk", url: "https://today-weather-risk.100xsolutions.live/" }
    ]
  },
  govtLegal: {
    title: "⚖️ Government & Legal Navigation",
    icon: "🏛️",
    items: [
      { name: "Which Govt Office to Approach", url: "https://which-govt-office-to-approach.100xsolutions.live/" },
      { name: "RTI Helper", url: "https://rti-helper.100xsolutions.live/" },
      { name: "Know Your Law – India", url: "https://know-your-law-india.100xsolutions.live/" },
      { name: "Legal Awareness Decision Tree", url: "https://legal-awareness-decision-tree.100xsolutions.live/" }
    ]
  },
  policeTraffic: {
    title: "🚓 Police • Traffic • Case Handling",
    icon: "🚓",
    items: [
      { name: "Police Interaction Guide (India)", url: "https://police-interaction-guide-india.100xsolutions.live/" },
      { name: "Traffic Stop Rights & Fines Checker", url: "https://traffic-stop-rights-and-fines-checker.100xsolutions.live/" },
      { name: "Case Timeline Tool", url: "https://case-timeline.100xsolutions.live/" }
    ]
  },
  citizenProtection: {
    title: "🛡️ Citizen Protection & Rights",
    icon: "🛡️",
    items: [
      { name: "Consumer Complaint Pathfinder", url: "https://consumer-complaint-pathfinder.100xsolutions.live/" },
      { name: "Student Rights & College Issue Resolver", url: "https://student-rights-and-college-issue-resolver-india.100xsolutions.live/" },
      { name: "Senior Citizen Protection Guide", url: "https://senior-citizen-protection-guide.100xsolutions.live/" },
      { name: "Men Legal Protection Guide", url: "https://men-legal-protection-guide.100xsolutions.live/" },
      { name: "Office Trouble Resolver", url: "https://office-trouble-resolver.100xsolutions.live/" },
      { name: "Online Scam & Cyber Issue Helper", url: "https://online-scam-and-cyber-issue-helper.100xsolutions.live/" }
    ]
  }
}

export default function ToolsSection() {
  const categories = Object.values(toolsData)

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background via-background/90 to-black overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-primaryGlow/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGlow to-accent">
              100xSolutions
            </span>
            <span className="text-white"> Tools Directory</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-softText/70 max-w-3xl mx-auto leading-relaxed"
          >
            A growing collection of practical, reality-based tools built to help students, creators, professionals, 
            and citizens make better decisions in careers, finance, law, and life.
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                className="mb-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-primaryGlow to-accent rounded-full mt-2" />
              </motion.div>

              {/* Tools Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((tool, toolIndex) => (
                  <motion.a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + toolIndex * 0.05 + 0.3 }}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: '#00ffff',
                      boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
                    }}
                    className="group bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-primaryGlow/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primaryGlow/10 rounded-lg flex items-center justify-center group-hover:bg-primaryGlow/20 transition-colors">
                        <svg className="w-5 h-5 text-primaryGlow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm group-hover:text-primaryGlow transition-colors line-clamp-2">
                          {tool.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-softText/40 group-hover:text-primaryGlow/60 transition-colors">
                            Launch Tool →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primaryGlow/10 to-accent/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
            <div className="text-4xl mb-4">📌</div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
            <p className="text-softText/80 text-lg leading-relaxed">
              100xSolutions is about building tools that expose reality, reduce confusion, 
              and help people make better decisions in careers, money, law, and life.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center"
        >
          <p className="text-softText/60 text-sm mb-4">⭐ If you find these tools useful, consider:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/5 px-4 py-2 rounded-full text-softText/70 border border-white/10">
              ⭐ Starring the repository
            </span>
            <span className="bg-white/5 px-4 py-2 rounded-full text-softText/70 border border-white/10">
              💬 Sharing feedback & feature ideas
            </span>
            <span className="bg-white/5 px-4 py-2 rounded-full text-softText/70 border border-white/10">
              🤝 Contributing new tools or improvements
            </span>
          </div>
          <p className="text-softText/40 text-xs mt-6">
            Built with focus. Scaled with reality.
          </p>
        </motion.div>
      </div>
    </section>
  )
}