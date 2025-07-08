import React, { useState } from 'react';
import { 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { 
  DollarSign, 
  Clock, 
  Play
} from 'lucide-react';
import { categories, tools, getTotalCost } from '@/data/dashboard';

const COLORS = ['#a855f7', '#818cf8', '#60a5fa'];
const CATEGORY_COLORS = {
  'ai': '#a855f7',        // purple-400
  'infrastructure': '#818cf8', // indigo-400  
  'production': '#60a5fa'  // blue-400
};

export const TempestCostDashboard: React.FC = () => {
  const totalCost = getTotalCost();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);
  
  const chartData = filteredTools
    .map(tool => ({
      name: tool.name,
      cost: tool.cost,
      category: tool.category,
      fill: CATEGORY_COLORS[tool.category as keyof typeof CATEGORY_COLORS]
    }))
    .sort((a, b) => b.cost - a.cost);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 md:py-28 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-300">COST BREAKDOWN ANALYSIS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">${totalCost.toFixed(2)}</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-gray-300">NETFLIX + TWITCH + ADTECH</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A complete financial breakdown of our 30-day hackathon build — 
            <span className="text-blue-400"> every tool, every service, every dollar accounted for</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-8 text-center border border-neutral-800/50 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-400/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                  ${totalCost.toFixed(2)}
                </div>
              </div>
              <div className="text-lg font-medium text-white">Total Cost</div>
            </div>
            
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-8 text-center border border-neutral-800/50 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="w-16 h-16 bg-purple-400/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                  30 Days
                </div>
              </div>
              <div className="text-lg font-medium text-white">Time to Build</div>
            </div>
            
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-8 text-center border border-neutral-800/50 hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105 md:col-span-3 lg:col-span-1">
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="w-16 h-16 bg-indigo-400/10 rounded-full flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-indigo-400 mb-2">
                  Netflix + Twitch + AdTech
                </div>
              </div>
              <div className="text-lg font-medium text-white">Interactive Streaming Platform</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full">
        <div className="max-w-6xl mx-auto px-6 py-12">
          
          {/* Compact Chart Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-light text-black mb-2">Cost Breakdown</h2>
              <p className="text-lg text-black/60">Every dollar accounted for</p>
            </div>
            
            {/* Main Cost Breakdown Visual */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Category Donut Chart */}
              <div className="flex justify-center">
                <div className="relative z-10">
                  <ResponsiveContainer width={320} height={320}>
                    <PieChart>
                      <Pie
                        data={categories}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={120}
                        paddingAngle={0}
                        dataKey="total"
                        strokeWidth={2}
                        stroke="#ffffff"
                        startAngle={90}
                        endAngle={450}
                      >
                        {categories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value, name, props) => [
                          `$${value} (${((value / totalCost) * 100).toFixed(1)}%)`,
                          props.payload.name
                        ]}
                        contentStyle={{
                          backgroundColor: 'black',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '500',
                          padding: '8px 12px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Central Total */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-light text-black mb-1">$703.36</div>
                      <div className="text-xs text-black/60 uppercase tracking-wider">Total Cost</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#a855f7' }} />
                    <span className="text-xl">🧠</span>
                    <div>
                      <h3 className="font-medium text-black">AI Tools</h3>
                      <p className="text-sm text-black/60">33.5% of total</p>
                    </div>
                  </div>
                  <div className="text-xl font-light text-black">$236.00</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-black/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#818cf8' }} />
                    <span className="text-xl">🏗️</span>
                    <div>
                      <h3 className="font-medium text-black">Application Infrastructure</h3>
                      <p className="text-sm text-black/60">29.6% of total</p>
                    </div>
                  </div>
                  <div className="text-xl font-light text-black">$208.37</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-black/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#60a5fa' }} />
                    <span className="text-xl">🎬</span>
                    <div>
                      <h3 className="font-medium text-black">Brand/Video Production</h3>
                      <p className="text-sm text-black/60">36.9% of total</p>
                    </div>
                  </div>
                  <div className="text-xl font-light text-black">$258.99</div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Cost Comparison Chart */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-light text-black mb-2">Tool Cost Comparison</h2>
              <p className="text-lg text-black/60">Interactive comparison of all tools by cost</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                All Tools
              </button>
              <button
                onClick={() => setSelectedCategory('ai')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'ai'
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                🤖 AI Tools
              </button>
              <button
                onClick={() => setSelectedCategory('infrastructure')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'infrastructure'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                🏗️ Infrastructure
              </button>
              <button
                onClick={() => setSelectedCategory('production')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'production'
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                🎬 Production
              </button>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-black/10">
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 11 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name, props) => [
                      `$${value}`,
                      props.payload.name
                    ]}
                    labelFormatter={(label) => `Tool: ${label}`}
                    contentStyle={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      padding: '8px 12px'
                    }}
                  />
                  <Bar dataKey="cost" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-black">
                  {filteredTools.length}
                </div>
                <div className="text-sm text-black/60">
                  {selectedCategory === 'all' ? 'Total Tools' : 'Tools in Category'}
                </div>
              </div>
              <div className="bg-black/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-black">
                  ${filteredTools.reduce((sum, tool) => sum + tool.cost, 0).toFixed(2)}
                </div>
                <div className="text-sm text-black/60">
                  {selectedCategory === 'all' ? 'Total Cost' : 'Category Cost'}
                </div>
              </div>
              <div className="bg-black/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-black">
                  ${filteredTools.length > 0 ? (filteredTools.reduce((sum, tool) => sum + tool.cost, 0) / filteredTools.length).toFixed(2) : '0.00'}
                </div>
                <div className="text-sm text-black/60">Average Cost</div>
              </div>
            </div>
          </section>

          {/* Category Deep Dives - Individual Tool Cards */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-light text-black mb-2">Category Deep Dives</h2>
              <p className="text-lg text-black/60">Detailed breakdown of each tool</p>
            </div>
            
            <div className="space-y-12">
              {/* AI CREATION LAYER */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h3 className="text-2xl font-medium text-black">AI TOOLS</h3>
                    <p className="text-base text-black/60">$236.00 total</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Claude Code Pro */}
                  <div className="border border-purple-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-purple-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Claude Code Pro</h4>
                          <p className="text-sm text-black/60">AI coding assistant</p>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">$100.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Code generation: Unlimited</li>
                          <li>• Context window: 200k tokens</li>
                          <li>• Projects: Multiple workspaces</li>
                          <li>• What we used it for: Wrote 50,000+ lines of production code</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* MidJourney */}
                  <div className="border border-purple-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-purple-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">MidJourney</h4>
                          <p className="text-sm text-black/60">AI image generation</p>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">$96.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Image generation: Unlimited</li>
                          <li>• Commercial usage rights: Yes</li>
                          <li>• Concurrent jobs: Multiple</li>
                          <li>• What we used it for: Created 3 complete brand identities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="border border-purple-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-purple-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Cursor</h4>
                          <p className="text-sm text-black/60">AI code editor</p>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">$20.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• AI completions: Unlimited</li>
                          <li>• GPT-4 access: Included</li>
                          <li>• Codebase indexing: Full</li>
                          <li>• What we used it for: 10x faster code editing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bolt.new */}
                  <div className="border border-purple-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-purple-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Bolt.new</h4>
                          <p className="text-sm text-black/60">Full-stack platform</p>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">$20.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Full-stack deployment: Yes</li>
                          <li>• Live preview: Real-time</li>
                          <li>• Database included: Yes</li>
                          <li>• What we used it for: Rapid prototyping and deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Google AI Pro */}
                  <div className="border border-purple-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-purple-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Google AI Pro</h4>
                          <p className="text-sm text-black/60">AI video generation</p>
                        </div>
                        <span className="text-lg font-semibold text-yellow-600">$0.00*</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Gemini 1.5 Pro: Included</li>
                          <li>• Video generation: VEO3 access</li>
                          <li>• Image generation: Imagen 3</li>
                          <li>• What we used it for: Generated 13 professional video ads</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INFRASTRUCTURE */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <h3 className="text-2xl font-medium text-black">APPLICATION INFRASTRUCTURE</h3>
                    <p className="text-base text-black/60">$208.37 total</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Convex */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Convex</h4>
                          <p className="text-sm text-black/60">Backend platform</p>
                        </div>
                        <span className="text-lg font-semibold text-indigo-600">$45.60</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Database: Real-time sync</li>
                          <li>• Functions: Serverless</li>
                          <li>• Bandwidth: 5GB included</li>
                          <li>• What we used it for: Real-time chat and data sync</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Cloudflare */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Cloudflare</h4>
                          <p className="text-sm text-black/60">CDN & streaming</p>
                        </div>
                        <span className="text-lg font-semibold text-indigo-600">$55.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• CDN: Global network</li>
                          <li>• Video streaming: Yes</li>
                          <li>• Analytics: Included</li>
                          <li>• What we used it for: Global video delivery</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* GitHub Pro */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">GitHub Pro</h4>
                          <p className="text-sm text-black/60">Code hosting</p>
                        </div>
                        <span className="text-lg font-semibold text-indigo-600">$48.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Private repos: Unlimited</li>
                          <li>• GitHub Copilot: Included</li>
                          <li>• Actions minutes: 3,000/mo</li>
                          <li>• What we used it for: Version control + AI pair programming</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Clerk */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Clerk</h4>
                          <p className="text-sm text-black/60">Authentication</p>
                        </div>
                        <span className="text-lg font-semibold text-indigo-600">$25.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Monthly active users: 10,000</li>
                          <li>• Auth providers: All major</li>
                          <li>• Admin dashboard: Yes</li>
                          <li>• What we used it for: User signup, login, sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Vercel */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Vercel</h4>
                          <p className="text-sm text-black/60">Edge hosting</p>
                        </div>
                        <span className="text-lg font-semibold text-indigo-600">$20.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Bandwidth: 1TB</li>
                          <li>• Serverless functions: Yes</li>
                          <li>• Team members: 1</li>
                          <li>• What we used it for: Zero-config deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Domain */}
                  <div className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Domain</h4>
                          <p className="text-sm text-black/60">.com registration</p>
                        </div>
                        <span className="text-lg font-semibold text-indigo-600">$14.77</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Registration: 1 year</li>
                          <li>• Privacy protection: Yes</li>
                          <li>• DNS hosting: Included</li>
                          <li>• What we used it for: Professional web presence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRODUCTION */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <h3 className="text-2xl font-medium text-black">BRAND/VIDEO PRODUCTION</h3>
                    <p className="text-base text-black/60">$259.00 total</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Filmstro */}
                  <div className="border border-blue-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-blue-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Filmstro</h4>
                          <p className="text-sm text-black/60">Music licensing</p>
                        </div>
                        <span className="text-lg font-semibold text-blue-600">$189.00</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Music library: Full access</li>
                          <li>• Commercial license: Yes</li>
                          <li>• Customizable tracks: Yes</li>
                          <li>• What we used it for: Soundtrack for 15 video ads</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Adobe CC */}
                  <div className="border border-blue-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-blue-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-black">Adobe CC</h4>
                          <p className="text-sm text-black/60">Creative suite</p>
                        </div>
                        <span className="text-lg font-semibold text-blue-600">$69.99</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 -mx-1">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Apps included: All CC apps</li>
                          <li>• Cloud storage: 100GB</li>
                          <li>• Adobe Fonts: Included</li>
                          <li>• What we used it for: Video editing and design work</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};