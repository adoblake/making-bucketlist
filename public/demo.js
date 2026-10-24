export function createShowcase(now=new Date()){
 const isoDay=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
 const shift=(days,hour=18)=>{const d=new Date(now);d.setDate(d.getDate()+days);d.setHours(hour,0,0,0);return d;};
 const parks=['pierce','encanto','scottsdale'],custom=[],stats=[],joined=['pierce','encanto','scottsdale'],teams={pierce:'A',encanto:'B',scottsdale:'A'},messages={};
 for(let i=0;i<24;i++){
  const days=-84+Math.floor(i*3.45),d=shift(days),courtId=parks[i%3],id='local-showcase-'+i;
  custom.push({id,courtId,title:['Tuesday night crew','Weekend community run','Sunset five-on-five'][i%3],startsAt:d.toISOString(),capacity:10,level:'All levels',note:'Fictional completed session from the 90-day showcase.',players:['jordan','sam','alex','casey','taylor','morgan'],completed:true});
  stats.push({id:'showcase-stat-'+i,date:isoDay(d),points:8+(i%5)*2+Math.floor(i/6),rebounds:3+i%6,assists:2+i%5,note:['Pierce Park · evening run','Encanto Park · community hoops','Chaparral Park · weekend crew'][i%3],gameId:id,minutes:45+(i%3)*10});joined.push(id);teams[id]=i%2?'B':'A';
 }
 messages.pierce=['I can bring the ball and two spare pinnies.','Planning to arrive 15 minutes early for warmups.'];messages.encanto=['Is anyone coming from the east side?','I’m in for the evening run.'];messages['court:pierce']=['Loved the friendly pace last Saturday. Let’s run it back!','Planning a beginner-friendly game next weekend.'];messages['court:encanto']=['Ask the group to confirm lighting before an evening visit.'];
 return {custom,stats,joined,teams,messages,groups:parks,teamNames:{pierce:{A:'Northside Hoopers',B:'Valley Crew'},encanto:{A:'Sunset Squad',B:'Desert Ballers'},scottsdale:{A:'Early Birds',B:'Weekend Crew'}},profile:{name:'Marcus Rivera',bio:'Three months of getting outside, meeting the crew, and working on my passing. Usually up for an evening run or a friendly weekend game.',level:'Intermediate',shareProfile:true,shareStats:true,memberSince:isoDay(shift(-90))},showcaseSince:isoDay(shift(-90)),showcase:true};
}
