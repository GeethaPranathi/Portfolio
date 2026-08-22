import { ArrowRight, Code2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import liveStats from "@/data/live-stats.json";

export function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "@GeethaPranathi",
      link: "https://leetcode.com/u/GeethaPranathi/",
      stats: [
        { label: "Problems Solved", value: liveStats.leetcode.totalSolved.toString() },
        { label: "Easy / Medium / Hard", value: `${liveStats.leetcode.easySolved} / ${liveStats.leetcode.mediumSolved} / ${liveStats.leetcode.hardSolved}` },
        { label: "Global Ranking", value: liveStats.leetcode.ranking.toLocaleString() },
      ]
    },
    {
      platform: "GitHub",
      username: "@GeethaPranathi",
      link: "https://github.com/GeethaPranathi",
      stats: [
        { label: "Repositories", value: liveStats.github.publicRepos.toString() },
        { label: "Followers", value: liveStats.github.followers.toString() },
      ]
    },
    {
      platform: "GeeksforGeeks",
      username: "@pranathika3pq",
      link: "https://www.geeksforgeeks.org/profile/pranathika3pq",
      stats: [
        { label: "Problems Solved", value: liveStats.geeksforgeeks.problemsSolved.toString() },
        { label: "Coding Score", value: liveStats.geeksforgeeks.codingScore.toString() },
      ]
    }
  ];

  return (
    <Section id="coding-profiles">
      <SectionHeading 
        eyebrow="Coding Profiles" 
        title="Track My Coding Journey" 
        description="Explore my coding activity and problem-solving progress. The stats below are automatically fetched directly from each platform." 
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.platform} className="glass card-hover flex flex-col justify-between rounded-2xl p-6 relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-amber/15 text-amber flex size-10 items-center justify-center rounded-xl">
                  <Code2 className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground/90">{profile.platform}</h3>
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground">{profile.username}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 relative z-10">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                    <span className="font-mono text-xs font-semibold text-foreground/80">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={profile.link}
              target="_blank" 
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-secondary/50 px-4 py-2.5 text-xs font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground relative z-10"
            >
              View Profile <ArrowRight className="size-3.5" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
