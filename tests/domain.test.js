import {test} from 'node:test';
import assert from 'node:assert/strict';
import {teamCapacity,canJoinTeam,visiblePlayer,statSummary,validStatEntry} from '../public/domain.js';
test('team membership respects team limits, game capacity, and switching teams',()=>{
 const g={capacity:4},players=[{id:'a',team:'A'},{id:'b',team:'A'},{id:'c',team:'B'}];
 assert.equal(canJoinTeam(g,players,'A',false),false);
 assert.equal(canJoinTeam(g,players,'B',false),true);
 const full=[...players,{id:'you',team:'B'}];
 assert.equal(canJoinTeam(g,full,'B',false),false);
 assert.equal(canJoinTeam(g,full,'A',true,'B'),false);
 assert.equal(canJoinTeam({capacity:6},full,'A',true,'B'),true);
 assert.equal(canJoinTeam(g,players,'C',true),false);
 assert.equal(teamCapacity(5,'A')+teamCapacity(5,'B'),5);
});
test('public profile excludes private fields and honors independent stats consent',()=>{
 const player={id:'p',name:'Player',bio:'Private bio',level:'Intermediate',shareProfile:false,shareStats:false,stats:{points:'8.0'}};
 assert.deepEqual(visiblePlayer(player),{id:'p',name:'Player',profileVisible:false,statsVisible:false});
 const statsOnly=visiblePlayer({...player,shareStats:true});assert.equal('bio' in statsOnly,false);assert.equal(statsOnly.stats.points,'8.0');
 const profileOnly=visiblePlayer({...player,shareProfile:true});assert.equal(profileOnly.bio,'Private bio');assert.equal('stats' in profileOnly,false);
 assert.equal(visiblePlayer(player,true).bio,'Private bio');
});
test('stat input rejects future/impossible dates, fractional and negative values',()=>{
 const entry={date:'2026-10-22',points:12,rebounds:5,assists:3};assert.equal(validStatEntry(entry,'2026-10-23'),true);
 for(const change of [{date:'2026-10-24'},{date:'2026-02-30'},{points:-1},{rebounds:2.5},{assists:201}])assert.equal(validStatEntry({...entry,...change},'2026-10-23'),false);
 assert.deepEqual(statSummary([entry,{...entry,points:8}]),{count:2,points:'10.0',rebounds:'5.0',assists:'3.0'});
 assert.equal(statSummary([]).points,'0.0');
});
