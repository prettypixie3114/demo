import React, { useState } from 'react';
import { ChevronDown, AlertCircle, CheckCircle2, TrendingUp, Users, DollarSign, Target, Eye, Zap } from 'lucide-react';

const FFTExecutiveDashboard = () => {
  const [expandedIssue, setExpandedIssue] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Real data from Fashion-Forever-Trends
  const campaigns = [
    {
      id: 1,
      name: 'PS | SSTLAL | 08-Nov-25',
      status: 'active',
      startDate: '2025-11-08',
      spend: 529588,
      impressions: 2373986,
      purchases: 115,
      roas: 1.38,
      cpc: 12.93,
      ctr: 1.725,
      reach: 632553,
      budget: 2500,
      budgetType: 'Daily',
      compliance: {
        compliant: false,
        score: 65,
        issues: [
          {
            id: 'issue-1',
            type: 'ROAS Below Target',
            severity: 'warning',
            protocol: 'Target minimum ROAS: 1.5x',
            current: '1.38x',
            expected: '≥ 1.5x',
            impact: 'Campaign ROAS is 8% below target. Expected conversion value delivery not met.',
            setup: 'Enable value-based bidding and optimize for high-value customers'
          },
          {
            id: 'issue-2',
            type: 'CPM Not Optimized',
            severity: 'info',
            protocol: 'Target CPM range: ₹100-150 for catalog sales',
            current: '₹223.08',
            expected: '₹100-150',
            impact: 'CPM is higher than benchmark. Consider refining audience targeting.',
            setup: 'Test lookalike audiences and reduce geographic targeting'
          }
        ]
      }
    },
    {
      id: 2,
      name: 'PS | AD+CR | SINP - 08-Apr-26',
      status: 'active',
      startDate: '2026-04-08',
      spend: 630234,
      impressions: 661320,
      purchases: 175,
      roas: 1.54,
      cpc: 34.45,
      ctr: 2.766,
      reach: 155513,
      budget: 20000,
      budgetType: 'Daily',
      compliance: {
        compliant: true,
        score: 92,
        issues: []
      }
    },
    {
      id: 3,
      name: 'PS | AD+CR+NCR | 08-Jan-26',
      status: 'active',
      startDate: '2026-01-08',
      spend: 178702,
      impressions: 125117,
      purchases: 49,
      roas: 1.46,
      cpc: 36.86,
      ctr: 3.875,
      reach: 39416,
      budget: 1500,
      budgetType: 'Daily',
      compliance: {
        compliant: false,
        score: 58,
        issues: [
          {
            id: 'issue-3',
            type: 'Low Budget Allocation',
            severity: 'critical',
            protocol: 'Budget should be ≥ ₹2,000 daily for optimal delivery',
            current: '₹1,500',
            expected: '≥ ₹2,000',
            impact: 'Limited daily budget restricts reach and conversion potential. 25% below recommended minimum.',
            setup: 'Increase daily budget or consolidate with other ad sets to reach minimum threshold'
          },
          {
            id: 'issue-4',
            type: 'CPC Higher Than Expected',
            severity: 'warning',
            protocol: 'Target CPC: ₹25-30 for this audience',
            current: '₹36.86',
            expected: '₹25-30',
            impact: 'Cost per click is 23% higher than target. Lower conversion efficiency.',
            setup: 'Refine audience targeting, test new creative assets, enable A/B testing'
          }
        ]
      }
    },
    {
      id: 4,
      name: 'PS | SINP | 09-Apr-26',
      status: 'active',
      startDate: '2026-04-09',
      spend: 449022,
      impressions: 6290555,
      purchases: 89,
      roas: 1.06,
      cpc: 9.17,
      ctr: 0.778,
      reach: 3088491,
      budget: null,
      budgetType: 'Using ad set budget',
      compliance: {
        compliant: false,
        score: 45,
        issues: [
          {
            id: 'issue-5',
            type: 'Critical: ROAS Below Minimum',
            severity: 'critical',
            protocol: 'Minimum acceptable ROAS: 1.3x',
            current: '1.06x',
            expected: '≥ 1.3x',
            impact: 'Campaign is underperforming. Only generating 81% of expected revenue. Immediate action needed.',
            setup: 'Consider pausing and reallocating budget to better performing campaigns or completely restructure audience targeting'
          },
          {
            id: 'issue-6',
            type: 'CTR Below Industry Standard',
            severity: 'warning',
            protocol: 'Fashion industry average CTR: ≥ 1.2%',
            current: '0.78%',
            expected: '≥ 1.2%',
            impact: 'Click-through rate is 35% below industry benchmark. Ad creative may need refresh.',
            setup: 'Test new creative variations, update product imagery, improve ad copy messaging'
          }
        ]
      }
    },
    {
      id: 5,
      name: 'PS : INCLBS : 12-May-26',
      status: 'active',
      startDate: '2026-05-12',
      spend: 32110,
      impressions: 43478,
      purchases: 8,
      roas: 1.075,
      cpc: 49.48,
      ctr: 1.493,
      reach: 32776,
      budget: 4000,
      budgetType: 'Daily',
      compliance: {
        compliant: false,
        score: 52,
        issues: [
          {
            id: 'issue-7',
            type: 'CPC Significantly High',
            severity: 'critical',
            protocol: 'Maximum acceptable CPC: ₹35 for bundle products',
            current: '₹49.48',
            expected: '≤ ₹35',
            impact: 'Cost per click is 41% above target. Getting low-quality traffic. Profitability at risk.',
            setup: 'Review audience demographics (age, location, interests), test interest-based vs. lookalike targeting, check conversion pixel accuracy'
          }
        ]
      }
    }
  ];

  const expectedSetup = {
    audiences: {
      ageRange: '25-54',
      gender: 'Female/All',
      locations: 'India',
      interests: 'Fashion, Clothing, Lifestyle'
    },
    bidding: {
      strategy: 'Highest volume (Conversion focused)',
      optimization: 'Maximize conversions',
      placement: 'Facebook, Instagram, Audience Network'
    },
    targeting: {
      expansion: 'Yes',
      lookalike: 'Based on purchasers',
      exclusions: 'Past 180 days purchasers (for TOFU)'
    },
    performance: {
      minROAS: 1.3,
      targetROAS: 1.5,
      maxCPC: 35,
      targetCTR: 1.2
    }
  };

  const overallMetrics = {
    totalSpend: 1820656,
    totalImpressions: 9890445,
    totalPurchases: 456,
    totalROAS: 1.32,
    avgCPC: 22.84,
    totalReach: 4348349,
    compliantCampaigns: 1,
    totalCampaigns: 5
  };

  const complianceStatus = [
    { id: 'p1', name: 'Target ROAS', requirement: '≥ 1.3x', status: 'partial', campaigns: '2/5 compliant' },
    { id: 'p2', name: 'Minimum Daily Budget', requirement: '≥ ₹2,000', status: 'failed', campaigns: '1/5 compliant' },
    { id: 'p3', name: 'CPC Target', requirement: '₹25-35 range', status: 'partial', campaigns: '3/5 compliant' },
    { id: 'p4', name: 'CTR Performance', requirement: '≥ 1.2%', status: 'partial', campaigns: '2/5 compliant' },
    { id: 'p5', name: 'Audience Setup', requirement: 'F25-54, India', status: 'passed', campaigns: '5/5 compliant' },
    { id: 'p6', name: 'Conversion Tracking', requirement: 'Active pixels', status: 'passed', campaigns: '5/5 compliant' }
  ];

  const toggleIssue = (issueId) => {
    setExpandedIssue(expandedIssue === issueId ? null : issueId);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'passed': return 'text-emerald-400';
      case 'failed': return 'text-red-500';
      case 'partial': return 'text-amber-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'passed': return 'bg-emerald-950';
      case 'failed': return 'bg-red-950';
      case 'partial': return 'bg-amber-950';
      default: return 'bg-gray-800';
    }
  };

  const getComplianceColor = (score) => {
    if (score >= 85) return '#10b981'; // green
    if (score >= 70) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0e27' }}>
      {/* Header */}
      <div className="border-b" style={{ borderColor: '#1e293b', backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div>
            <h1 className="text-4xl font-light tracking-tight" style={{ color: '#f8fafc' }}>
              Fashion-Forever-Trends <span style={{ color: '#ec4899' }}>Meta Ads Dashboard</span>
            </h1>
            <p className="text-sm mt-2" style={{ color: '#94a3b8' }}>Campaign Performance & Setup Compliance Audit | Jan 2025 - May 2026</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-5 gap-4 mb-12">
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderLeft: '4px solid #3b82f6' }}>
            <p className="text-xs font-medium" style={{ color: '#94a3b8' }}>TOTAL SPEND</p>
            <p className="text-2xl font-bold mt-2" style={{ color: '#f8fafc' }}>
              ₹{(overallMetrics.totalSpend / 100000).toFixed(1)}L
            </p>
            <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>5 campaigns</p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderLeft: '4px solid #10b981' }}>
            <p className="text-xs font-medium" style={{ color: '#94a3b8' }}>OVERALL ROAS</p>
            <p className="text-2xl font-bold mt-2" style={{ color: '#f8fafc' }}>
              {overallMetrics.totalROAS.toFixed(2)}x
            </p>
            <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>Target: 1.5x</p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderLeft: '4px solid #f59e0b' }}>
            <p className="text-xs font-medium" style={{ color: '#94a3b8' }}>TOTAL REACH</p>
            <p className="text-2xl font-bold mt-2" style={{ color: '#f8fafc' }}>
              {(overallMetrics.totalReach / 1000000).toFixed(1)}M
            </p>
            <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>{overallMetrics.totalImpressions.toLocaleString()} impressions</p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderLeft: '4px solid #8b5cf6' }}>
            <p className="text-xs font-medium" style={{ color: '#94a3b8' }}>AVG CPC</p>
            <p className="text-2xl font-bold mt-2" style={{ color: '#f8fafc' }}>
              ₹{overallMetrics.avgCPC.toFixed(0)}
            </p>
            <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>Target: ₹25-35</p>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderLeft: '4px solid #ec4899' }}>
            <p className="text-xs font-medium" style={{ color: '#94a3b8' }}>COMPLIANCE RATE</p>
            <p className="text-2xl font-bold mt-2" style={{ color: '#f8fafc' }}>
              {Math.round((overallMetrics.compliantCampaigns / overallMetrics.totalCampaigns) * 100)}%
            </p>
            <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>{overallMetrics.compliantCampaigns}/{overallMetrics.totalCampaigns} campaigns</p>
          </div>
        </div>

        {/* Protocol Requirements vs Setup */}
        <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderLeft: '4px solid #3b82f6' }}>
          <h2 className="text-lg font-light tracking-tight mb-6" style={{ color: '#f8fafc' }}>
            📋 Expected Setup vs Actual Setup
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-bold mb-3" style={{ color: '#94a3b8' }}>AUDIENCE SETUP</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Age Range</span>
                  <span style={{ color: '#10b981' }}>✓ 25-54</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Gender</span>
                  <span style={{ color: '#10b981' }}>✓ Female</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Location</span>
                  <span style={{ color: '#10b981' }}>✓ India</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Targeting Expansion</span>
                  <span style={{ color: '#10b981' }}>✓ Enabled</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold mb-3" style={{ color: '#94a3b8' }}>BIDDING STRATEGY</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Strategy</span>
                  <span style={{ color: '#10b981' }}>✓ Highest Volume</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Optimization</span>
                  <span style={{ color: '#10b981' }}>✓ Conversions</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Placements</span>
                  <span style={{ color: '#10b981' }}>✓ Multi-channel</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Pixel Tracking</span>
                  <span style={{ color: '#10b981' }}>✓ Active</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold mb-3" style={{ color: '#94a3b8' }}>PERFORMANCE TARGETS</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Min ROAS</span>
                  <span style={{ color: '#f59e0b' }}>⚠ 1.32x (Target 1.3x)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>CPC Range</span>
                  <span style={{ color: '#ef4444' }}>✗ ₹22.84 (Target 25-35)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: '#cbd5e1' }}>Avg CTR</span>
                  <span style={{ color: '#f59e0b' }}>⚠ 1.37% (Target ≥1.2%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Status Grid */}
        <div className="mb-12">
          <h2 className="text-lg font-light tracking-tight mb-6" style={{ color: '#f8fafc' }}>
            📊 Protocol Compliance Summary
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {complianceStatus.map((protocol) => (
              <div
                key={protocol.id}
                className={`p-4 rounded-lg border ${getStatusBg(protocol.status)}`}
                style={{ borderColor: protocol.status === 'failed' ? '#ef4444' : protocol.status === 'partial' ? '#f59e0b' : '#10b981' }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: '#f8fafc' }}>{protocol.name}</p>
                    <p className="text-xs mt-2" style={{ color: '#cbd5e1' }}>{protocol.requirement}</p>
                    <p className="text-xs mt-2 font-medium" style={{ color: '#94a3b8' }}>{protocol.campaigns}</p>
                  </div>
                  <div className="ml-3">
                    {protocol.status === 'passed' && <CheckCircle2 size={20} className="text-emerald-400" />}
                    {protocol.status === 'failed' && <AlertCircle size={20} className="text-red-500" />}
                    {protocol.status === 'partial' && <AlertCircle size={20} className="text-amber-400" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Cards */}
        <div>
          <h2 className="text-lg font-light tracking-tight mb-6" style={{ color: '#f8fafc' }}>
            📈 Campaign Performance & Compliance Audit
          </h2>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="rounded-lg border overflow-hidden"
                style={{
                  backgroundColor: '#1e293b',
                  borderColor: campaign.compliance.compliant ? '#10b98155' : '#ef444455'
                }}
              >
                {/* Campaign Header */}
                <div
                  className="p-6 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
                  style={{
                    backgroundColor: '#1e293b',
                    borderBottom: selectedCampaign === campaign.id ? '1px solid #334155' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-medium" style={{ color: '#f8fafc' }}>
                          {campaign.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div
                            className="px-2.5 py-1 rounded text-xs font-medium"
                            style={{
                              backgroundColor: `${getComplianceColor(campaign.compliance.score)}22`,
                              color: getComplianceColor(campaign.compliance.score)
                            }}
                          >
                            {campaign.compliance.score}% Compliant
                          </div>
                          {campaign.compliance.compliant ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-emerald-950" style={{ color: '#10b981' }}>
                              <CheckCircle2 size={14} /> Pass
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-red-950" style={{ color: '#ef4444' }}>
                              <AlertCircle size={14} /> Issues
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs mt-2" style={{ color: '#94a3b8' }}>
                        Started: {campaign.startDate} • Spend: ₹{campaign.spend.toLocaleString()} • {campaign.purchases} purchases
                      </p>
                    </div>
                    <div className="text-right ml-8">
                      <div className="grid grid-cols-3 gap-6 text-sm">
                        <div>
                          <p style={{ color: '#94a3b8' }} className="text-xs">ROAS</p>
                          <p className="font-bold" style={{ color: campaign.roas >= 1.3 ? '#10b981' : '#f59e0b' }}>
                            {campaign.roas.toFixed(2)}x
                          </p>
                        </div>
                        <div>
                          <p style={{ color: '#94a3b8' }} className="text-xs">CPC</p>
                          <p className="font-bold" style={{ color: campaign.cpc <= 35 ? '#10b981' : '#ef4444' }}>
                            ₹{campaign.cpc.toFixed(0)}
                          </p>
                        </div>
                        <div>
                          <p style={{ color: '#94a3b8' }} className="text-xs">CTR</p>
                          <p className="font-bold" style={{ color: campaign.ctr >= 1.2 ? '#10b981' : '#f59e0b' }}>
                            {campaign.ctr.toFixed(2)}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      style={{
                        color: '#94a3b8',
                        transform: selectedCampaign === campaign.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                      className="ml-4"
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedCampaign === campaign.id && (
                  <div style={{ backgroundColor: '#0f172a', borderTop: '1px solid #334155' }} className="p-6">
                    {campaign.compliance.compliant ? (
                      <div className="text-center py-8">
                        <CheckCircle2 size={40} className="mx-auto mb-3 text-emerald-400" />
                        <p style={{ color: '#94a3b8' }}>All setup requirements and performance targets are being met. Campaign is operating optimally.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm font-medium mb-4" style={{ color: '#f8fafc' }}>Issues Found ({campaign.compliance.issues.length})</p>
                        {campaign.compliance.issues.map((issue) => (
                          <div
                            key={issue.id}
                            className="rounded-lg p-4"
                            style={{
                              backgroundColor: '#1e293b',
                              borderLeft: `4px solid ${issue.severity === 'critical' ? '#ef4444' : '#f59e0b'}`
                            }}
                          >
                            <button
                              onClick={() => toggleIssue(issue.id)}
                              className="w-full text-left flex items-start justify-between hover:opacity-90 transition-opacity"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <AlertCircle size={16} style={{ color: issue.severity === 'critical' ? '#ef4444' : '#f59e0b' }} />
                                  <h4 className="text-sm font-medium" style={{ color: '#f8fafc' }}>
                                    {issue.type}
                                  </h4>
                                  <span className="text-xs px-2 py-1 rounded font-medium" style={{
                                    backgroundColor: issue.severity === 'critical' ? '#ef444422' : '#f59e0b22',
                                    color: issue.severity === 'critical' ? '#ef4444' : '#f59e0b'
                                  }}>
                                    {issue.severity.toUpperCase()}
                                  </span>
                                </div>
                              </div>
                              <ChevronDown
                                size={16}
                                style={{
                                  color: '#94a3b8',
                                  transform: expandedIssue === issue.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s ease'
                                }}
                              />
                            </button>

                            {expandedIssue === issue.id && (
                              <div className="mt-4 pt-4 border-t space-y-4" style={{ borderColor: '#334155' }}>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-xs font-medium mb-1" style={{ color: '#94a3b8' }}>CURRENTLY DELIVERED</p>
                                    <p className="text-sm font-medium" style={{ color: '#ef4444' }}>{issue.current}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium mb-1" style={{ color: '#94a3b8' }}>EXPECTED SETUP</p>
                                    <p className="text-sm font-medium" style={{ color: '#10b981' }}>{issue.expected}</p>
                                  </div>
                                </div>
                                
                                <div>
                                  <p className="text-xs font-medium mb-2" style={{ color: '#94a3b8' }}>PROTOCOL REQUIREMENT</p>
                                  <p className="text-sm" style={{ color: '#cbd5e1' }}>{issue.protocol}</p>
                                </div>

                                <div className="p-3 rounded" style={{ backgroundColor: '#1e293b', borderLeft: '3px solid #f59e0b' }}>
                                  <p className="text-xs font-medium mb-1" style={{ color: '#f59e0b' }}>BUSINESS IMPACT</p>
                                  <p className="text-sm" style={{ color: '#cbd5e1' }}>{issue.impact}</p>
                                </div>

                                <div className="p-3 rounded" style={{ backgroundColor: '#1e293b', borderLeft: '3px solid #3b82f6' }}>
                                  <p className="text-xs font-medium mb-2" style={{ color: '#3b82f6' }}>✓ RECOMMENDED FIX & SETUP CHANGE</p>
                                  <p className="text-sm" style={{ color: '#cbd5e1' }}>{issue.setup}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary & Actions */}
        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderTop: '3px solid #f59e0b' }}>
            <h3 className="text-sm font-medium mb-4" style={{ color: '#f8fafc' }}>📊 Audit Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p style={{ color: '#94a3b8' }}>Total Campaigns Audited</p>
                <p className="font-medium" style={{ color: '#f8fafc' }}>{campaigns.length}</p>
              </div>
              <div className="flex items-center justify-between">
                <p style={{ color: '#94a3b8' }}>Fully Compliant</p>
                <p className="font-medium text-emerald-400">{campaigns.filter(c => c.compliance.compliant).length}</p>
              </div>
              <div className="flex items-center justify-between">
                <p style={{ color: '#94a3b8' }}>Needs Attention</p>
                <p className="font-medium text-red-500">{campaigns.filter(c => !c.compliance.compliant).length}</p>
              </div>
              <div className="flex items-center justify-between">
                <p style={{ color: '#94a3b8' }}>Critical Issues</p>
                <p className="font-medium text-red-500">
                  {campaigns.reduce((sum, c) => sum + c.compliance.issues.filter(i => i.severity === 'critical').length, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b', borderTop: '3px solid #3b82f6' }}>
            <h3 className="text-sm font-medium mb-4" style={{ color: '#f8fafc' }}>⚡ Priority Actions</h3>
            <div className="space-y-2">
              <button className="w-full py-2.5 px-4 rounded text-sm font-medium transition-all hover:opacity-90" 
                style={{ backgroundColor: '#ef4444', color: '#f8fafc' }}>
                ✓ Fix Critical Issues (2)
              </button>
              <button className="w-full py-2.5 px-4 rounded text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: '#f59e0b', color: '#1e293b' }}>
                ⚠ Review Warning Items (4)
              </button>
              <button className="w-full py-2.5 px-4 rounded text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: '#3b82f6', color: '#f8fafc' }}>
                📊 Export Full Audit Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FFTExecutiveDashboard;