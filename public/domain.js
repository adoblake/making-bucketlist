export function teamCapacity(capacity, team) {
  return team === 'A' ? Math.ceil(capacity / 2) : Math.floor(capacity / 2);
}
export function canJoinTeam(game, roster, team, joined, currentTeam) {
  if (!['A', 'B'].includes(team)) return false;
  if (!joined && roster.length >= game.capacity) return false;
  const occupied = roster.filter(p => p.team === team && p.id !== 'you').length;
  return occupied < teamCapacity(game.capacity, team);
}
export function visiblePlayer(player, owner = false) {
  return {
    id: player.id, name: player.name,
    profileVisible: owner || player.shareProfile === true,
    statsVisible: owner || player.shareStats === true,
    ...(owner || player.shareProfile === true ? { bio: player.bio, level: player.level } : {}),
    ...(owner || player.shareStats === true ? { stats: player.stats } : {})
  };
}
export function statSummary(entries) {
  const total = entries.reduce((sum, e) => ({ points: sum.points + e.points, rebounds: sum.rebounds + e.rebounds, assists: sum.assists + e.assists }), { points: 0, rebounds: 0, assists: 0 });
  const count = entries.length;
  return { count, points: count ? (total.points / count).toFixed(1) : '0.0', rebounds: count ? (total.rebounds / count).toFixed(1) : '0.0', assists: count ? (total.assists / count).toFixed(1) : '0.0' };
}
export function validStatEntry(e, today) {
  return typeof e.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(e.date) && Number.isFinite(Date.parse(e.date)) && new Date(e.date).toISOString().slice(0, 10) === e.date && e.date <= today && ['points', 'rebounds', 'assists'].every(key => Number.isInteger(e[key]) && e[key] >= 0 && e[key] <= 200);
}
