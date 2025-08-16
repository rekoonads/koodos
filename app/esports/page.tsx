import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Zap, Target, Crown } from "lucide-react"
import { AnimatedBackground } from "@/components/graphics/animated-background"

export default function EsportsPage() {
  const tournaments = [
    {
      title: "League of Legends World Championship 2024",
      status: "Live",
      prize: "$2.2M",
      teams: 16,
      viewers: "2.1M",
      game: "League of Legends",
    },
    {
      title: "CS2 Major Championship",
      status: "Upcoming",
      prize: "$1.25M",
      teams: 24,
      viewers: "850K",
      game: "Counter-Strike 2",
    },
    {
      title: "Valorant Champions Tour",
      status: "Ongoing",
      prize: "$1M",
      teams: 12,
      viewers: "1.3M",
      game: "Valorant",
    },
  ]

  const esportsContent = [
    {
      title: "Tournament Coverage",
      icon: <Trophy className="w-6 h-6" />,
      description: "Live coverage and analysis of major esports tournaments across all popular games",
      color: "from-yellow-600 to-orange-600",
    },
    {
      title: "Team Profiles",
      icon: <Users className="w-6 h-6" />,
      description: "In-depth profiles of professional esports teams and player interviews",
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Event Calendar",
      icon: <Calendar className="w-6 h-6" />,
      description: "Stay updated with upcoming tournaments, matches, and esports events",
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Pro Player Stats",
      icon: <Target className="w-6 h-6" />,
      description: "Detailed statistics and performance analysis of top esports athletes",
      color: "from-red-600 to-pink-600",
    },
    {
      title: "Live Streams",
      icon: <Zap className="w-6 h-6" />,
      description: "Watch live tournaments and matches from the biggest esports events",
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "Championship History",
      icon: <Crown className="w-6 h-6" />,
      description: "Complete records and history of major esports championships and winners",
      color: "from-orange-600 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <main className="bg-gray-900 min-h-screen relative">
            <AnimatedBackground />
            <div className="relative bg-gradient-to-r from-red-900/50 via-purple-900/50 to-pink-900/50 py-16 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                  <h1 className="text-4xl font-bold text-white">Esports</h1>
                  <Crown className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-xl text-gray-200 mb-6">
                  Competitive gaming at its finest - Tournament coverage, team profiles, and championship insights
                </p>
                <div className="flex items-center justify-center gap-8 text-gray-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">24/7</div>
                    <div className="text-sm">Live Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">500+</div>
                    <div className="text-sm">Tournaments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">10M+</div>
                    <div className="text-sm">Viewers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 relative z-10">
              <div className="border-b-2 border-red-500 pb-2 inline-block mb-6">
                <h2 className="text-2xl font-bold text-white">Live Tournaments</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {tournaments.map((tournament, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-red-500/20 transition-all"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={`${
                            tournament.status === "Live"
                              ? "bg-red-600 text-white animate-pulse"
                              : tournament.status === "Upcoming"
                                ? "bg-blue-600 text-white"
                                : "bg-green-600 text-white"
                          } font-bold`}
                        >
                          {tournament.status}
                        </Badge>
                        <div className="text-yellow-400 font-bold">{tournament.prize}</div>
                      </div>
                      <CardTitle className="text-white text-lg">{tournament.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>Game:</span>
                          <span className="text-purple-400">{tournament.game}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Teams:</span>
                          <span>{tournament.teams}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Viewers:</span>
                          <span className="text-red-400">{tournament.viewers}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="border-b-2 border-red-500 pb-2 inline-block mb-6">
                <h2 className="text-2xl font-bold text-white">Esports Coverage</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {esportsContent.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-red-500/20 transition-all group overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>{item.icon}</div>
                      </div>
                      <CardTitle className="text-white group-hover:text-red-300 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
