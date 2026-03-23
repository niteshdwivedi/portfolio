import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartColumnBig } from "lucide-react";
import { analyticsTrend, datasetInsights, pipelineFlow, spotlightCards } from "./data";
import { FeatureCard, Pill, SoftCard } from "./components";

const palette = ["#22d3ee", "#ff7a59", "#f4c26b", "#38bdf8"];

function AnalyticsSection({ theme, styles }) {
  return (
    <section id="analytics" className="section-shell mt-24">
      <div className="mb-10">
        <div className="section-kicker">Data Analytics Dashboard</div>
        <h2 className="section-title">Interactive visuals for a data-first portfolio narrative.</h2>
        <p className={`mt-4 max-w-3xl text-base leading-7 ${styles.muted}`}>
          This section feels like a live analytics workspace: performance trends, pipeline maturity, and skill distribution through recruiter-friendly charts.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SoftCard className="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-primary-300">Performance Trend</div>
              <h3 className="mt-2 text-2xl font-bold">Engineering + analytics growth</h3>
            </div>
            <Pill className={styles.pill}>Recharts</Pill>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsTrend}>
                <defs>
                  <linearGradient id="performanceFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="pipelineFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff7a59" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#ff7a59" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#1e293b" : "#cbd5e1"} />
                <XAxis dataKey="month" stroke={theme === "dark" ? "#94a3b8" : "#475569"} />
                <YAxis stroke={theme === "dark" ? "#94a3b8" : "#475569"} />
                <Tooltip contentStyle={tooltipStyle(theme)} />
                <Area type="monotone" dataKey="performance" stroke="#22d3ee" strokeWidth={3} fill="url(#performanceFill)" />
                <Area type="monotone" dataKey="pipeline" stroke="#ff7a59" strokeWidth={3} fill="url(#pipelineFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SoftCard>

        <SoftCard className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.24em] text-primary-300">Skill Mix</div>
          <h3 className="mt-2 text-2xl font-bold">Focus areas across engineering and analytics</h3>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={datasetInsights} dataKey="value" nameKey="name" innerRadius={58} outerRadius={98} paddingAngle={4}>
                  {datasetInsights.map((entry, index) => (
                    <Cell key={entry.name} fill={palette[index % palette.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle(theme)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {datasetInsights.map((item, index) => (
              <div key={item.name} className="flex items-center gap-3 text-sm">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: palette[index % palette.length] }} />
                <span>{item.name}</span>
                <span className={`ml-auto ${styles.subtle}`}>{item.value}%</span>
              </div>
            ))}
          </div>
        </SoftCard>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <SoftCard className="p-6 md:p-8">
          <div className="text-sm uppercase tracking-[0.24em] text-primary-300">Pipeline Maturity</div>
          <h3 className="mt-2 text-2xl font-bold">End-to-end data workflow readiness</h3>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineFlow} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#1e293b" : "#cbd5e1"} />
                <XAxis type="number" stroke={theme === "dark" ? "#94a3b8" : "#475569"} />
                <YAxis type="category" dataKey="stage" width={90} stroke={theme === "dark" ? "#94a3b8" : "#475569"} />
                <Tooltip contentStyle={tooltipStyle(theme)} />
                <Bar dataKey="score" radius={[0, 14, 14, 0]}>
                  {pipelineFlow.map((entry, index) => (
                    <Cell key={entry.stage} fill={palette[index % palette.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SoftCard>

        <SoftCard className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-primary-300">Big Data Spotlight</div>
              <h3 className="mt-2 text-2xl font-bold">Projects and skills ready for data-heavy teams</h3>
            </div>
            <ChartColumnBig className="h-8 w-8 text-primary-300" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {spotlightCards.map((card) => (
              <FeatureCard key={card.title} title={card.title} text={card.text} theme={theme} />
            ))}
          </div>
        </SoftCard>
      </div>
    </section>
  );
}

function tooltipStyle(theme) {
  return {
    background: theme === "dark" ? "#06131f" : "#ffffff",
    borderRadius: "16px",
    border: `1px solid ${theme === "dark" ? "#1e293b" : "#e2e8f0"}`,
  };
}

export default AnalyticsSection;
