import React, { useState, useMemo } from 'react';
import { QuestFlagData, QuestFlagEntry } from '../lib/types';
import { getQuestByFlagIndex, getQuestName, type Language, type QuestInfo } from '../lib/data/questCatalog';

interface QuestFlagsEditorProps {
  questFlags: QuestFlagData | null;
  onUpdate: (updated: QuestFlagData) => void;
}

export const QuestFlagsEditor: React.FC<QuestFlagsEditorProps> = ({ questFlags, onUpdate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hubFilter, setHubFilter] = useState<string>('all');
  const [starFilter, setStarFilter] = useState<string>('all');
  const [rankFilter, setRankFilter] = useState<string>('all');
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [expandedHubs, setExpandedHubs] = useState<Set<string>>(new Set());
  const [expandedStars, setExpandedStars] = useState<Set<string>>(new Set());

  const toggleHub = (hub: string) => {
    setExpandedHubs(prev => {
      const next = new Set(prev);
      if (next.has(hub)) {
        next.delete(hub);
      } else {
        next.add(hub);
      }
      return next;
    });
  };

  const toggleStar = (hub: string, stars: number) => {
    const key = `${hub}-${stars}`;
    setExpandedStars(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const expandAll = () => {
    if (!questFlags) return;
    const allHubs = new Set(Object.keys(groupedQuests));
    const allStars = new Set<string>();
    Object.entries(groupedQuests).forEach(([hub, starGroups]) => {
      Object.keys(starGroups).forEach(stars => {
        allStars.add(`${hub}-${stars}`);
      });
    });
    setExpandedHubs(allHubs);
    setExpandedStars(allStars);
  };

  const collapseAll = () => {
    setExpandedHubs(new Set());
    setExpandedStars(new Set());
  };

  // Get unique hubs and star levels
  const { hubs, starsByHub, ranks } = useMemo(() => {
    if (!questFlags) return { hubs: [], starsByHub: {}, ranks: [] };

    const hubSet = new Set<string>();
    const starsByHubMap: Record<string, Set<number>> = {};
    const rankSet = new Set<string>();

    questFlags.parsed.forEach(flag => {
      const quest = getQuestByFlagIndex(flag.byteOffset * 8 + flag.bitOffset);
      if (quest) {
        hubSet.add(quest.hub);
        rankSet.add(quest.rank);
        
        if (!starsByHubMap[quest.hub]) {
          starsByHubMap[quest.hub] = new Set();
        }
        starsByHubMap[quest.hub].add(quest.stars);
      }
    });

    return {
      hubs: Array.from(hubSet).sort(),
      starsByHub: Object.fromEntries(
        Object.entries(starsByHubMap).map(([hub, stars]) => [hub, Array.from(stars).sort((a, b) => a - b)])
      ),
      ranks: Array.from(rankSet).sort()
    };
  }, [questFlags]);

  // Filter quests
  const filteredQuests = useMemo(() => {
    if (!questFlags) return [];

    return questFlags.parsed.filter((flag) => {
      const quest = getQuestByFlagIndex(flag.byteOffset * 8 + flag.bitOffset);
      if (!quest) return false;

      // Filter by hub
      if (hubFilter !== 'all' && quest.hub !== hubFilter) {
        return false;
      }

      // Filter by stars
      if (starFilter !== 'all' && quest.stars !== parseInt(starFilter)) {
        return false;
      }

      // Filter by rank
      if (rankFilter !== 'all' && quest.rank !== rankFilter) {
        return false;
      }

      // Filter by completion status
      if (showOnlyCompleted && !flag.completed) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const questName = getQuestName(quest, language).toLowerCase();
        const matchesName = questName.includes(query);
        const matchesId = quest.dbId.toString().includes(query);
        
        return matchesName || matchesId;
      }

      return true;
    });
  }, [questFlags, hubFilter, starFilter, rankFilter, showOnlyCompleted, searchQuery, language]);

  // Group quests by hub and stars for display
  const groupedQuests = useMemo(() => {
    const groups: Record<string, Record<number, typeof filteredQuests>> = {};
    
    filteredQuests.forEach(flag => {
      const quest = getQuestByFlagIndex(flag.byteOffset * 8 + flag.bitOffset);
      if (!quest) return;

      if (!groups[quest.hub]) {
        groups[quest.hub] = {};
      }
      if (!groups[quest.hub][quest.stars]) {
        groups[quest.hub][quest.stars] = [];
      }
      groups[quest.hub][quest.stars].push(flag);
    });

    return groups;
  }, [filteredQuests]);

  const completedCount = useMemo(() => {
    if (!questFlags) return 0;
    return questFlags.parsed.filter(q => q.completed).length;
  }, [questFlags]);

  const toggleQuestFlag = (byteOffset: number, bitOffset: number) => {
    if (!questFlags) return;

    const updated = { ...questFlags };
    updated.parsed = questFlags.parsed.map(quest => {
      if (quest.byteOffset === byteOffset && quest.bitOffset === bitOffset) {
        return { ...quest, completed: !quest.completed };
      }
      return quest;
    });

    onUpdate(updated);
  };

  const setAllInHub = (hub: string, stars: number | null, completed: boolean) => {
    if (!questFlags) return;

    const updated = { ...questFlags };
    updated.parsed = questFlags.parsed.map(flag => {
      const quest = getQuestByFlagIndex(flag.byteOffset * 8 + flag.bitOffset);
      if (quest && quest.hub === hub && (stars === null || quest.stars === stars)) {
        return { ...quest, completed };
      }
      return flag;
    });

    onUpdate(updated);
  };

  const renderStars = (count: number) => {
    return (
      <span style={{ color: '#ffd700', fontSize: '14px', letterSpacing: '1px' }}>
        {'★'.repeat(count)}
      </span>
    );
  };

  const getRankBadgeStyle = (rank: string) => {
    const baseStyle = {
      display: 'inline-block',
      padding: '2px 6px',
      borderRadius: '3px',
      fontSize: '11px',
      fontWeight: 600,
      marginLeft: '6px'
    };

    switch (rank) {
      case 'LR':
        return { ...baseStyle, backgroundColor: '#4caf50', color: 'white' };
      case 'HR':
        return { ...baseStyle, backgroundColor: '#ff9800', color: 'white' };
      case 'G':
        return { ...baseStyle, backgroundColor: '#9c27b0', color: 'white' };
      default:
        return { ...baseStyle, backgroundColor: '#757575', color: 'white' };
    }
  };

  if (!questFlags) {
    return <p className="hint">Load a save to view quest completion flags.</p>;
  }

  return (
    <div className="quest-flags-editor">
      <div className="subcard-header">
        <div>
          <p className="label">Quest Completion (Quest Log)</p>
          <p className="meta">
            {completedCount} / {questFlags.parsed.length} quests completed
          </p>
        </div>
        <span className="pill">{questFlags.parsed.length} total quests</span>
      </div>

      <div className="filter-controls" style={{ marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search by quest name or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: '1 1 200px', minWidth: '200px' }}
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          style={{ flex: '0 1 auto' }}
        >
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
        </select>

        <select
          value={hubFilter}
          onChange={(e) => {
            setHubFilter(e.target.value);
            setStarFilter('all');
          }}
          style={{ flex: '0 1 auto' }}
        >
          <option value="all">All Hubs</option>
          {hubs.map(hub => (
            <option key={hub} value={hub}>{hub}</option>
          ))}
        </select>

        {hubFilter !== 'all' && starsByHub[hubFilter] && (
          <select
            value={starFilter}
            onChange={(e) => setStarFilter(e.target.value)}
            style={{ flex: '0 1 auto' }}
          >
            <option value="all">All Stars</option>
            {starsByHub[hubFilter].map(stars => (
              <option key={stars} value={stars}>{stars}★</option>
            ))}
          </select>
        )}

        <select
          value={rankFilter}
          onChange={(e) => setRankFilter(e.target.value)}
          style={{ flex: '0 1 auto' }}
        >
          <option value="all">All Ranks</option>
          {ranks.map(rank => (
            <option key={rank} value={rank}>{rank}</option>
          ))}
        </select>

        <label style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: '0 1 auto' }}>
          <input
            type="checkbox"
            checked={showOnlyCompleted}
            onChange={(e) => setShowOnlyCompleted(e.target.checked)}
          />
          <span>Completed only</span>
        </label>
      </div>

      <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
        <button className="primary mini" type="button" onClick={expandAll}>
          Expand All
        </button>
        <button className="ghost mini" type="button" onClick={collapseAll}>
          Collapse All
        </button>
      </div>

      <div className="quest-list" style={{ maxHeight: '600px', overflowY: 'auto' }}>
        {Object.keys(groupedQuests).length === 0 ? (
          <p className="hint">No quests match the current filters.</p>
        ) : (
          Object.entries(groupedQuests).map(([hub, starGroups]) => {
            const isHubExpanded = expandedHubs.has(hub);
            const totalQuests = Object.values(starGroups).flat().length;
            const completedQuests = Object.values(starGroups).flat().filter(q => q.completed).length;
            
            return (
            <div key={hub} style={{ marginBottom: '24px' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => toggleHub(hub)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {isHubExpanded ? '▼' : '▶'}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                    {hub} ({completedQuests}/{totalQuests})
                  </h3>
                </div>
                {/* Quest completion editing controls disabled: read-only view */}
              </div>

              {isHubExpanded && Object.entries(starGroups).sort(([a], [b]) => parseInt(a) - parseInt(b)).map(([stars, quests]) => {
                const starKey = `${hub}-${stars}`;
                const isStarExpanded = expandedStars.has(starKey);
                
                return (
                <div key={stars} style={{ marginBottom: '16px' }}>
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '6px 12px',
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      borderRadius: '3px',
                      marginBottom: '6px',
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleStar(hub, parseInt(stars))}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        {isStarExpanded ? '▼' : '▶'}
                      </span>
                      <span style={{ fontWeight: 500 }}>
                        {renderStars(parseInt(stars))} ({quests.filter(q => q.completed).length}/{quests.length})
                      </span>
                    </div>
                    {/* Per-star completion editing disabled: quest completion is derived from quest log and is read-only. */}
                  </div>

                  {isStarExpanded && <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {quests.map(flag => {
                      const quest = getQuestByFlagIndex(flag.byteOffset * 8 + flag.bitOffset);
                      if (!quest) return null;

                      return (
                        <div
                          key={`${flag.byteOffset}-${flag.bitOffset}`}
                          className="item-row"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 12px',
                            backgroundColor: flag.completed ? 'rgba(76, 175, 80, 0.1)' : 'transparent',
                            borderLeft: flag.completed ? '3px solid rgba(76, 175, 80, 0.8)' : '3px solid transparent'
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <p className="label small" style={{ margin: 0 }}>
                                {getQuestName(quest, language)}
                                {flag.completed && <span style={{ marginLeft: '8px', color: '#4caf50' }}>✓</span>}
                              </p>
                              <span style={getRankBadgeStyle(quest.rank)}>{quest.rank}</span>
                            </div>
                            <p className="meta" style={{ margin: 0 }}>
                              ID: {quest.dbId} • Flag bit: {flag.byteOffset * 8 + flag.bitOffset}
                            </p>
                          </div>
                          {/* Per-quest completion editing disabled; display is read-only. */}
                        </div>
                      );
                    })}
                  </div>}
                </div>
              );
              })}
            </div>
          );
          })
        )}
      </div>

      <details className="manual-editor" style={{ marginTop: '16px' }}>
        <summary>Technical Info</summary>
        <div style={{ padding: '12px', fontSize: '12px', fontFamily: 'monospace' }}>
          <p><strong>Quest Log Region:</strong> 0x250060–0x260000 (0xA0-byte records, absolute)</p>
          <p><strong>Completion Source:</strong> Derived from quest history log entries (dbId at +0x77, UTF-16 name at +0x79).</p>
          <p><strong>Legacy Flags Block:</strong> Starting at offset 0x{(0x1B092E).toString(16).toUpperCase()} ({questFlags.raw.length} bytes, {questFlags.raw.length * 8} bits)</p>
          <p><strong>Known Quests:</strong> 1355 (from mhgu.db)</p>
          <p><strong>Note:</strong> The legacy bitfield region is no longer used to determine completion; this view is read-only and for debugging only.</p>
        </div>
      </details>
    </div>
  );
};
